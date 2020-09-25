import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

/*  I made my custom knob using an overlay of position absolute circular progress,
    native of material UI and inspired from http://anthonyterrien.com/demo/knob/ 
    p.s: I feel the missing of JQuery :(
*/ 

function Knob(props){
    /*
         Knob Component receive the value of size and the percentage which will be printed in the center of mini pie. 
         I styled  half component inline and the other half in App.css
    */
    return(
        <div style={{textAlign:'center',position:'relative',marginTop:'100px'}}>
            <strong style={{position: 'absolute',top: '50px',left: 0 , right: 0}}>{props.value}%</strong>
            <CircularProgress variant="static" value={props.value} size={props.size} style={{textAlign:'center',color:'#56ab74',position:'absolute',zIndex:2}}/>
            <CircularProgress variant="static" value="100" size={props.size} style={{color:'#dadada'}}/>
        </div>
    )
}

export default Knob;