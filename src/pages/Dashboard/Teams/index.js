import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import { BsPlusSquareFill } from "react-icons/bs";
import { MdShare, MdCreate, MdDelete } from 'react-icons/md'
import { FaSortDown, FaSortUp } from 'react-icons/fa'



import { Content, HeaderContent, SearchOrder, BodyContent } from './styles'

const Teams = () =>{
    const [sort, setSort] = useState(true)
    const [showTeams, setShowTeams] = useState([
        {
            id: 0,
            name: 'Binacional',
            description: 'Binacional Squad'
        },
        {
            id: 1,
            name: 'Juventus',
            description: 'Juventus Squad'
        },
        {
            id: 2,
            name: 'Barcelona',
            description: 'Barcelona Squad'
        }
    ])
useEffect(()=>{
    
},[])

function handleSort(prop){
    
    if(sort === true){
        handleSortUptoDown(prop)
        setSort(false)
    }else{
        handleSortDowntoUp(prop)
        setSort(true)
    }

}

function handleDeleteTeam(index){
    const newTeams = showTeams.filter(item => item.id !== index )     
   
    setShowTeams(newTeams)
}

function handleSortUptoDown(prop){
    if (prop === 'name'){
        const sortedTeams = showTeams.sort((a, b) => (a.name > b.name) ? 1 : -1);
    
        setShowTeams([...sortedTeams]);
    }else{
        const sortedTeams = showTeams.sort((a, b) => (a.description > b.description) ? 1 : -1);
    
        setShowTeams([...sortedTeams]);
    }

}
function handleSortDowntoUp(prop){
    if (prop === 'name'){
        const sortedTeams = showTeams.sort((a, b) => (a.name > b.name) ? -1 : 1);
    
        setShowTeams([...sortedTeams]);
    }else{
        const sortedTeams = showTeams.sort((a, b) => (a.description > b.description) ? -1 : 1);
    
        setShowTeams([...sortedTeams]);
    }
}

    return(
        <Content>
                <HeaderContent>
                    <h1>My teams</h1>
                        <Link to="/creating">
                            <BsPlusSquareFill color="purple" size={30} />
                        </Link>
  
                </HeaderContent>
                <SearchOrder>
                    <label className="nameSelect" id="name" defaultValue="name" onDoubleClick={(ev)=> handleSort(ev.currentTarget.id)}>
                        <span>Name</span>
                        <div className="divSort">
                            <FaSortUp id="name" onClick={(ev)=> handleSortDowntoUp(ev.currentTarget.id) } />
                            <FaSortDown id="name" onClick={(ev)=> handleSortUptoDown(ev.currentTarget.id) } />
                        </div>
                    </label> 
                    <label className="descriptionSelect" defaultValue="description" id="description" onDoubleClick={(ev)=> handleSort(ev.currentTarget.id)}>
                        <span>Description</span>
                        <div className="divSort">
                            <FaSortUp id="description" onClick={(ev)=> handleSortDowntoUp(ev.currentTarget.id) } />
                            <FaSortDown id="description" onClick={(ev)=> handleSortUptoDown(ev.currentTarget.id) } />
                        </div>
                    </label> 
                </SearchOrder>
                    {showTeams.map((team, index)=>(
                        <BodyContent key={team.id}>

                            <h2>{team.name}</h2>
                            <div className="squad">
                                    <h3>{team.description}</h3>
                                <div className="actions">
                                    <div className="tooltip"> 
                                        <span className="tooltiptext">Delete</span>
                                        <MdDelete className="delete" onClick={()=> handleDeleteTeam(team.id)} />
                                    </div>
                                    <div className="tooltip"> 
                                        <span className="tooltiptext">Share</span>
                                        <MdShare className="share" />

                                    </div>
                                    <div className="tooltip"> 
                                        <span className="tooltiptext">Edit</span>
                                        <MdCreate/>
                                    </div>
                                </div>
                            </div>
                        </BodyContent>
                            
                        ))}
                       
        </Content>
    )
}
export default Teams