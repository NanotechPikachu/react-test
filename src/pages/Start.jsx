import Terminal from '../components/Terminal';
import Code from '../components/Code';

export default function Start() {
  return (
    <div>
    <h1 className="ml-4 text-2xl md:text-3xl pt-24 mb-4 font-bold text-white">Get Started</h1>
    <hr />
    <h2 className="ml-5 mr-5 text-xl mt-4 font-bold text-white">Installation</h2>
    <Terminal command="npm i anichu.db" />
    <h2 className="ml-5 mr-5 text-xl mt-6 font-bold text-white">Functions Available</h2>
    <ul className="mt-3">
    <li key="func1"> <Code text="getAnime()" /> - To get an anime from it’s title. </li>
    </ul>
    </div>
  )
}