import Image, { StaticImageData } from "next/image";

interface post {
    image: StaticImageData
    date: string
    snippet: string
}

interface PostSnippetProp {
    posts : post[]
    heading: string
    width: string
    border: string
    bold: string
}

export default function PostSnippet({posts, heading, width, border, bold}: PostSnippetProp){
    return (
        <div
                className={`w-[full] ${width} mb-8 lg:mb-0`}
            >
                <h1
                    className={`text-xl lg:text-2xl ${border} font-oswald font-bold text-secondary-black-200 capitalize mb-8`}
                >
                    {heading}
                </h1>
                <div
                    className="flex flex-col"
                >
                  {
                    posts.map((post, index)=>(
                        <div
                            key={index}
                            className="flex w-full justify-between items-start first:border-b border-dashed border-gray-300 first:pb-8  last:pt-8"
                        >
                            <div
                                className="w-[30%]"
                            >
                                <Image 
                                    src={post.image}
                                    alt="News image"
                                    className="w-full"
                                />
                            </div>
                            <div
                                className="w-[65%] cursor-pointer"
                            >
                                <p
                                    className={`mb-4 ${bold}`}
                                >
                                    {post.snippet}
                                </p>
                                <p
                                    className="text-primary-gold text-sm"
                                >
                                    {post.date}
                                </p>
                            </div>
                        </div>
                    ))
                  }
                </div>
            </div>
    )
}