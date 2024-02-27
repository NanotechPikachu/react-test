import '../css/styles.css';

export default function Page() {
  return (
    <div>
    <NavBar />
    </div>
  )
}

function NavBar() {
  return (
   <nav className="fixed top-0 left-0 w-full flex justify-center items-center py-4 px-8 border-b border-primary-color shadow-md z-10 bg-black backdrop-filter backdrop-blur-lg opacity-50">
    <p className="font-bold text-left text-sky-400 hover:text-amber-700 text-xl font-sans">NanotechWiki</p>
    </nav>
  )
}
