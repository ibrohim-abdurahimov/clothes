import { } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { inc, dec } from './redux/slice/counter-slice'
import Routers from './router'

function App() {
  // const l = useSelector((state: { counter: { value: number } }) => state.counter.value)
  // console.log(l)
  // const dispatch = useDispatch()

  return (
    <>
      {/* <h1>{l}</h1>
      <div className="card">
        <button onClick={() => dispatch(inc())}>
          inc
        </button>
        <br />
        <button disabled={l<=0} onClick={()=> dispatch(dec())}>Dec</button>
      </div> */}
      <Routers/>
    </>
  )
}

export default App
