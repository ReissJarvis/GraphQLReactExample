import { RequestGenericInterface } from 'fastify';

export interface genericBreedRequest extends RequestGenericInterface {
    Params: {
        breed: string
    }
}
