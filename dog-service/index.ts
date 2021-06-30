import fastify from 'fastify'
import axios from 'axios';
import { BaseDogResponse, BreedList, DogFactResponse, genericBreedRequest, hasFailed } from './src/models';
import { FastifyCorsOptions } from 'fastify-cors';

const server = fastify(
    {
        logger: true
    }
)

server.register(require('fastify-cors'), {
    origin: "*"
} as FastifyCorsOptions)

server.get('/ok', async (request, reply) => {
    return reply.send("All good!")
})

server.get('/breed', async(request, reply) => {
    const listResponse = await axios.get<BaseDogResponse<BreedList>>('http://dog.ceo/api/breeds/list/all')

    if (hasFailed(listResponse.data)) {
        reply.status(500).send(`Error retrieving breed list from third party: "${listResponse.data.message}"`)
    }

    return reply.send(listResponse.data.message)
})

server.get<genericBreedRequest>('/breed/:breed/image', async (request, reply) => {
    const breed = request.params.breed
    const listResponse = await axios.get<BaseDogResponse<string>>(`http://dog.ceo/api/breeds/${breed}/images/random`)

    if (hasFailed(listResponse.data)) {
        reply.status(500).send(`Error retrieving breed list from third party: "${listResponse.data.message}"`)
    }

    return reply.send(listResponse.data.message)
})

server.get('/fact', async(request, reply) => {
    try{
        const factResponse  = await axios.get<DogFactResponse[]>("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")
        return reply.send(factResponse.data[0].fact)
    } catch (err) {
        const errorMessage = err.message

        return reply.status(500).send(errorMessage)
    }
})

// Need to specify 0.0.0.0 here for docker network
server.listen(8080, '0.0.0.0', (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }

    console.log(`Server listening at ${address}`)
})
