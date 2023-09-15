import './App.css';
import { useState, useEffect } from "react";
import Header from "./Components/Header"
import TitlePage from './Components/UI/TitlePage';
import react from "react";
import Register from './Components/Register';
import Contact from './Components/Contact'
import PostGrid from './Components/PostGrid'


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(" https://freefakeapi.io/api/posts")
      .then(res => 
        res.json()
      )
      .then(data => {
        console.log(data, "DATA");
        setPosts(data.posts);
      })
      .catch(err => console.log(err))
  }, []);




  return (
    <div className="App">

<Header/>
<TitlePage
title="Home"
subtitle="Les dernières News : "
/>
<PostGrid posts={posts} />
<Register/>
<Contact/>
    </div>
  );
}

export default App;
