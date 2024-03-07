import Terminal from '../components/Terminal';
import Code from '../components/Code';

export default function Start() {
  return (
    <div>
    <h1 className="ml-4 text-3xl md:text-4xl pt-24 mb-4 font-bold text-white">Get Started</h1>
    <hr />
    <h2 className="ml-5 mr-5 text-2xl mt-4 font-bold text-white">Installation</h2>
    <Terminal command="npm i anichu.db" />
    <h2 className="ml-5 mr-5 text-2xl mt-6 font-bold text-white">Functions Available</h2>
    <ul className="mt-3 ml-8 list-disc mr-8 text-base">
    <li key="func1"> <Code code="getAnime()" /> - To get an anime from it’s title. </li>
    <li key="func2" className="mt-2"> <Code code="searchAnime()" /> - To search for similar animes. </li>
    </ul>
    </div>
  )
}