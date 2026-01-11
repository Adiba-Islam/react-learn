import React from 'react'
import Crad from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Crad user='Adiba' age={22} img='https://plus.unsplash.com/premium_vector-1747783238253-10d9d524afca?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Crad user='Hummi' age={23} img='https://plus.unsplash.com/premium_vector-1726173988609-d279cf322855?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App