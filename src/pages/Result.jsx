import Code from '../components/Code';
import { NextCard, PrevCard } from '../components/PageCards';

export default function Result() {
  return (
    <div>
    <h1 className="ml-4 text-3xl md:text-4xl pt-24 mb-4 font-bold text-black">Result Type</h1>
    <hr />
    <p className="ml-5 mr-5 mt-4 text-black">
    This page deals with the JSON DB output as well as discussing the results or outputs of functions.
    </p>
    <h2 className="ml-4 text-2xl md:text-3xl mt-8 font-bold text-black">getAnime()</h2>
    <p className="ml-4 text-black mt-3">
This function returns an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" className="text-blue-600 hover:text-blue-700"><u>Promise</u></a> as such it’s an <b>Asynchronous</b> function needing to be <Code code="await" />-ed.
<br /> <br />
The promise consists of an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" className="text-blue-600 hover:text-blue-700"><u>Object</u></a> which has the relevant data of the anime(if any).
    </p>
    <h3 className="text-xl ml-4 mt-8 font-bold">
    Data Structure of <Code code="getAnime()" />
    </h3>
    </div>
  )
}