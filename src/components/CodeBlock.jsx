import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
/*
export default function CodeBlock({ lang, code }) {
  const c = code;
  return (
    <SyntaxHighlighter language={lang} style={a11yDark} showLineNumbers={true} wrapLines={true} >
      {c}
    </SyntaxHighlighter>
  )
}
*/

const style = a11yDark;

export { SyntaxHighlighter, style };