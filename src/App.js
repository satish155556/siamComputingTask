import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import DateGridTable from './Components/DateGridTable';


function App() {
  const [data,setData]= useState([]);

useEffect(()=>{
  gridedata()
})
  const gridedata = async()=>{
    const dataTranfer = await fetch("http://localhost:4444/gettable");
    const convertData = await dataTranfer.json()
    // console.log(convertData);
    setData(convertData);
  }
  
  return (
    <div className="App">
      <h1>Grid Table</h1>
      <DateGridTable data={data}/>
    </div>
  );
}

export default App;
