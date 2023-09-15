import './App.css';
import Header from "./Components/Header"
import TitlePage from './Components/UI/TitlePage';
import react from "react";
import Register from './Components/Register/Register';



function App() {
  return (
    <div className="App">

<Header/>
<TitlePage
title="Home"
subtitle="Les dernières News : "
/>
<Register/>

    </div>
  );
}

export default App;
