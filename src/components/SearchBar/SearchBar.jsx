import axios from "axios";
import { useState, useEffect } from "react";

export default function SearchBar(){
    const [search,setSearch]=useState({
        roles:[],
        keywordTags:[],
        zipcode:''

             }
    )

    return (
        <form>
            <input 
                  type="text" 
                   placeholder="Search ..." />
                <label>
                 
                </label>
              </form>
              );
     }
    
