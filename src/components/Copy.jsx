import { ClipboardIcon } from '@heroicons/react/24/outline';

export default function Copy({ command }) {
  return (
    <>
    <button>
    <ClipboardIcon className="h-4 w-4" />
    </button>
    </>
  )
}