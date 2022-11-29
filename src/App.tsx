import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="min-h-full">
      <Header />
      <div className="grid mx-auto py-8 px-4 md:grid-cols-[256px_1fr] grid-cols-[1fr] gap-8 items-start">
        <Sidebar
          bgImage='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
          profileImg='https://github.com/victorh1705.png'
          profile='Victor Henrique'
          role='Desenvolvedor iOS'
        />
        <main>
          Main
        </main>
      </div>
    </div>
  )
}

export default App
