import '../css/styles.css';
import Card from './Card';

export default function Page() {
  return (
    <div>
    <NavBar />
    <h1 className="pt-24 pb-4 text-center font-bold text-zinc-50 hover:text-red-50 text-2xl/[16px]">Nanotech Wiki</h1>
    <p className="text-center font-sans text-grey-50">A wiki for all by NanotechPikachu</p>
    <Card title="text" className="mt-10">
    <p> Heyjahahqywyahwhab. 
gagwgahahaha ahah ahahah hahaha ahagga ahagga ahgaga ahahag
hwhwgahahahaba </p>
    </Card>
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
