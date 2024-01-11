import { Link } from "react-router-dom";
import reactlogo from '../Image/Frameworks/reactjs-ar21.svg'
import firebaselogo from '../Image/Frameworks/firebase-ar21.svg'
import laravellogo from '../Image/Frameworks/laravel-ar21.svg'

//import reactNativlogo from '../Image/Frameworks/reactnative.svg'
import digitaloceanlogo from '../Image/Frameworks/digitalocean-ar21.svg'
import mysqllogo from '../Image/Frameworks/mysql-ar21.svg'
export default function Hero() {

  return (
    <div className='hero s'>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6bd53f] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl pt-32 sm:py-10 lg:pt-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">

            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-black-800 text-4xl md:text-5xl lg:text-6xl ">
                Let's Build
                <span className="bg-clip-text bg-gradient-to-tl  text-gradi"> Together</span>
              </h1>
            </div>




            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your digital journey is about to take off! Swipe left to finalize details and launch your project with CodexIndia, we specialize in crafting innovative and powerful online experiences tailored to your unique needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">

              <Link to='/contact'><button

                className="rounded-md bg-indigo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo"
              >
                Contact Us
              </button>
              </Link>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6bd53f] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>



      {/* pratnership */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white">

        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">Technology's And Platform That We Are Using For Our Projects</h2>
        </div>

        <div className="grid grid-cols-2 text-center sm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
          <div className="  bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={reactlogo} alt="" className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-15 mx-auto" style={{width:'8rem'}} />
           
          </div>

          <div className=" bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={laravellogo} alt="" className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-15 mx-auto" style={{width:'8rem'}}/>
            
          </div>

          <div className=" bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={firebaselogo} alt="" className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-15 mx-auto" style={{width:'8rem'}}/>
           
          </div>

          <div className=" bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={digitaloceanlogo} alt="" className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-15 mx-auto" style={{width:'8rem'}}/>
           
          </div>

         
          <div className=" bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={mysqllogo} alt="" className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-15 mx-auto" style={{width:'8rem'}}/>
           
          </div>
        
        </div>


      </div>
      {/* pratnership */}







    </div>
  )
}
