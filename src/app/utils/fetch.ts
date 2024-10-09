import { gql, request } from "graphql-request"
import { 
    service, 
    serviceResponse, 
    serviceDetailResponse,
    gallery,
    galleryResponse,
    serviceCategory,
    serviceCategoryResponse

} from "./type";


const graphqlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

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

export const getServiceDetail = async (slug:string): Promise<service | null> => {
    const query = gql`
        query ServiceDetail($slug: String!) {
            service(where: {slug: $slug}) {
                createdAt
                description
                excerpt
                id
                price
                title
                slug
                featuredImage {
                    alt
                    url
                }
                serviceCategory {
                title
                slug
                }
            }
        }
    `
    const variables = {slug}
    const result = await request<serviceDetailResponse>(graphqlApi, query, variables);
    return result.service
}

export const getAllGallery = async (): Promise<gallery[] | null> => {
    const query = gql`
        query AllGallery {
            galleries(orderBy: createdAt_ASC) {
                id
                image {
                alt
                url
                }
                slug
                title
                serviceCategory {
                slug
                title
                }
            }
        }
    `
    const result = await request<galleryResponse>(graphqlApi, query);
    return result.galleries;
}

export const getServiceCategories = async (): Promise<serviceCategory[] | null> => {
    const query = gql`
        query ServiceCategories {
            serviceCategories {
                id
                slug
                title
            }
        }
    `
    const result = await request<serviceCategoryResponse>(graphqlApi, query);
    return result.serviceCategories;
}

export const getSomeGallery = async (category: string): Promise<gallery[] | null> => {
    const query = gql`
        query SomeGallery($category : [String!]){
            galleries(
                orderBy : createdAt_ASC                
                where: {
                    serviceCategory_some: {title_in: $category}
                }
            ){
                id
                image {
                    alt
                    url
                }
                slug
                title
                serviceCategory {
                    slug
                    title
                }
            }
        }
    `
    const variables = {category: [category]};
    const result = await request<galleryResponse>(graphqlApi, query, variables);
    return result.galleries
}