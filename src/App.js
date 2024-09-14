
import './App.css';
import { useState } from 'react';

function App() {

  let [actors, setActors] = useState([]);

  let getActorsFromServer = async () => {
    let reqOptions = {
      method: "GET"
    }
    let JSONData = await fetch("http://localhost:1234/srikanth", reqOptions);
    let JSOData = await JSONData.json();
    setActors(JSOData);
    console.log(JSOData);
  };

  return (
    <div>
      <button onClick={() => {
        getActorsFromServer();
      }}>srikanthMoive</button>
      <div>
        {actors.map((ele, i) => {
          return (
            <div key={i}>
              <h2>{ele.movieName}</h2>,
              <p>{ele.para}</p>,
              <img src={ele.image}></img>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default App;
