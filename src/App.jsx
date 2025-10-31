import './App.css'
import Header from './pages/Header'
import Videos from './pages/Videos'

function App() {

  return (
    <div className="home-page">
      <div className="bg-[url('/src/assets/frutiger-aero.webp')] bg-[length:100%_100%] bg-no-repeat min-h-screen text-[rgb(6,24,102)]">
        <Header />
        <Videos />
      </div>
    </div>
  )
}

export default App
