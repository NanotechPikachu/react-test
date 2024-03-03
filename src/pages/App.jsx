import '../css/styles.css';
import Card from '../components/Card';
import TitleNavBar from '../components/TitleNavBar';
import GitButton from '../components/GitButton';

export default function Page() {
  return (
    <div>
      <TitleNavBar />
      <div className="flex flex-col md:pl-10">
        <div className="pt-24 pb-4 text-center">
          <h1 className="font-bold text-zinc-50 hover:text-red-50 text-2xl md:text-3xl">AniChu.DB</h1>
          <p className="font-sans text-grey-50 md:text-xl">A JSON DataBase of anime info!</p>
        </div>
        <div className="flex md:justify-start md:items-center md:w-auto lg:w-full ml-6">
          <button className="bg-blue-500 hover:bg-blue-400 text-white mt-10 rounded-full text-center py-2 px-4 mr-8">Get started</button>
          <GitButton />
        </div>
      </div>
      <div className="mt-10 ml-1">
        <h2 className="text-xl font-bold text-white text-left">Features</h2>
        <Card title="AniChu.DB" className="mt-5" icon={true}>
          <p> A DataBase of all animes. </p>
        </Card>
        <Card title="Tested" className="mt-4" icon={true}>
          <p> The package's been tested to make sure that errors in JSON are minimized. </p>
        </Card>
      </div>
    </div>
  )
}
