import React, { useEffect, useState } from "react";
import "../SupplierContainer/SupplierContianer.css"
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Box from '@material-ui/core/Box';



export default function SupplierContainer() {

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://tsx3rnuidi.execute-api.us-west-1.amazonaws.com/dev/api/v2/ProduceByLocation/-121.8866517,37.2270928')
            .then((response)=>{
                console.log("Response", response.data.result)
               setData(response.data.result)
            })
    },[])



    return(
        <div >
            <div className="SearchBar" style={{border:'solid 2px', borderRadius:'12px'}}>
                <div style={{padding:'0.7rem',marginLeft:'2px', backgroundColor:'#EAEAEA', border:'solid 0px', borderRadius:'4px', borderRight:'2px solid', fontFamily:'SF Compact SemiBold'}}>
                    Suppliers
                </div>
                <div>
                    <input type='text' placeholder="Search"  style={{width:'30rem',height:'18px', borderWidth:'0px', paddingTop:'0.8rem', paddingLeft:'1rem'}}/>
                </div>
            </div>
            <div>
            <div className="titleSupplier" style={{ fontFamily:'SF Compact Heavy'}}>
            Suppliers
            </div>
            <div className="dropDown" style={{display:'flex', justifyContent:'flex-start'}}>
            <div style={{textAlign:'left', marginTop:'1rem', marginRight:'1rem'}}>
            <select id="cars" name="cars" className="Selector">
                    <option value="volvo">Seller details</option>
                    <option value="saab">1</option>
                    <option value="fiat">2</option>
                    <option value="audi">3</option>
            </select>
            </div>

            <div style={{textAlign:'left', marginTop:'1rem', marginRight:'1rem'}}>
            <select id="cars" name="cars" className="Selector">
                    <option value="volvo">Seller details</option>
                    <option value="saab">1</option>
                    <option value="fiat">2</option>
                    <option value="audi">3</option>
            </select>
            </div>


            <div style={{textAlign:'left', marginTop:'1rem', marginRight:'1rem'}}>
            <select id="cars" name="cars" className="Selector">
                    <option value="volvo">Seller details</option>
                    <option value="saab">1</option>
                    <option value="fiat">2</option>
                    <option value="audi">3</option>
            </select>
            </div>

            <div style={{display:'flex', textAlign:'left',height:'2.5rem',marginTop:'1rem', border:'solid 3px', borderRadius:'8px'}}>
                    <input type='text' placeholder="Location"  style={{marginTop:'0.1rem',  width:'8rem',height:'2rem', borderWidth:'0px', borderRadius:'8px'}}/>
                    <SearchIcon
                    style={{marginTop:'0.5rem'}}
                    size="lg"/>
            </div>
            </div>
            </div>

            <Box className="grid">
            {data.map((item) => {
                return(
                   
                        <div style={{display:'flex', flexDirection:'column', margin:'1rem', textAlign:'left'}} >
                            <img  src={item.item_photo} style={{ width:'12rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                            <div style={{fontFamily:'SF Compact Heavy', marginTop:'1rem', fontSize:'18px'}}>  { item.item_name} </div>
                            <div  style={{fontFamily:'SF Compact', marginTop:'1rem'}}> {item.item_info}</div>
                            </div>
                )
            })}
            </Box>

            {/* <Grid container spacing={1} style={{marginTop:'1rem'}}>
                <Grid item xs={3} spacing={2}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>XYZ Molding</div>
                    <div style={{textAlign:'left', fontSize:'16px' , marginTop:'0.5rem'}}> Injection  Molding, 3D printing and prototyping</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem' }}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left',fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
              
                </Grid>
               <Grid  item xs={3} spacing={2}>
               <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                </Grid>
                <Grid  item xs={3} spacing={3}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'1rem'}}>
                    <img style={{width:'13rem', height:'10rem',backgroundColor:'#EAEAEA', borderRadius:'12px'}}/>
                    <div style={{textAlign:'left', fontWeight:'bold', fontSize:'22px', marginTop:'0.5rem'}}>LifeStyle Textitles</div>
                    <div style={{textAlign:'left', fontSize:'16px', marginTop:'0.5rem'}}>Satin, Cotton, Hemp fabric, Linens</div>
                </div>
                
                </Grid>
            </Grid> */}
        </div>
    )
}