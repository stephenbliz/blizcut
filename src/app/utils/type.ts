interface category{
    slug: string
    title: string
}
export interface categories{
    name: string
    link: () => Promise<void>
    id: number
}

export interface service{
    createdAt: string
    description: string 
    excerpt: string
    slug: string
    id: string
    title: string
    featuredImage: {
        alt: string
        url: string
    }
    price: number
    serviceCategory: category[]
}

export interface serviceResponse {
    services: service[]
}
export interface serviceDetailResponse {
    service: service
}

export interface serviceSectionProp {
    services: service[]
    gap: string
    display: string
    childWidth: string
    parentWidth: string
}
export interface serviceDetailProp{
    params : {
        serviceDetail: string
    }
}
export interface gallery{
    image: {
        alt: string
        url: string
    }
    id: string
    title: string
    slug: string
    serviceCategory: category[]
}

export interface galleryResponse{
    galleries: gallery[]
}

export interface serviceCategory{
    title: string
    slug: string
    id: string
}
export interface serviceCategoryResponse{
    serviceCategories: serviceCategory[]
}
export interface galeryProp {
    categories: categories[]
    galleries: gallery[]
    activeTag: string
}