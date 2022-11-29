import igniteSymbol from '../assets/ignite-logo.svg'

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="App h-24 min-w-full bg-neutral-800 flex flex-row justify-center items-center">
      <img src={igniteSymbol} alt="Ignite logo" height={64}/>
      <h1 className="ml-4 text-white">Ignite Feed</h1>
    </header>
  )
}
