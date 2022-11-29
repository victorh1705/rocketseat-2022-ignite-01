import './App.css'
import Header from './components/Header';

function App() {

  return (
    <span className='bg-neutral-900 min-h-full'>
      <Header/>
      <div className="flex flex-row bg-neutral-900">
        <aside className='flex flex-col bg-neutral-700'>
          <p>Background</p>
          <p>foto perfil</p>
          <p className='text-white'>Victor Henrique</p>
          <p className='text-neutral-600'>Desenvolvedor iOS</p>

          <button className='m-8 py-4 px-6 border-2 border-emerald-600 rounded-md text-emerald-600'>
            Editar seu perfil
          </button>
        </aside>
        <main>
          Main
        </main>
      </div>
    </span>
  )
}

export default App
