import { useState } from "react";

function App() {

  const [color,setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200 "
        style = {{backgroundColor : color}}
      >
        <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2 fixed bottom-0 left-0 w-full">

          <div className="flex flex-wrap justify-center  
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "red"}}
              onClick={()=>setColor('red')}
            >
              Red
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "green"}}
              onClick={()=>setColor('green')}
            >
              Green
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "blue"}}
              onClick={()=>setColor('blue')}
            >
              Blue
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "olive"}}
              onClick={()=>setColor('olive')}
            >
              Olive
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "grey"}}
              onClick={()=>setColor('grey')}
            >
              Grey
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "yellow"}}
              onClick={()=>setColor('yellow')}
            >
              Yellow
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "pink"}}
              onClick={()=>setColor('pink')}
            >
              pink
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "purple"}}
              onClick={()=>setColor('purple')}
            >
              Purple
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "lavender"}}
              onClick={()=>setColor('lavender')}
            >
              Lavender
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-Black shadown-lg" style={{backgroundColor : "white"}}
              onClick={()=>setColor('white')}
            >
              White
            </button>
            <button 
              className="outline-none px-4 py-1
              rounded-full text-white shadown-lg" style={{backgroundColor : "black"}}
              onClick={()=>setColor('black')}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
