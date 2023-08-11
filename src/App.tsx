import CrossIcon from "./components/crossIcon"
import MoonIcon from "./components/moonIcon"

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

      <header className="container mx-auto px-4 pt-4 ">
        <div className="flex justify-between ">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">Todo</h1>
          <button>
          < MoonIcon  className=''/>
          </button>
        </div>

        <form action="" className="flex gap-3 items-center bg-white rounded-md overflow-hidden py-4  px-4  mt-8">
          <span className="inline-block rounded-full border-2 h-5 w-5"></span>
          <input type="text" placeholder="Create a new Todo..." className="w-full text-gray-400 outline-none " />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8 ">
        <div className="bg-white rounded-md ">
          <article className="flex space gap-4 py-4 border-b-gray-200 border-b px-4">
            <button className="inline-block rounded-full border-2 h-5 w-5"></button>
            <p className="grow ">Complete online JavaScript  </p>
            <button><CrossIcon /></button>
          </article>
          <article className="flex space gap-4 py-4 border-b-gray-200 border-b px-4">
            <button className="inline-block rounded-full border-2 h-5 w-5"></button>
            <p className="grow ">Complete online JavaScript  </p>
            <button><CrossIcon /></button>
          </article>

          <section className=" flex justify-between py-4 px-4">
            <span className="text-gray-300"> 5 items left</span>
            <button className="text-gray-300">clear complete</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white px-4 p-4 rounded-md  flex gap-2 justify-center">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active </button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
 
      <p className="text-center">
        Drag and Drog to reorder ist
      </p>
    </div>

  )
}

export default App