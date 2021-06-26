import fastify from 'fastify'
import axios from 'axios';
import { BaseDogResponse, BreedList, DogFactResponse, genericBreedRequest, hasFailed } from './src/models';

const server = fastify()

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
    const factResponse  = await axios.get<DogFactResponse[]>("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")

    return reply.send(factResponse.data[0].fact)
})

server.get('/ping', async (request, reply) => {
    return 'pong\n'
})

server.listen(8080, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
