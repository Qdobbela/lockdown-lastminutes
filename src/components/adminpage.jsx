import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Button } from '@mui/material';
import AdminSlot from './adminSlots';
import { useState, useEffect } from 'react';
import ListHeaderAdmin from './listHeaderAdmin';

export default function AdminPage() {
  const[boekingen, setBoekingen] = useState()

  useEffect(() => {

  })


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
              <ListHeaderAdmin roomName="Room 7" roomCode="Room7"></ListHeaderAdmin>

              <ListHeaderAdmin roomName="Red Alert" roomCode="RedAlert"></ListHeaderAdmin>

              <ListHeaderAdmin roomName="Sector Z" roomCode="SectorZ"></ListHeaderAdmin>

              <ListHeaderAdmin roomName="The Graveyard" roomCode="Graveyard"></ListHeaderAdmin>

              <Button size="large" sx={{backgroundColor: 'white', margin: 'auto', paddingX: '4rem', paddingY:'2rem'}}>Opslaan</Button>
            </Grid>
          </Grid>
        </Box>
    </Container>
  );
}
