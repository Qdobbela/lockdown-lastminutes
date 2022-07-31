import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Paper} from '@mui/material';
import AdminSlot from './adminSlots';

//Main
export default function AdminPage() {
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
              <Grid item xs={12} md={6} lg={3}> 
                <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
                  <h1>Room 7</h1>
                </Paper>
                
                <AdminSlot room='Room7' ></AdminSlot>
              </Grid>
              <Grid item xs={12} md={6} lg={3}> 
                <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
                  <h1>Red Alert</h1>
                </Paper>
                
                <AdminSlot room='RedAlert'></AdminSlot>
              </Grid>
              <Grid item xs={12} md={6} lg={3}> 
                <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
                  <h1>Sector Z</h1>
                </Paper>
                
                <AdminSlot room='SectorZ'></AdminSlot>
              </Grid>
              <Grid item xs={12} md={6} lg={3}> 
                <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
                  <h1>The Graveyard</h1>
                </Paper>
                
                <AdminSlot room='Graveyard'></AdminSlot>
              </Grid>
            </Grid>
          </Grid>
        </Box>
    </Container>
  );
}
