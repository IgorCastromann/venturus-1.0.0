import React from 'react'

import { BsPlusSquareFill } from "react-icons/bs";
import { MdShare, MdCreate, MdDelete } from 'react-icons/md'

import { Content, HeaderContent, SearchOrder, BodyContent } from './styles'

const Teams = () =>{
    return(
        <Content>


                <HeaderContent>
                    <h1>My teams</h1>

                        <BsPlusSquareFill color="purple" size={30} />
  
                </HeaderContent>
                <SearchOrder>
                    <select className="nameSelect">
                        <option value="none" selected disabled hidden> 
                            Name
                        </option>     
                    </select> 
                    <select className="descriptionSelect">
                        <option value="none" selected disabled hidden> 
                            Description 
                        </option>     
                        
                    </select>
                </SearchOrder>
                <BodyContent>
                    <h2>Binacional</h2>
                    <div className="squad">
                       
                            <h3>Binacional Squad</h3>
                        <div>
                            <MdDelete className="delete" />
                            <MdShare className="share" />
                            <span class="tooltiptext">Edit</span>

                            <MdCreate className="edit" />
                        </div>
                    </div>
                </BodyContent>
                <BodyContent>
                <h2>Juventus</h2>
                    <div className="squad">
                       
                            <h3>Juventus Squad</h3>
                        <div>
                            <MdDelete className="delete" />
                            <MdShare className="share" />

                            <MdCreate className="edit" />
                        </div>
                    </div>
                </BodyContent>
                <BodyContent>
                <h2>Barcelona</h2>
                    <div className="squad">
                       
                            <h3>Barcelona Squad</h3>
                        <div>
                            <MdDelete className="delete" />
                            <MdShare className="share" />

                            <MdCreate className="edit" />
                        </div>
                    </div>
                </BodyContent>


        </Content>
    )
}
export default Teams