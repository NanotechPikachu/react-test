import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ lang, code }) {
  const c = code?.trim();
  return (
    <SyntaxHighlighter language={lang} style={dark}>
      {c}
    </SyntaxHighlighter>
  )
}
