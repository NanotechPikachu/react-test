import '../css/styles.css';

export default function Page() {
  return (
    <div>
    <NavBar />
    <h1 className="py-20 text-center font-bold text-zinc-50 hover:text-zinc-100">Nanotech Wiki</h1>
    <p className="text-center font-sans text-grey-50" style="padding-top:85px;">A wiki for all by NanotechPikachu</p>
    </div>
  )
}

function NavBar() {
  return (
   <nav className="fixed top-0 left-0 w-full flex py-4 px-8 border-b border-primary-color shadow-md z-10 backdrop-filter backdrop-blur-lg opacity-60">
    <p className="font-bold text-left text-sky-400 hover:text-amber-700 text-xl font-sans">Nanotech Wiki</p>
    </nav>
  )
}
