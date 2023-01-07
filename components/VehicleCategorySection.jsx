import Link from 'next/link'
import Loader from './Loader'
import { categories } from '../data'

const VehicleCategorySection = () => {



  return (
    <section className="">
            
          <div className='grid grid-cols-3 gap-3 my-6 p-4'>
          {categories.length!=0?(
               categories.map((c)=>{

                return(
                  <Link key={c.urlParamName} href={'/vehicles/'+c.urlParamName}  className='flex justify-center p-2 md:mx-8 lg:mx-20 text-lg bg-text-primary text-bg-primary font-extrabold rounded-lg bg-primary-700 hover:bg-text-secondary shadow-gray-600 shadow-md'>{c.name}</Link>

                )
               })
            ):(<>
            <Loader/>
            </>)
          }

          </div>

            
            
    </section>

  )
}

export default VehicleCategorySection