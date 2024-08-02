'use client';
import Blogs from "../component/blogs";
import BlogSideBar from "../component/blogSideBar";
import Breadcrumb from "../component/breadcrumb";
import beardTrim from '../images/beardTrim.jpg';
import hairpump from '../images/hairpuump.jpg';
import normalHaircut from '../images/normalHaircut.jpg';

export default function BlogPage(){
    const blogs = [
        {image: beardTrim, tag: 'beard trim', date: '01 Aug, 2024', title: "Let's see trending beard trim in 2024 only for men"},
        {image: hairpump, tag: 'hair pump', date: '01 Aug, 2024', title: "Let's see trending hair pump in 2024 only for men"},
        {image: normalHaircut, tag: 'haircut', date: '01 Aug, 2024', title: "Let's see trending haircut in 2024 only for men"},
        {image: beardTrim, tag: 'beard trim', date: '01 Aug, 2024', title: "Let's see trending beard trim in 2024 only for men"},
        {image: hairpump, tag: 'hair pump', date: '01 Aug, 2024', title: "Let's see trending hair pump in 2024 only for men"},
        {image: normalHaircut, tag: 'haircut', date: '01 Aug, 2024', title: "Let's see trending haircut in 2024 only for men"},
        {image: normalHaircut, tag: 'haircut', date: '01 Aug, 2024', title: "Let's see trending haircut in 2024 only for men"},
        {image: beardTrim, tag: 'beard trim', date: '01 Aug, 2024', title: "Let's see trending beard trim in 2024 only for men"},
        {image: hairpump, tag: 'hair pump', date: '01 Aug, 2024', title: "Let's see trending hair pump in 2024 only for men"},
        {image: normalHaircut, tag: 'haircut', date: '01 Aug, 2024', title: "Let's see trending haircut in 2024 only for men"},
    ]
    return(
        <section
            className="overflow-hidden font-roboto"
        >
            <Breadcrumb title="our blog" />
            <section
                className="pt-24 pb-2 w-[100vw] px-8 lg:px-16 lg:grid gap-4 grid-cols-3"
            >
                <section
                    className="col-span-1 mb-8 lg:mb-0"
                >
                    <BlogSideBar />
                </section>
                <section
                    className="col-span-2"
                >
                    <Blogs 
                        blogs={blogs}
                        width="lg:w-[47%]"
                    />
                </section>
            </section>
        </section>
    )
}