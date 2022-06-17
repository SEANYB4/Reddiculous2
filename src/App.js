
import './App.css';
import './Components/card.css';
import ReddiculousLogo from './logoReddiculous.svg';
import Card from './Components/card';
import { SearchBar } from './Components/searchbar';
import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom'; 
import { useState, useEffect } from 'react';

function App() {

//const [subreddit, setSubreddit] = useState('webdev');
//export const setSub = (e) => setSubreddit(e.target.value);

const [articles, setArticles] = useState([]);
const [subreddit, setSubreddit] = useState('webdev');

//setSubreddit = (e) => setSubreddit(e.target.value);

  useEffect(() => {

    fetch('https://www.reddit.com/r/' + subreddit + '.json').then(res => {
      if(res.status != 200){
        console.log('ERROR');
        return;
      }
  
      res.json().then(data => {
        if(data != null){
          setArticles(data.data.children);
        }
  
      });
    })
  
  }, [subreddit]);


  return (
  
          <Router>


<header className="App-header">
      <img src={ReddiculousLogo} alt="logo" class='logo'/>
      <input type="text" name="" id="" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>

    </header>

               <div class='sidebar-con'>
                        
                      <div class='sidebar'>
                      <button type='button' onClick={() => setSubreddit('jazz')}>Jazz</button>
                      <button type='button' onClick={() => setSubreddit('meteors')}>Meteors</button>
                      <button type='button' onClick={() => setSubreddit('polo')}>Polo</button>
                      <button type='button' onClick={() => setSubreddit('gamelan')}>Gamelan</button>
                      <button type='button' onClick={() => setSubreddit('wingsuits')}>Wingsuits</button>
                 
                </div>

               </div>

                <div class='content'>
             
                  <div class='cards' id='cards'>
                    {
                      (articles != null) ? articles.map((article, index) => 
                      <Card key={index} article={article.data} />) : ''
                    }

                  </div>
                </div>
     
          </Router>
         
  );
}

export default App;
