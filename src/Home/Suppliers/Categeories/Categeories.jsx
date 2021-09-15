import React from "react";
import "../Categeories/Categeories.css"

export default function Categeories() {

    

    return(
        <div className="categeories-Conatiner">
            <div className="title" style={{ fontFamily:'SF Compact Heavy'}}>
            Categories
            </div>
            <div className = "subTitle"  style={{ fontFamily:'SF Compact SemiBold'}}>
            <div style={{marginTop:'1rem'}}>
            Consumer Electronics 
            </div> 
            <div  style={{marginTop:'1rem'}}>
            Textiles 
            </div>
            <div  style={{marginTop:'1rem'}}>
            Security Equipment 
            </div>
            <div  style={{marginTop:'1rem'}}>
            Gardenening Equipment   
            </div>
            </div>

            <div style={{paddingRight:'3rem'}} >
            <div className = "title" style={{ fontFamily:'SF Compact Heavy'}}>
            Converstion Rate 
            </div>
                <div className='checkBoxAbove' style={{ fontFamily:'SF Compact SemiBold'}}>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}}>  Above 90% </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Above 80% </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Above 70% </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Above 60% </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Above 50% </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Above 40% </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Above 30% </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}}>  Above 20% </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Above 10% </label>
                </div>
                </div>
            </div>

            <div style={{paddingRight:'3rem'}} >
            <div className = "title" style={{ fontFamily:'SF Compact Heavy'}} >
            Av. Response Time
            </div>
                <div className='checkBoxAbove' style={{ fontFamily:'SF Compact SemiBold'}}>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  24 hours </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}}>  2-3 days </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}}>  Within a week </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Within a month </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}}>  Within 2 month </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Within 3 month </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}}>  Within 4 month </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}}>  Within 5 month </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}}>  Within 6 month </label>
                </div>
                </div>
            </div>

            <div style={{paddingRight:'3rem'}} >
            <div className = "title" style={{ fontFamily:'SF Compact Heavy'}}>
            Top Markets
            </div>
                <div className='checkBoxAbove' style={{ fontFamily:'SF Compact SemiBold'}}>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label style={{fontSize:'14px',marginLeft:'0.5rem'}} > North America </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}}>  South America </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Western Europe </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Eastern Europe </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} >  Central Europe </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}}>  United Kingdom </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label   style={{fontSize:'14px',marginLeft:'0.5rem'}}>  Germany </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} >  France </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}}>  Italy </label>
                </div>
                </div>
            </div>
            
            <div style={{paddingRight:'3rem'}} >
            <div className = "title" style={{ fontFamily:'SF Compact Heavy'}}>
            Certifications
            </div>
                <div className='checkBoxAbove' style={{ fontFamily:'SF Compact SemiBold'}}>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} > ISO9001 </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} > ISO14001 </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} >  ISO13485 </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} > BSCI </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} >  ISO/TS16949 </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}} >  ISO9001 </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}}>  ISO9001-2001 </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}}>  CCI </label>
                </div>
                <div style={{marginTop:'1rem' , display:'flex', alignItems:'center'}}>
                <input type="checkbox" style={{height:'24px', width:'24px'}} /> 
                <label  style={{fontSize:'14px',marginLeft:'0.5rem'}}>  LCIS </label>
                </div>
                </div>
            </div>
        </div>
    )
}