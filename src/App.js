import './App.css';
import { useState, useEffect } from "react";
import Header from "./Components/Header"
import TitlePage from './Components/UI/TitlePage';
import Register from './Components/Register';
import Contact from './Components/Contact'
import PostGrid from './Components/PostGrid'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://freefakeapi.io/api/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "DATA");
        setPosts(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header />
      <TitlePage title="Home" subtitle="Les dernières News : " />

      <Register />
      <Contact />

      
    </div>
    //<PostGrid posts={posts}/>
  );
}

export default App;
