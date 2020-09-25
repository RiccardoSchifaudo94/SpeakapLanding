import React from 'react';
/*  I RETRIVE THE IMAGE OF BACKGORUND FROM IMG FOLDER */ 
import desktop_app from './../img/desktop-iphone-card.png';

/*  SIMPLE IMAGE RESPONSIVE CONTAINER FOR THE THIRD SECTION  */ 
/*  I PREFER TO CREATE SPECIFIC STYLESHETT FOR EACH COMPONENT, 
     BUT FOR THIS LANDING PAGE I WRITE ALL STYLES IN A SINGLE STYLE */

function FlexBox(){
    return(
        <div className="flexPaint">
             <img src={desktop_app} className="desktop_app"></img>
        </div>
    )
}


export default FlexBox;