import { useState } from 'react'
import './App.css'

function App() {
  const [addCheck, setAddCheck] = useState({
    name: 'React',
    list: [],
    itemName: '',
  })
  const Add = () => {
    const list = addCheck.list
    list.push(addCheck.itemName)
    setAddCheck({ ...addCheck, list: list })
    setAddCheck({ ...addCheck, itemName: '' })
  }
  const Delete = (index) => {
    const list = addCheck.list
    list.splice(index, 1)
    setAddCheck({...addCheck, list:list})
  }
  const Checkbox = () => {
    return (
      addCheck.list.map((item, index) => {
        return (
          <div key={index}>
            <input type='checkbox' />
            {item}
            <button onClick={Delete}>Delete</button>
          </div>
        )
      })
    )
  }

  return (
    <>
      <input onChange={(e) => setAddCheck({ ...addCheck, itemName: e.target.value })} />
      <div onClick={Add}>ADD</div>
      <div>
        <Checkbox/>
      </div>
    </>
  )
}

export default App
