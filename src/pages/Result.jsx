import Code from '../components/Code';
import { NextCard, PrevCard } from '../components/PageCards';
import { SyntaxHighlighter as CodeBlock, style } from '../components/CodeBlock';
import Copy from '../components/Copy';

export default function Result() {
  const c = `{
  title: '....',
  synopsis: '....',
  episodes: '....',
  url: 'https://myanimelist.net/anime/....',
  genres: '....',
  ratings: 'Average score based off ....',
  image: 'https://cdn.myanimelist.net/images/anime/....',
  year: 1234,
  trailer: 'https://www.youtube.com/embed/....',
  studio: '....',
  recommendations: '....',
  background: '....'
}`;
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
    <h3 className="text-xl ml-4 mt-8 font-bold mb-4">
    Data Structure of <Code code="getAnime()" className="text-lg" />
    </h3>
    <div className="bg-black">
    <div className="flex justify-end items-center bg-black mt-4 ml-5 h-7 mr-5 mb-0"> 
    <Copy command={c} />
    </div>
    <div className="ml-5 mr-5 mt-0">   
    <CodeBlock language="json" style={style} showLineNumbers={true} wrapLines={true}>
    {c}
    </CodeBlock>
    </div>
    </div>
{/*
    <CodeBlock lang="json" code="{
  title: '....',
  synopsis: '....',
  episodes: '....',
  url: 'https://myanimelist.net/anime/....',
  genres: '....',
  ratings: 'Average score based off ....',
  image: 'https://cdn.myanimelist.net/images/anime/....',
  year: 1234,
  trailer: 'https://www.youtube.com/embed/....',
  studio: '....',
  recommendations: '....',
  background: '....'
}" 
/>
*/}
    </div>
  )
}