import { Grid, Paper } from "@mui/material"
import AdminSlot from "./adminSlots"

export default function ListHeaderAdmin(props){

  return(
    <Grid item xs={12} md={6} lg={3}> 
      <Paper sx= {{backgroundColor: '#F2F3F5', padding: 2,paddingTop: 2, '& > *': {margin: 0}, '& > :not(h1)': {color: '#616161'}}}>
        <h1>{props.roomName}</h1>
      </Paper>
                
      <AdminSlot room={props.roomCode} boekingen={props.boekingen}></AdminSlot>
    </Grid>
  )
}