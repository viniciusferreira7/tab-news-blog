/* eslint-disable n/handle-callback-err */
'use client'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  const hoverButton =
    'hover: hover:ease-in-out hover:bg-transparent hover:text-zinc-900 transition-all duration-500'

  return (
    <div className="w-full h-full grid place-content-center gap-y-5">
      <h1 className="text-4xl text-gray-800 font-bold">
        Ops! Algo deu errado...
      </h1>
      <button
        className={`${hoverButton} text-white py-3 bg-zinc-900 border-2 border-solid border-zinc-900 rounded-md`}
        onClick={() => reset()}
      >
        Tente novamente
      </button>
    </div>
  )
}
