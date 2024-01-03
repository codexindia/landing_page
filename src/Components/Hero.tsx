import { Link } from "react-router-dom";
import reactlogo from '../image/Frameworks/react.svg'
import firebaselogo from '../Image/Frameworks/firebase.svg'
import laravellogo from '../Image/Frameworks/laravel.svg'
import onesignallogo from '../Image/Frameworks/onesignal.svg'
import reactNativlogo from '../Image/Frameworks/reactnative.svg'
import vitejslogo from '../Image/Frameworks/vitejs.svg'
export default function Hero() {

  return (
    <div className='hero'>
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
          <div className="p-4  md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={reactlogo} alt="" className="pb-5 max-w-16 mx-auto" />
            <span className="text-gray-600 ">React JS</span>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={laravellogo} alt="" className="max-w-16 mx-auto pb-6" />
            <span className="text-gray-600 ">Laravel</span>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={firebaselogo} alt="" className="max-w-12 mx-auto pb-5" />
            <span className="text-gray-600 ">Firebase</span>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={vitejslogo} alt="" className="max-w-14 mx-auto pb-6" />
            <span className="text-gray-600 ">Vite JS</span>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={reactNativlogo} alt="" className="max-w-16 mx-auto pb-5" />
            <span className="text-gray-600 ">React Native (Android)</span>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <img src={onesignallogo} alt="" className="max-w-16 mx-auto pb-5" />
            <span className="text-gray-600 ">Onesignal </span>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" xmlns="http://www.w3.org/2000/svg" width="2500" height="534" viewBox="0 0 1033.746 220.695"><path d="M1033.746 99.838v-18.18h-22.576V53.395l-.76.234-21.205 6.488-.418.127v21.415h-33.469v-11.93c0-5.555 1.242-9.806 3.69-12.641 2.431-2.801 5.908-4.225 10.343-4.225 3.188 0 6.489.751 9.811 2.232l.833.372V36.321l-.392-.144c-3.099-1.114-7.314-1.675-12.539-1.675-6.585 0-12.568 1.433-17.786 4.273-5.221 2.844-9.328 6.904-12.205 12.066-2.867 5.156-4.322 11.111-4.322 17.701v13.116h-15.72v18.18h15.72v76.589h22.567V99.838h33.469v48.671c0 20.045 9.455 30.203 28.102 30.203 3.064 0 6.289-.359 9.582-1.062 3.352-.722 5.635-1.443 6.979-2.213l.297-.176v-18.348l-.918.607c-1.225.816-2.75 1.483-4.538 1.979-1.796.505-3.296.758-4.458.758-4.368 0-7.6-1.177-9.605-3.5-2.028-2.344-3.057-6.443-3.057-12.177V99.838h22.575zM866.635 160.26c-8.191 0-14.649-2.716-19.2-8.066-4.579-5.377-6.899-13.043-6.899-22.783 0-10.049 2.32-17.914 6.901-23.386 4.554-5.436 10.95-8.195 19.014-8.195 7.825 0 14.054 2.635 18.516 7.836 4.484 5.228 6.76 13.03 6.76 23.196 0 10.291-2.14 18.196-6.36 23.484-4.191 5.248-10.493 7.914-18.732 7.914m1.003-80.885c-15.627 0-28.039 4.579-36.889 13.61-8.844 9.032-13.328 21.531-13.328 37.153 0 14.838 4.377 26.773 13.011 35.468 8.634 8.698 20.384 13.104 34.921 13.104 15.148 0 27.313-4.643 36.159-13.799 8.845-9.146 13.326-21.527 13.326-36.784 0-15.07-4.205-27.094-12.502-35.731-8.301-8.641-19.977-13.021-34.698-13.021m-86.602 0c-10.63 0-19.423 2.719-26.14 8.08-6.758 5.393-10.186 12.466-10.186 21.025 0 4.449.74 8.401 2.196 11.753 1.465 3.363 3.732 6.324 6.744 8.809 2.989 2.465 7.603 5.047 13.717 7.674 5.14 2.115 8.973 3.904 11.408 5.314 2.38 1.382 4.069 2.771 5.023 4.124.927 1.324 1.397 3.136 1.397 5.372 0 6.367-4.768 9.465-14.579 9.465-3.639 0-7.79-.76-12.337-2.258a46.347 46.347 0 0 1-12.634-6.406l-.937-.672v21.727l.344.16c3.193 1.474 7.219 2.717 11.964 3.695 4.736.979 9.039 1.477 12.777 1.477 11.535 0 20.824-2.732 27.602-8.125 6.821-5.43 10.278-12.67 10.278-21.525 0-6.388-1.861-11.866-5.529-16.284-3.643-4.382-9.966-8.405-18.785-11.961-7.026-2.82-11.527-5.161-13.384-6.958-1.79-1.736-2.699-4.191-2.699-7.3 0-2.756 1.122-4.964 3.425-6.752 2.321-1.797 5.552-2.711 9.604-2.711 3.76 0 7.607.594 11.433 1.758 3.823 1.164 7.181 2.723 9.984 4.63l.922.63v-20.61l-.354-.152c-2.586-1.109-5.996-2.058-10.138-2.828-4.123-.765-7.863-1.151-11.116-1.151m-95.157 80.885c-8.189 0-14.649-2.716-19.199-8.066-4.58-5.377-6.896-13.041-6.896-22.783 0-10.049 2.319-17.914 6.901-23.386 4.55-5.436 10.945-8.195 19.013-8.195 7.822 0 14.051 2.635 18.514 7.836 4.485 5.228 6.76 13.03 6.76 23.196 0 10.291-2.141 18.196-6.361 23.484-4.191 5.248-10.49 7.914-18.732 7.914m1.006-80.885c-15.631 0-28.044 4.579-36.889 13.61-8.844 9.032-13.331 21.531-13.331 37.153 0 14.844 4.38 26.773 13.014 35.468 8.634 8.698 20.383 13.104 34.92 13.104 15.146 0 27.314-4.643 36.16-13.799 8.843-9.146 13.326-21.527 13.326-36.784 0-15.07-4.206-27.094-12.505-35.731-8.303-8.641-19.977-13.021-34.695-13.021M602.409 98.07V81.658h-22.292v94.767h22.292v-48.477c0-8.243 1.869-15.015 5.557-20.13 3.641-5.054 8.493-7.615 14.417-7.615 2.008 0 4.262.331 6.703.986 2.416.651 4.166 1.358 5.198 2.102l.937.679V81.496l-.361-.155c-2.076-.882-5.013-1.327-8.729-1.327-5.602 0-10.615 1.8-14.909 5.344-3.769 3.115-6.493 7.386-8.576 12.712h-.237zm-62.213-18.695c-10.227 0-19.349 2.193-27.108 6.516-7.775 4.333-13.788 10.519-17.879 18.385-4.073 7.847-6.141 17.013-6.141 27.235 0 8.954 2.005 17.171 5.968 24.413 3.965 7.254 9.577 12.929 16.681 16.865 7.094 3.931 15.293 5.924 24.371 5.924 10.594 0 19.639-2.118 26.891-6.295l.293-.168v-20.423l-.937.684c-3.285 2.393-6.956 4.303-10.906 5.679-3.94 1.375-7.532 2.07-10.682 2.07-8.747 0-15.769-2.737-20.866-8.133-5.108-5.403-7.698-12.99-7.698-22.537 0-9.607 2.701-17.389 8.024-23.131 5.307-5.725 12.342-8.629 20.908-8.629 7.327 0 14.467 2.481 21.222 7.381l.935.679V84.371l-.302-.17c-2.542-1.423-6.009-2.598-10.313-3.489-4.286-.889-8.478-1.337-12.461-1.337m-66.481 2.284h-22.292v94.766h22.292V81.659zm-10.918-40.371c-3.669 0-6.869 1.249-9.498 3.724-2.64 2.482-3.979 5.607-3.979 9.295 0 3.63 1.323 6.698 3.938 9.114 2.598 2.409 5.808 3.63 9.54 3.63 3.731 0 6.953-1.221 9.582-3.626 2.646-2.42 3.988-5.487 3.988-9.118 0-3.559-1.306-6.652-3.879-9.195-2.571-2.538-5.833-3.824-9.692-3.824m-55.62 33.379v101.758h22.75V44.189H398.44l-40.022 98.221-38.839-98.221H286.81v132.235h21.379V74.657h.734l41.013 101.768h16.134l40.373-101.758h.734z" fill="#706d6e" /><path d="M104.868 104.868H0V0h104.868v104.868z" fill="#f1511b" /><path d="M220.654 104.868H115.788V0h104.866v104.868z" fill="#80cc28" /><path d="M104.865 220.695H0V115.828h104.865v104.867z" fill="#00adef" /><path d="M220.654 220.695H115.788V115.828h104.866v104.867z" fill="#fbbc09" /></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947" width="2500" height="607"><path d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z" fill="currentColor" /></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" xmlns="http://www.w3.org/2000/svg" width="2500" height="1036" viewBox="0 -6.166 294.398 121.975"><path d="M12.139 90.511c-3.939 0-7.799-.479-10.938-1.292l.487-8.277c3.053 1.123 7.313 2.012 11.254 2.012 5.952 0 10.775-2.492 10.775-8.359C23.718 63.172 0 68.002 0 50.466c0-9.325 7.315-15.834 19.941-15.834 3.214 0 6.51.397 9.809.959l-.485 7.802c-3.132-.963-6.591-1.527-9.806-1.527-6.754 0-10.211 3.134-10.211 7.638 0 10.855 23.72 6.839 23.72 23.798-.005 9.973-7.882 17.209-20.829 17.209M54.106 90.264c-2.249 0-3.938-.076-6.03-.479v17.397h-8.601V49.746h8.12c0 2.094-.082 5.309-.484 7.476h.162c2.25-5.068 6.833-8.283 12.944-8.283 9.487 0 14.712 6.75 14.712 18.814.001 14.076-7.473 22.511-20.823 22.511m3.861-34.246c-6.434 0-9.892 7.558-9.892 14.384v12.312c1.852.562 3.86.804 6.272.804 6.833 0 11.497-4.182 11.497-14.958.001-8.039-2.49-12.542-7.877-12.542zM102.519 57.381C94.561 55.936 90.7 61.485 90.7 73.466v16.238h-8.606V49.746H90.3c0 2.246-.246 5.791-.809 8.844h.162c1.771-5.388 5.79-10.377 13.271-9.651l-.405 8.442M114.803 43.797c-3.056 0-5.55-2.414-5.55-5.393 0-2.971 2.494-5.385 5.55-5.385 2.974 0 5.467 2.333 5.467 5.385 0 2.979-2.493 5.393-5.467 5.393m4.26 45.907h-8.6V49.746h8.6v39.958zM154.449 89.704V63.975c0-4.982-1.374-7.875-5.951-7.875-6.03 0-10.457 6.345-10.457 14.302v19.303h-8.603V49.746h8.203c0 2.094-.162 5.546-.563 7.796l.082.075c2.33-5.141 7.157-8.68 13.91-8.68 9.084 0 11.9 5.711 11.9 12.787v27.979h-8.521M186.675 90.425c-8.524 0-11.1-3.294-11.1-12.214V56.417h-7.634v-6.671h7.634V37.04l8.523-2.333v15.039h10.532v6.671h-10.448v19.137c0 5.954 1.205 7.558 5.224 7.558 1.769 0 3.699-.24 5.226-.643v7.076c-2.331.486-5.307.88-7.957.88" /><path d="M233.712 78.636c11.72-15.086 20.938-32.809 20.938-45.537 0-6.652-4.765-11.295-10.978-14.823.123 13.831-4.668 46.263-9.96 60.36M195.279 115.809c27.47-9.188 67.29-30.598 94.985-49.725 2.324-1.6 4.135-3.085 4.135-5.685 0-4.519-8.275-10.576-12.292-12.987-21.792 22.653-65.163 56.596-86.828 68.397" fill="#ffdd05" /><path d="M220.76 96.567c16.938-11.709 41.545-33.739 49.873-45.727 1.963-2.82 3.416-4.454 3.416-7.405 0-4.839-5.644-8.382-9.703-10.849-9.727 22.924-31.579 51.469-43.586 63.981M236.192 64.087c2.191-14.477.903-31.952-1.894-42.913-1.521-5.969-6.901-12.706-11.88-14.812 6.526 18.522 12.128 44.898 13.774 57.725" fill="#ffdd05" /><path d="M231.367 43.779C226.235 29.91 213.446.998 194.633-6.165c12.247 13.516 30.417 40.337 36.734 49.944" fill="#ffdd05" /></svg>
          </div>

          <div className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
            <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 816"><g clip-path="url(#a)"><path d="M307.9 0H330a303.4 303.4 0 0 1 207.7 87.7c-20.2 20.6-40.7 40.3-60.5 60.9-30.6-27.7-67.5-49.1-107.8-56.7A227.9 227.9 0 0 0 196 124.7a227.3 227.3 0 0 0-99.4 160.6 233.5 233.5 0 0 0 50.7 180.4 224.5 224.5 0 0 0 163.6 80.5c58.7 3.4 120-14.7 162.8-55.8 33.5-29 49-73 54-115.7-69.5 0-139.2.4-208.8 0v-86.5H612c15.1 92.7-6.7 197.2-77.2 263.5-47 47-112 74.6-178.3 80A327.4 327.4 0 0 1 169 595 322.8 322.8 0 0 1 19.3 424a309.3 309.3 0 0 1-2.1-209.3 319.4 319.4 0 0 1 115.4-153A329.3 329.3 0 0 1 307.9 0Z" fill="#3780FF" /><path d="M1990 21.9h89.7v599c-29.8 0-60 .4-89.8-.4.4-199.3 0-399 0-598.6Z" fill="#38B137" /><path d="M811.7 229.5a210.8 210.8 0 0 1 161 34.4 197 197 0 0 1 79.3 125.9c11.3 58.3-3 122-40.7 168.2A205 205 0 0 1 839 633a204.1 204.1 0 0 1-152.7-81.8c-39.8-53.6-49.5-127.5-27.6-190.4 21.8-67.5 83.4-119.1 153-131.3Zm12.5 79.7a112.8 112.8 0 0 0-58.7 37.3c-40.7 48.7-38.2 128 6.7 173.3a111.7 111.7 0 0 0 177.9-26.4c27.7-50 19.7-118.7-22.7-157.8a113.2 113.2 0 0 0-103.2-26.4Z" fill="#FA3913" /><path d="M1256.3 229.5c63.3-12.1 132.5 5.5 180 50 77.1 69.1 85.5 198.8 19.7 278.5a204.7 204.7 0 0 1-168.3 75 202.6 202.6 0 0 1-156.8-81.8c-40.7-54.9-49.5-130.4-26.5-194.6a199.2 199.2 0 0 1 151.9-127Zm12.6 79.7a114.7 114.7 0 0 0-58.8 37c-40.2 47.7-38.5 125.8 4.7 171.5a112.2 112.2 0 0 0 102.3 33.1 115 115 0 0 0 78-57.4c27.3-50.4 19.3-119.2-23.5-158.2a112.4 112.4 0 0 0-102.7-26Z" fill="#FCBD06" /><path d="M1633.4 253.8c48.2-30.2 112.4-38.5 164.4-12.5 16.4 7 29.8 19.3 42.8 31.4.4-11.3 0-23 .4-34.8 28.1.4 56.2 0 84.8.4v370c-.5 55.8-14.7 115-55 155.6-44 44.9-111.6 58.7-172.4 49.5-65-9.6-121.6-57-146.8-117 25.2-12.2 51.6-21.8 77.6-33.2 14.7 34.4 44.5 63.8 81.8 70.5 37.3 6.7 80.5-2.5 104.9-33.5 26-32 26-75.5 24.7-114.6-19.3 19-41.5 35.7-68.4 42-58.3 16.3-122.5-3.8-167.3-43.2a205.5 205.5 0 0 1-69.7-160.7 207.4 207.4 0 0 1 98.2-169.9Zm86.8 53.7a110.4 110.4 0 0 0-65.8 38.2c-39.5 47-39.5 122 .4 168.2a109.8 109.8 0 0 0 94.4 38.6 106.6 106.6 0 0 0 80-53.3c27.8-49 23.1-115.7-14.2-158.5-23-26.4-60-39.5-94.8-33.2Z" fill="#3780FF" /><path d="M2187.5 275.2c50.3-47 128-62.9 192.5-38.1 61.3 23 100.3 81.3 120 141.3-91 37.8-181.6 75.1-272.7 112.9 12.6 23.9 32 45.7 58 54.5 36.4 13 80 8.4 110.7-16a178.1 178.1 0 0 0 31-33c23 15.4 46.2 30.5 69.2 46a202 202 0 0 1-146.8 89c-65.4 8-135-17.2-177.4-68.4-69.7-80.5-63-215.6 15.5-288.2Zm44.9 77.6a119.8 119.8 0 0 0-19.7 70.5 33573 33573 0 0 0 182.4-76c-10-23.4-34.4-37.7-59.1-41.4-39.9-7.2-81.4 14.2-103.6 47Z" fill="#FA3913" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0H2500V816H0z" /></clipPath></defs></svg>
          </div>
        </div>


      </div>
      {/* pratnership */}







    </div>
  )
}
