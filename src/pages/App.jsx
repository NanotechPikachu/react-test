import '../css/styles.css';
import Card from '../components/Card';
import TitleNavBar from '../components/TitleNavBar';
import GitButton from '../components/GitButton';

export default function Page() {
  return (
    <div>
    <TitleNavBar />
    <h1 className="pt-24 pb-4 text-center font-bold text-zinc-50 hover:text-red-50 text-2xl/[16px] md:text-3xl md:pl-10 md:text-left">AniChu.DB</h1>
    <p className="text-center font-sans text-grey-50 md:pl-10 md:text-left md:text-xl">A JSON DataBase of anime info!</p>
    <div className="flex justify-around px-2 items-center md:w-1/2 md:pl-2 lg:w-1/3 lg:align-left lg:ml-5 xl:w-1/3 2xl:w-1/3">
    <button className="bg-blue-500 hover:bg-blue-400 text-white mt-10 rounded-full ml-10 text-center py-2 px-4">Get started</button>
    <GitButton />
    </div>
    <h2 className="text-xl font-bold text-white mt-10 ml-5 text-left">Features</h2>
    <Card title="AniChu.DB" className="mt-5" icon={true}>
    <p> A DataBase of all animes. </p>
    </Card>
    <Card title="Tested" className="mt-4" icon={true}>
    <p> The package’s been tested to make sure that errors in JSON are minimised. </p>
    </Card>
    </div>
  )
}


