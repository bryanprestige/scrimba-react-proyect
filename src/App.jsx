import reactLogo from './assets/react.svg'
import reactIcon from './assets/react-icon.png'
import './App.css'

function App() {

  return (
    <main>
      <header>
          <img src={reactLogo} className="logo-react" alt="React logo" />    
          <h1>ReactFacts</h1>
          <div className='links'>
            <h2>Pricing</h2>
            <h2>About</h2>
            <h2>Contact</h2>
          </div>
      </header>
      <section className='facts'>
        <h1 className='title'>Fun facts about React</h1>
        <div className='ul-img'> 
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
          <img src={reactIcon} className="logo-react-back" alt="React logo" />  
        </div>
      </section>
    </main>
  )
}

export default App
