import './App.css';
import React,{ useState} from 'react';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'



function Directories(props){

  const checkIn = () => {   update(myValue); console.log(myValue); };


  const [updateVal, update] = useState(props.HWSet1);

  const [myValue, setValue] = useState(props.HWSet1);


  return(
    <div className = "Directory">
      <p id= "text">{props.name}</p>
      <p id= "text">{props.Users}</p>
      <div id= "counterbox">
        <p id= "counter"> HWSet1: {updateVal}/100</p>
      </div>
      <div id= "quant">
      <FormControl  sx={{ m: 1, minWidth: 110 }} size = "small">
        <InputLabel id="demo-simple-select-label">HWSet</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={0}>HWSet1</MenuItem>
        </Select>
      </FormControl>
      <TextField  id="filled-basic" 
                  label="Quantity" 
                  variant="filled" 
                  size="small" 
                  width="40" 
                  onChange={(e) => setValue(e.target.value)} 

      />
      </div>
      <div id= "Check">
        <Button id= "button" variant="outlined" onClick = {checkIn}>Set Value</Button>
      </div>

      <div id= "Join">
        <Button id= "button2" variant="outlined">Join</Button>
      </div>
      
    </div>
  );
}

function Projects(props){
  return(
    <div className = "Projects">
      <h1>{props.name}</h1>
      <Directories name= "Project1" HWSet1 = "50" HWSet2 = "0" Users = {['Ken ', ' Abhay ', ' Anon']}/>
      <Directories name= "Project2" HWSet1 = "50" HWSet2 = "100" Users = {['Ken ', ' Bobby ', ' Anon']}/>
      <Directories name= "Project3" HWSet1 = "20" HWSet2 = "60" Users = {['Ken ', ' admin ', ' Anon']}/>
    </div>
  );
}

function App() {
  return (
    <div class="background">
      <Projects name = "Project Directory"/>
    </div>
  );
}

export default App;
