import React from 'react'
import {Bookmark} from 'lucide-react'
import Cards from './Components/Cards'
import User from './Components/User'

const App = () => {

  const arr=[10,20,30,40];

  return (
    <div className='parent'>
      {arr.map(function(elem){
        return elem

      })}
     

    </div>
  )
}

export default App

 //<User name={arr[0]}/>
   //  <User name={arr[1]}/> 

