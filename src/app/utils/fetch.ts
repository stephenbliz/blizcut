import { gql, request } from "graphql-request"
import { service, serviceResponse } from "./type";


const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
// const graphqlApi = 'https://eu-west-2.cdn.hygraph.com/content/cm0z03j6603tv07wav1u0utv8/master';

export const getServices = async ():Promise<service[] | null> => {

    const query = gql`
        query Services {
            services {
                excerpt
                description
                price
                slug
                title
                id
                featuredImage {
                    alt
                    url
                }
                createdAt
                serviceCategory {
                    slug
                    title
                }
            }
        }
    `
    const result = await request<serviceResponse>(graphqlApi, query);
    return result.services;
}

export const getSixServices = async (): Promise<service[] | null> => {

    const query = gql`
        query Services {
            services(last:6) {
                excerpt
                description
                price
                slug
                title
                id
                featuredImage {
                    alt
                    url
                }
                createdAt
                serviceCategory {
                    slug
                    title
                }
            }
        }
    `
    const result = await request<serviceResponse>(graphqlApi, query);
    return result.services;
}