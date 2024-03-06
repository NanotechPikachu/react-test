import Terminal from '../components/Terminal';

export default function Start() {
  return (
    <div>
    <h1 class="ml-4 text-2xl md:text-3xl pt-24 mb-4 font-bold text-white">Get Started</h1>
    <hr />
    <h2 class="ml-5 mr-5 text-xl mt-4 font-bold text-white">Installation</h2>
    <Terminal command="npm i anichu.db" />
    </div>
  )
}