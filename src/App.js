import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [isShown, setIsShown] = useState(false);


  function handleClick()
  {
    setIsShown(true);
  }

  function removeClick()
  {
    setIsShown(false);
  }

  return (
    <div className="App">

      <body> 
       
          <div className = "container">
              <nav className = "nav-bar">
                  <ul className = "nav-list">
                      <li className = "nav-item">
                        <a href="">Home</a>
                      </li>
                      <li className = "nav-item">
                        <a onClick = {removeClick}>Remove</a>
                      </li>
                      <li className = "nav-item">
                      <   button className = "btn-primary" onClick={handleClick}>Add +</button>
                      </li>

                  </ul>
              </nav>
          </div>

          <div className='card-container'>

            
            {isShown && <div className='card'>
                This is a test card.
                <input className = "text-box"></input>
              </div>}

          </div>
  
      </body>
    </div>
  );
}




export default App;
