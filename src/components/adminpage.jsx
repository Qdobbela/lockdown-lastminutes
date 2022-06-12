import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Button } from '@mui/material';
import AdminSlot from './adminSlots';


export function SlotList(props){

  return(
    <Grid item xs={12} md={6} lg={3}> 
      <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
        <h1>{props.roomName}</h1>
      </Paper>
                
      <AdminSlot room={props.roomCode} boekingen={props.boekingen}></AdminSlot>
    </Grid>
  )
}

const getRooms = async (roomName) =>{
  var boekingen = []
  await fetch("http://localhost:9000/" + roomName)
  .then(res => res.json())
  .then(
    (result) => {
      for(var i = 0; i < result.length; i++){
        boekingen.push(result[i])
      }
    }
  )
  return boekingen
}

export default function AdminPage() {

  var room7Bookings = getRooms("Room7");
  var redAlertBookings = getRooms("RedAlert");
  var sectorZBookings = getRooms("SectorZ");
  var graveyardBookings = getRooms("Graveyard");


  return (
    <Container sx={{backgroundColor: '#2F2E2C', padding: 5}} maxWidth='false'>
      

        <Box sx={{
          display: 'flex',
          margin: 'auto',
          backgroundColor: '#2F2E2C',
          maxWidth: 1600,
          borderRadius: '15px',
          minHeight: '785px'
        }}>
          <Grid container direction="column">

            <Paper elevation= "1" sx={{ backgroundColor: '#F2F3F5', marginX: 'auto', marginTop: 5, paddingX: 5, '& > *': {padding: 0, maxWidth: 600, textAlign: 'center'}, '& > p': {color: '#616161'}}}>
              <h1>Lastminute Booking (ADMIN)</h1>
              <p><b>duid hieronder aan welke boekingen je nog kan doen</b></p>
            </Paper>

            <Grid container spacing={2} sx={{paddingY:5}} maxWidth="1200px" margin="auto">
              <SlotList roomName="Room 7" roomCode="Room7" boekingen={room7Bookings}></SlotList>

              <SlotList roomName="Red Alert" roomCode="RedAlert"></SlotList>

              <SlotList roomName="Sector Z" roomCode="SectorZ"></SlotList>

              <SlotList roomName="The Graveyard" roomCode="Graveyard"></SlotList>

              <Button size="large" sx={{backgroundColor: 'white', margin: 'auto', paddingX: '4rem', paddingY:'2rem'}}>Opslaan</Button>
            </Grid>
          </Grid>
        </Box>
    </Container>
  );
}
