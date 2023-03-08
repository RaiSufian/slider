
import './App.css';
import Slider from './components/slider';
import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from 'axios';

function App() {

  const [items, setItems] = useState([]);

  const getData = async () => {
    await axios.get('https://www.reddit.com/r/aww/top/.json?t=all')
      .then(response => {
        let NewArray = response.data.data.children.map((item, index) => {
          return { url: item.data.url_overridden_by_dest };
        })
        let filterArray = NewArray.filter(item => item.url.endsWith('.jpg'))
         setItems(filterArray)
      })

      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    getData()
  }, []);
  
  return (
    <>
      <Slider imgs={items} />
    </>
  );
}

export default App;
