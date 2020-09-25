import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

{/*  On List component I excecute an iterator passing props parameters  */ }

function List(props){

    return(
        <div className="listIterator">
            <h2>{props.title}</h2>
            <ul>
            {
                props.list.map((item, index) => (
                    /*   I've found some issues to extract all assets of Mavenapp, so I found out to solve the problem usign custo icon font. */ 
                        <li key={index}>  <FontAwesomeIcon icon={faCheck} className="checkStyle"/>{item}</li>
                    )
                )
            }
            </ul>
        </div>
    )
}


export default List;