
import React from "react";
import { Navbar } from "reactstrap";



const Search = () => {
    return (
        <div className="d-flex justify-content-center">
            <Navbar
    color="light"
    light
  >
    <input type='text' className="m-2 p-1" ></input>
           <button className="btn btn-primary m-1 p-1">Search</button>
   
     
  </Navbar>
        </div>
           
           
    )
}

export default Search;