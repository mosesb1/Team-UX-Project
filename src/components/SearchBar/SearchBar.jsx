import './SearchBar.css';
import { useState, useEffect } from "react";
import { statesList, artistRoles } from "../../utilities/list-items/list-items";

export default function SearchBar({user, filter, setFilter, type, refreshFilter, setRefreshFilter}){
  const [checks, setChecks] = useState([...Array(19)].fill(false))

  const handleChange = (evt) => {
    setFilter({
      ...filter,
      [evt.target.name]: evt.target.value
    })
  }

  const addRole = (e, aRole,index) => {
    setChecks(checks.map((check, idx) => {
      return (
        idx === index ? !check : check
      )
    }))
    const arr = filter.roles
    if (e.target.checked) {
        arr.push(aRole)
        setFilter({...filter, roles: arr})
    } else {
        const indexToDelete = arr.indexOf(aRole)
        arr.splice(indexToDelete, 1)
        setFilter({...filter, roles: arr})
    }
  }

  const addDate = (event, isStart, index) => {

    const newDate = event.target.value

    if(event.target.name === 'dateStartEnd') {

        const dateArr = filter.dates
        if (isStart) {
            dateArr[0] = newDate
            setFilter({ ...filter, dates: dateArr })
        } else if (!isStart) {
            dateArr[1] = newDate
            setFilter({ ...filter, dates: dateArr })
        } 
    }
  }


  const clearFilter = (evt) => {
    if(type === 'collaborator'){
      setFilter({
        usState: '',
        zipCode: '',
        roles: [],
        keyword: ''
      })
    } else {
      setFilter({
        usState: '',
        zipCode: '',
        roles: [],
        dates: ["",""]
      })
    }
    setChecks(checks.map((check, idx) => {
      return (
        false
      )
    }))
    setRefreshFilter(!refreshFilter);
  }

  const applyFilter = (evt) => {
    setRefreshFilter(!refreshFilter);
  }

  const search = () => {
    return (

      <div className='find-collab-container'>
      
          <div className="filter-column">
{/* 
            <div>
              <h3>Active Filters</h3>
              <button onClick={clearFilter}>Clear Filter</button>
            </div> */}

            <div>
              <div className='filter-location'>
                <h3>Search by location</h3>
              </div>

              <label> State
                <select className="search-select" name="usState" value={filter.usState} onChange={handleChange} required >
                    {statesList.map((usState, index) => (
                      <option value={usState.value} key={index} >{usState.label}</option>
                    ))}   
                </select>
              </label>

              <label> Zip code
                  <input type="text" name="zipCode" value={filter.zipCode} onChange={handleChange} required />
              </label>

              <div id="lookingFor">
                <h3>I'm looking for </h3>
              </div>

            </div>


            <div className='form-columns'>
              
              <div className='filterRoles'>
                {
                  artistRoles.map((theRole, index) => {
                    return(
                      <div className={`form-column-${index % 3 + 1}`} key={index}>
                          <label>
                              <input type="checkbox" name="roles" checked={checks[index]} value={theRole.role} onChange={(e) => addRole(e, theRole.role, index)}/>
                              {theRole.role}
                          </label>
                      </div>
                    )
                  })
                }
              </div>

            </div>
            {
              type === 'project' && 
                <div className='date-range-select'>
                  <p>Date Range:</p>
                  <label>Start: <input type="date" name="dateStartEnd" value={filter.dates[0]} onChange={(e) => {addDate(e, true)}}/></label>
                  <label>End: <input type="date" name="dateStartEnd" value={filter.dates[1]} onChange={(e) => {addDate(e, false)}}/></label>
                </div>
            }

            <div className='apply-filter-button'>
              <button onClick={applyFilter}>Apply Filters</button>
              <button onClick={clearFilter}>Clear Filter</button>
            </div>
          </div>

    </div>
    )
  }

  return search();
}
