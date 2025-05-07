import { Box, Button, ButtonGroup, List, ListItemText, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";


 const Counter=observer(function Counter() {
  const {counterStore}=useStore();
  
  return (
    <Box display='flex' justifyContent='space-between'>
      <Box sx={{width:'60%'}}>

      <Typography variant="h4" gutterBottom>{counterStore.title}</Typography>
        <Typography variant="h6">the count is:{counterStore.count}</Typography>
        <ButtonGroup sx={{mt:3}}>
      <Button onClick={()=>counterStore.decrement()} variant="contained" color="error">Decrement</Button>
      <Button onClick={()=>counterStore.increment()} variant="contained" color="success">Increment</Button>
      <Button onClick={()=>counterStore.increment(5)} variant="contained" color="primary">Increment by 5</Button>
    </ButtonGroup>
      </Box>
      <Box sx={{width: '40%'}}> 
        <Typography variant="h5">Counter Events ({counterStore.eventCount})</Typography>
        <List>
          {counterStore.event.map((even,index)=>(
            <ListItemText key={index}>{even}</ListItemText>
 ))}
         
        </List>
      </Box>
 
    
    
    </Box>
    
  )
});

export default Counter;



