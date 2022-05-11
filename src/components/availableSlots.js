import React from "react";
import { Paper } from "@mui/material";

function TimingList(props){
  const timeSlots = props.timeSlots;
  const listItems = timeSlots.map((timeSlot) =>
    <Paper sx= {{backgroundColor: '#307E30', '& > *': {color: 'white', textAlign: 'center', padding: 2}, margin: 'auto'}}>
      <h2>{timeSlot}</h2>
    </Paper>
  );
  if(timeSlots.length === 0){
    return(
      <Paper sx= {{backgroundColor: 'darkgrey', '& > *': {color: 'white', textAlign: 'center', padding: 2}, margin: 'auto'}}>
        <h2>Geen tijdsloten beschikbaar</h2>
      </Paper>
    )
  } else{ 
  return (
    <p>{listItems}</p>
  )
  }
}

export class AvailableSlots extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      timeSlots: []
    }
    this.room = props.room
  }

  componentDidMount(){
    fetch("http://localhost:9000/" + this.room,)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.timeSlots
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render(){
    const {error, isLoaded, items} = this.state;
    if (error){
      return <div>Error: {error.message}</div>
    } else if(!isLoaded){
      return (<div>Vrije tijdsloten ophalen...</div>)
    } else {
        console.log(items);
        return(
          <TimingList timeSlots={items}></TimingList>
        )
    }
  }
}
export default AvailableSlots