import MoonIcon from './icons/moonIcon'

const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-4 ">
      <div className="flex justify-between ">
        <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">Todo</h1>
        <button>
          < MoonIcon/>
        </button>
      </div>
    </header>
  )
}

export default Header