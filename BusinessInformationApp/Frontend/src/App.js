import './App.css';
import { useState, useEffect } from 'react';
import { Button, Grid, Paper, TextField } from '@mui/material';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [business_uid, setBusinessUID] = useState("");
  const [business_type, setBusinessType] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [hours, setHours] = useState({});
  const [showHoursFlag, setShowHoursFlag] = useState(false);


  useEffect(() => {
    fetch("https://kfc19k33sc.execute-api.us-west-1.amazonaws.com/dev/api/v2/businesses")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBusinesses(result.result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const handleBusinessChange = (e) => {
    if (e.target.value !== '') {
      const business = businesses[e.target.value];
      console.log('business', business);
      // setBusiness(e.target.value);
      setBusinessUID(business.business_uid);
      setBusinessType(business.business_type);
      setFirstName(business.business_contact_first_name);
      setLastName(business.business_contact_last_name);
      setHours(JSON.parse(business.business_hours));
      setShowHoursFlag(false);
      console.log(business.business_hours);
    }
  }

  const showHours = (e) => {
    setShowHoursFlag(!showHoursFlag);
  }


  return (
    <div className="App" style={{ maxWidth: "100%", paddingTop: "12px", paddingLeft: "20%" }}>
    <br />
    <Grid container direction="column" item xs={8} align="center">
    <Paper variant="outlined">
    <h2> Business Information</h2>
      <Grid container spacing={3}>
          <Grid item xs={6}>
          <TextField
          defaultValue="Business Name"
          InputProps={{
          readOnly: true,
          }}>
          </TextField>
        </Grid>
          <Grid item xs={6}>
            <select onChange={handleBusinessChange}>
            <option value="Select"> -- Select a business -- </option>
            {businesses.map((business, index) => (
              <option key={index} value={index}>
                {business.business_name}
              </option>
            ))}
            </select>
            
        </Grid>
        
          <Grid item xs={6}>
          <TextField
          defaultValue="Business ID"
          InputProps={{
          readOnly: true,
          }}>
          </TextField>
        </Grid>
          <Grid item xs={6}>
          <TextField
            label = {business_uid}
            InputProps={{
            readOnly: true,
            }}> 
          </TextField>
        </Grid>
        
        <Grid item xs={6}>
          <TextField
          defaultValue="Business Type"
          InputProps={{
          readOnly: true,
          }}>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            defaultValue={business_type}
            label = {business_type}
            InputProps={{
            readOnly: true,
            }}> {business_type}
          </TextField>
        </Grid>
        
        <Grid item xs={6}>
          <TextField
          defaultValue="First Name"
          InputProps={{
          readOnly: true,
          }}>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            defaultValue={fname}
            label = {fname}
            InputProps={{
            readOnly: true,
            }}> 
          </TextField>
        </Grid>
        
        <Grid item xs={6}>
          <TextField
          defaultValue="Last Name"
          InputProps={{
          readOnly: true,
          }}>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            defaultValue={lname}
            label = {lname}
            InputProps={{
            readOnly: true,
            }}> 
          </TextField>
        </Grid>
        
            <Grid item xs={12}>
              {hours ?
                <Button variant="contained" onClick={showHours}>{`${showHoursFlag ? "Hide" : "Show"} business hours`}</Button>
                : <div><Button variant="contained" disabled>Show business hours</Button>
                <Grid item xs={12} justifyContent="center">Business hours data unavailable</Grid></div>}
        </Grid>
       
        <Grid direction="rows" container spacing={1} style={{ maxWidth: "80%", paddingTop: "12px", paddingLeft: "30%", }}>
        {showHoursFlag && Object.keys(hours).map((keyName, i) => (
           <Grid direction="column" container spacing={1}>
            <Grid item xs={12} >{keyName}</Grid>
            <Grid item xs={12} >{hours[keyName][0]} - {hours[keyName][1]}</Grid>
          </Grid>
          ))} 
        </Grid>
      </Grid>
        
    </Paper>
    </Grid>
    </div>
  );
}

export default App;
