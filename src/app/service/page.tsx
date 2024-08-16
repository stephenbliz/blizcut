import Breadcrumb from "../component/breadcrumb";
import ServiceSection from "../component/service";
import beardcut from '../images/beardCut.jpg';
import normalHaircut from '../images/normalHaircut.jpg';
import hairWash from '../images/hairWash.jpg';
import hairpuump from '../images/hairPump.jpg';

export default function Services(){
    const offers1 = [
        {name: 'normal haircut', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: normalHaircut, id:1},
        {name: 'hair pump', desc: 'Get a nice hairdry without our latest and efficient hair pump', image: hairpuump, id:2},
        {name: 'normal haircut', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: normalHaircut, id:3}
    ];

    const offers2 = [
        {name: 'hair clean', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: hairWash, id:4},
        {name: 'new beard cut', desc: 'Get a nice hairdry without our latest and efficient hair pump', image: beardcut, id:5},
        {name: 'normal haircut', desc: 'We offer variety of haircuts, come and get the best look at our barbershop', image: normalHaircut, id:6}
    ];

   return(
    <section
        className="overflow-hidden"
    >
        <Breadcrumb title='service' />
        <section
            className="pt-24 pb-2 w-[100vw] px-8 lg:px-16"
        >
            <ServiceSection 
                offers1={offers1}
                offers2={offers2}
                display="hidden"
                parentWidth="lg:w-full"
                childWidth="lg:w-[25%]"
            />
        </section>
        
    </section>
   )
}