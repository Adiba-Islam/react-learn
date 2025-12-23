import React from 'react'

const App = () => {
           
  const today = new Date();

  return (
    <>
    <div id = 'parent'>
      <p>Finally learning React.js [Alhundulillah] </p>

        <h1 id = 'child1'> App</h1>
        <h1 id = 'child2'> App</h1>

        <h2> Show current year!!</h2>

        <h3> {new Date().getFullYear()}</h3>
        <h3> { new Date().getDay()}</h3>


            <h4>
              {today.toLocaleDateString('en-us',{
                weekday: 'long',
                day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
 })}
            </h4>
          
</div>
</>

  );
};

export default App // this line allow to render it in index.js



// This is the react arror function
// insted of div we use fragments <> </> for better and clear code