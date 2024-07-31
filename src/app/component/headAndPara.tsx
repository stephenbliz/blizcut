interface headAndParaProp {
    head: string
    para: string
}

export default function HeadAndPara({head, para}: headAndParaProp){
    return(
        <div
            className="mb-8"
        >
            <h1
                className="capitalize text-secondary-black-200 text-center font-bold text-3xl sm:text-5xl font-oswald mb-8"
            >
                {head}
            </h1>
            <p
                className="text-center lg:w-[70%] mx-auto mb-8"
            >
                {para} 
            </p>
        </div>
    )
}