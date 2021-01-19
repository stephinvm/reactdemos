import React, { useState, useEffect } from 'react';
import io  from 'socket.io-client';
import Textbox from './components/Textbox.js'
import axios  from 'axios'
import Submit from './components/Submit.js'
import Table from './components/Table.js'
const socket = io('http://localhost:8080');
function App() {
  const [response, setResponse] = useState("");
  useEffect(() => {
    socket.on("connect", () => {
     console.log("user connect")
    });
    async function getCall(){
      const data1= await axios.get('http://localhost:8080/')
      if (data1){
        setResponse(data1.data.message)
      }
    }
    getCall() 
  },[]);
  async function handleClick(){
    const name=document.getElementById("name").value
    const place=document.getElementById("place").value
    const data={name:name,place:place}
    axios.post('http://localhost:8080/user',data)
    // const userData =await axios.post('http://localhost:8080/user',data) 
    // if(userData){
      
    // }
  }
  socket.on("users",(user)=>{
    async function fetch(){
      setResponse(user) 
    }
    fetch()
  })

  return (
    <div className="App">
      {/* <header className="App-header">
      </header>
      <body>
        <div></div>name
        <input type="text" id="name"/><br />
        palace
        <input type="text" id="place"/><br />
        <input type="button" onClick={handleClick} value="send"/><br />
        <p>{JSON.stringify(response)}</p>
      </body> */}
      <form onSubmit={handleClick}>
         <Textbox name="name"/>
         <Textbox name="place"/>
         <Submit />
         <Table data={response}/>
         {/* <p>{JSON.stringify(response)}</p> */}
      </form>

    </div>
  );
}

export default App;
