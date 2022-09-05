import { useState } from 'react'
import './App.css'
import QuoteBox from './QuoteBox.json'

function App() {

    
  const ran = Math.floor(Math.random() * QuoteBox.length)
  const [ sig , setSig ] = useState(ran)

  const change = () =>{
    const ran = Math.floor(Math.random() * QuoteBox.length)
    setSig(ran)
  }
  
  const colors =  [ '#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871' ]
  const randomcolor = Math.floor(Math.random() * colors.length)
  document.body.style= `background: ${colors[randomcolor]}`

  console.log(QuoteBox)
 

  return (
    <div className="App">
      <div className="card" style={{color: colors[randomcolor]}}>
        <h1 style={{margin:'10px'}}><i className="fa-solid fa-quote-left"></i> {QuoteBox[sig].author}</h1>
        
        <p>{QuoteBox[sig].quote}</p>
        <p></p>
        <p></p>

        <button onClick={change}><i className="fa-solid fa-circle-right"></i></button>
      </div>
    </div>
  )
}

export default App
