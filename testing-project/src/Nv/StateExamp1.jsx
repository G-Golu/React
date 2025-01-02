 
import { useState } from  "react";
function StateExamp1() {
    const [name, setName ] = useState("RKU");
    const [age, setAge] =    useState(45);
    const [color, setColor] = useState ("Red");
    const [setBld] = useState("Bold");
    return(
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <br/>
            <p>Name of Candidate is :  {name} </p>
           <input value ={name} onChange={(e) => setName (e.target.value)}/>
            <h1>{name}</h1>
            <br/>
            
            <input type="number" value ={age} onChange={(e) => setAge (e.target.value)}/>

            <p style={{background: color, height:50 ,fontSize:22 }}>
            Age of Candidate is :  {age} 
            </p>
           
          {/*  <input type="radio" name="c1" onChange={() => {setColor("Blue"),setName("Blue");}} /> */}
           <input type="radio" name="c1" onChange={() => setColor("Blue")}/>
           <input type="radio" name="c1" onChange={() => setColor("Yellow")} />
           <input type="radio" name="c1" onChange={() => {setColor("Green"),setBld(700)}} />
          
           {color}
        </div>
    );
}

export default StateExamp1;