import '../css/styles.css';
import Card from '../components/Card';
import TitleNavBar from '../components/TitleNavBar';
import GitButton from '../components/GitButton';

export default function Page() {
  return (
    <div>
    <TitleNavBar />
    <h1 className="pt-24 pb-4 text-center font-bold text-zinc-50 hover:text-red-50 text-2xl/[16px]">Nanotech Wiki</h1>
    <p className="text-center font-sans text-grey-50">A wiki for all by NanotechPikachu</p>
    <div className="flex justify-between px-4 items-center">
    <button className="bg-blue-500 text-white mt-10 rounded-full ml-10 text-center py-2 px-4">Click Me</button>
    <GitButton />
    </div>
    <Card title="text" className="mt-10" icon={true}>
    <p> Heyjahahqywyahwhab. 
gagwgahahaha ahah ahahah hahaha ahagga ahagga ahgaga ahahag
hwhwgahahahaba </p>
    </Card>
    </div>
  )
}


