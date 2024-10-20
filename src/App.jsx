import './App.css'
import Counter from './Counter'

function App() {

    function ButtonClick(){
      alert('Button Clicked')
    }
    const addFive = (num) => {
      alert(num + 5)
    }
    const minusFive = (num) => {
      alert(num-5)
    }
  return (
    <>

      <h3>React Core Co ncepts</h3>

      <Counter/>

      <button onClick={ButtonClick} >Click Me</button>
      <button onClick={() => addFive(5)}>Five Add</button>
      <button onClick={()=>minusFive(10)} >Minus Five</button>
    </>
  )
}

export default App
