import './App.css'
import Card from './components/card'

function App() {
  return (<>
    <Card 
        username = "Aniket" 
        btntext = "Read about AG" 
        descript = "Hello my name is Aniket" 
        img="./public/Aniket_Goswami.jpg"
    />

    <Card 
        username = "Abhijeet" 
        btntext = "Read about AJ" 
        descript = "Hello my name is Abhijeet" 
        img="./public/Abhijeet_Goswami.jpg"
    />

  </>);
}

export default App
