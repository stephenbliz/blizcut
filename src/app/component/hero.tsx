import Header from './header';

export default function Hero(){
    return(
        <section
            className='h-[100vh] relative'
        >
            <video 
                autoPlay
                loop
                muted
                className='absolute -z-10 top-0 left-0 h-full object-cover w-full'
                src='/assets/backgroundVideo.mp4'
            />
            <Header />
            <section className=''>
                hello
            </section>
        </section>
    )
}