import React, {useState} from 'react';
import {data} from './data';
// to use state in react we use useState-->Hook
//useState is a function
//useState -->returns an array wth 2 values, 1 is -->Undefined 2-->function
function App() {
  const [teams, setTeam] = useState(data);
  function clearTeam() {
    setTeam([]);
  }
//   const[text, setText] = useState("Microdegree");
//   function handleClick(){
//     console.log("Value passed when button cliked");
    
//     if(text =="microdegree"){
//     setText("manikanta");
//   }else {
//     setText("microdegree");
//   }
// }
  return(
//   <>
//   <h1>{text}</h1>
//    <button type="button" onClick={handleClick}>Change title </button>
//   </>
//  );
    <>
      {teams.map((team)=> {
       return (
         <div key={team.id}>
           <h4>{team.name}</h4>
        </div>
  );
})}
  <button onClick={clearTeam}>clear team</button>
    </>
  );
}
export default App;
