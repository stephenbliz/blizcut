interface category{
    slug: string
    title: string
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