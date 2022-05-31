import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Link } from '@mui/material';
import AvailableSlots from './availableSlots'

//Main
export default function Main() {

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
          <Grid container direction="column" margin="auto" maxWidth="1300px">

            <Paper elevation= "1" sx={{ backgroundColor: '#F2F3F5', marginX: 'auto', marginTop: 5, paddingX: 5, '& > *': {padding: 0, maxWidth: 600, textAlign: 'center'}, '& > p': {color: '#616161'}}}>
              <h1>Lastminute Booking</h1>
              <p><b>Hieronder kan u per kamer de beschikbare tijdsloten vinden voor een lastminute boeking vandaag. Indien u één van deze tijdsloten wil boeken bel dan naar het nummer ######### en Lander helpt u verder.</b></p>
            </Paper>

            <Grid container spacing={2} sx={{paddingY:5}}>
              <Grid item xs={12} md={6} lg={3}> 
                <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
                  <h1>Room 7</h1>
                  <h2>Detectives</h2>
                  <h3>3-6 spelers</h3>
                  <h3>60% slaagkans</h3>
                  <Link href="https://www.lockdown-escape.be/gent/escape-rooms/room-7" underline="hover">Meer info</Link>
                </Paper>
                
                <AvailableSlots room='Room7'></AvailableSlots>
              </Grid>
              <Grid item xs={12} md={6} lg={3}> 
                <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
                  <h1>Red Alert</h1>
                  <h2>Russian Bunker</h2>
                  <h3>3-6 spelers</h3>
                  <h3>50% slaagkans</h3>
                  <Link href="https://www.lockdown-escape.be/gent/escape-rooms/red-alert" underline="hover">Meer info</Link>
                </Paper>
                
                <AvailableSlots room='RedAlert'></AvailableSlots>
              </Grid>
              <Grid item xs={12} md={6} lg={3}> 
                <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
                  <h1>Sector Z</h1>
                  <h2>Zombies</h2>
                  <h3>6-12 spelers</h3>
                  <h3>Team vs Team</h3>
                  <Link href="https://www.lockdown-escape.be/gent/escape-rooms/sector-z-2-0" underline="hover">Meer info</Link>
                </Paper>
                
                <AvailableSlots room='SectorZ'></AvailableSlots>
              </Grid>
              <Grid item xs={12} md={6} lg={3}> 
                <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
                  <h1>The Graveyard</h1>
                  <h2>Spooky</h2>
                  <h3>3-6 spelers</h3>
                  <h3>40% slaagkans</h3>
                  <Link href="https://www.lockdown-escape.be/gent/escape-rooms/the-graveyard" underline="hover">Meer info</Link>
                </Paper>
                
                <AvailableSlots room='Graveyard'></AvailableSlots>
              </Grid>
            </Grid>
            </Grid>
        </Box>
    </Container>
  );
}
