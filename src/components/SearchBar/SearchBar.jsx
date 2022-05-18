import axios from "axios";
import { useState, useEffect } from "react";

export default function SearchBar(){
    const [search,setSearch]=useState({
        roles:[],
        keywordTags:[],
        zipcode:''

             }
    )


    useEffect(() => {
        ( async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/projects`)
            setSearch(response.data)
          } catch (err) {
            console.log(err)
          }
        })()
      }, [])
  
   


    return (
        <form>
            <input 
                  type="text"
                  value={search} 
                   placeholder="Search ..." 
                   onChange={(event) => setSearch(event.target.value)}/>
                  
                <label>
                 
                </label>
              </form>

  

              );
     }
    
