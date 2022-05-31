import React from "react";
import { Paper, Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function TimingList(props){
  const [open, setOpen] = React.useState(false);


  const clickOpen = () => {
    setOpen(true);
  }

  const handleClose = () =>{
    setOpen(false);
  }

  const timeSlots = props.timeSlots;
  const listItems = timeSlots.map((timeSlot) =>
    <div>
      <Button onClick={clickOpen} sx= {{backgroundColor: '#307E30', '& > *': {color: 'white', textAlign: 'center'},width: '100%', marginX: 'auto', marginBottom: '1rem'}}>
        <h2>{timeSlot.timeSlot}</h2>
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        BackdropProps={{ style: {backgroundColor: 'rgba(0,0,0,0.2)'}}}
        >
      <DialogTitle>Bel ons!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p><b>Indien u één van deze tijdsloten wil boeken bel dan naar het nummer ######### en Lander helpt u verder.</b></p>
        </DialogContentText>
      </DialogContent>
    </Dialog>
    </div>
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
    fetch("http://localhost:9000/" + this.room + "free")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          var boekingen = [];
          for(var i = 0; i < result.length; i++){
            boekingen.push(result[i])
          }
          this.setState({
            isLoaded: true,
            items: boekingen
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
      return (
        <Paper sx= {{backgroundColor: '#307E30', '& > *': {color: 'white', textAlign: 'center', padding: 2}, margin: 'auto'}}>
          <h2>Vrije tijdsloten ophalen...</h2>
        </Paper>)
    } else {
        return(
          <TimingList timeSlots={items}></TimingList>
        )
    }
  }
}
export default AvailableSlots