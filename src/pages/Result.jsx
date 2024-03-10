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
This function returns an Promise as such it’s an Asynchronous function needing to be <Code code="await" />-ed.

The promise consists of an Object which has the relevant data of the anime(if any).
    </p>
    </div>
  )
}