import './App.css'
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
const [newsList, setNewsList] = useState([])
  useEffect(() => {
    const fetchDataFromApi = async() => {
      const response = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/");
      setNewsList(response.data.results);
    }
    fetchDataFromApi()
  }, [])

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer">
      {newsList.map((val, idx) => {
          return <div key={idx}>{val.title}</div>
        })}
      </div>
    </div>
  )
}

export default App
