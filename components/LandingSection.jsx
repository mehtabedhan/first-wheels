import { images,landingPageTitle,landingPageDescription } from '../data'
import Link from 'next/link'
import Image from 'next/image';

const LandingSection = () => {

  return (
   
    <section className="">
    

        <div className="grid py-2 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="place-self-center mr-auto lg:col-span-7">
                <h1 className="mb-4 max-w-2xl text-2xl font-bold leading-none md:text-4xl xl:text-6xl text-text-secondary">
               {landingPageTitle}</h1>
                <p className="mb-6 max-w-2xl font-medium text-text-primary lg:mb-8 md:text-lg lg:text-xl">
                {landingPageDescription} </p>
                
               <div  className="inline-flex justify-center items-center py-3 px-5 my-5 text-base font-semibold text-center text-text-primary rounded-lg border-2 border-text-secondary hover:text-text-secondary hover:border-text-primary">
               
               <Link href="/contact">
                    Lets discuss your Work
                </Link>
               </div>

               
                
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                 <Image width='400' height='400' src={images['landingPage']} className='rounded-lg shadow-lg shadow-black w-full' alt="img"/>
            </div>  
                         
        </div>
        

    </section>
  )
}

export default LandingSection