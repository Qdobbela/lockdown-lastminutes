import React from "react";
import { Paper, Button} from "@mui/material";
import axios from 'axios';

function AdminButton(props){
  var timeSlot = props.timeSlot
  var [free, setFree] = React.useState(props.timeSlot.free);
  timeSlot.free = free

  const clickBooking = () => {
    if(free){
      setFree(false)
    } else{
      setFree(true)
    }
  }

  return(
    <Button onClick={() => clickBooking()} sx= {{backgroundColor: free?'green' : 'red' , '& > *': {color: 'white', textAlign: 'center'},width: '100%', marginX: 'auto', marginBottom: '1rem'}}>
      <h2>{timeSlot.timeSlot}</h2>
    </Button>
  )
}

function TimingList(props){
  const timeSlots = props.timeSlots;
  console.log(timeSlots)

  const opslaan = () => {
      timeSlots.forEach(timeSlot => {
            axios.put('http://localhost:9000/', {
              id: timeSlot.id,
              timeSlot: timeSlot.timeSlot,
              free: timeSlot.free
        }).then(function (res) {
          console.log(res);
        })
      })
  }

  var listItems = timeSlots.map((timeSlot) =>
    <div>
      <AdminButton timeSlot={timeSlot} ></AdminButton>
    </div>
  );
  if(timeSlots.length === 0){
    return(
      <Paper sx= {{backgroundColor: 'darkgrey', '& > *': {color: 'white', textAlign: 'center', padding: 2}, margin: 'auto'}}>
        <h2>Geen tijdsloten beschikbaar</h2>
      </Paper>
    )
  } else { 
    return (
      <div>
        <p>{listItems}</p>
        <Button onClick={opslaan} sx={{backgroundColor: 'yellow'}}>Opslaan</Button>
      </div>

    )
  }
}

export class AdminSlot extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      timeSlots: props.boekingen
    }
    this.room = props.room
  }

  componentDidMount(){
  }

  render(){
    const {error, isLoaded, timeSlots} = this.state;
    if (error){
      return <div>Error: {error.message}</div>
    } else if(!isLoaded){
      return (
        <Paper sx= {{backgroundColor: '#307E30', '& > *': {color: 'white', textAlign: 'center', padding: 2}, margin: 'auto'}}>
          <h2>Vrije tijdsloten ophalen...</h2>
        </Paper>)
    } else {
        return(
          <TimingList timeSlots={timeSlots}></TimingList>
        )
    }
  }
}
export default AdminSlot