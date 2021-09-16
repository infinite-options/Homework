import React from "react";
import Categories from '../Suppliers/Categeories/Categeories'
import SupplierContainer from '../Suppliers/SupplierContainer/SupplierConatiner'
import "../../Home/Suppliers/Supplier.css"

export default function Suppliers() {

    return(
        <div className="container">
            <div style={{flex:'1'}}>
            <Categories/>
            </div>
            <div style={{flex:'2' , marginRight:"1000px"}}>
            <SupplierContainer/>
            </div>
        </div>
    )
}