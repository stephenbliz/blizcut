import SectionAbout from "../component/about";
import Breadcrumb from "../component/breadcrumb";
import Team from "../component/team";
import Testimonial from "../component/testimonial";

export default function About(){
    return(
        <>
            <Breadcrumb title='about us' />
            <SectionAbout />
            <Testimonial />
            <Team />
        </>
    )
}