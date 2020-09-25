import React from 'react';
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'

/* FormBox is only static UI, 
   I have to implement controls for filling input fields 
   and checked box for privacy agreement before submittig
*/

function FormBox(){


    return (
        <div>
           <form className="FormBoxStyle">
               <h4>SIGN UP NOW !</h4>
               <p>Optimize your internal communication</p>
                    <TextField
                        id="slots" 
                        type="text"
                        className="TextField pa2" 
                        label="Name" 
                        fullWidth="true" 
                    />
                    <TextField
                        id="slots" 
                        type="email"
                        className="TextField pa2" 
                        label="Email address"
                        fullWidth="true" 
                    />
                    <TextField
                        id="slots" 
                        type="text"
                        className="TextField pa2" 
                        label="Jobtitle"
                        fullWidth="true"  
                    />
                    <TextField
                        id="slots" 
                        type="text"
                        className="TextField pa2" 
                        label="Franchise Location"
                        fullWidth="true"  
                    />
                    <div><Checkbox /><span style={{position:'relative',top:'20px',left:'10px'}}>I agree to receive communication from Speakap</span></div>
                    <span>Speakap is 100% commited to respecting and protecting your privacy as the precious treasure trove that it is, and we pinky-swear to only use your personal information to administer your account and to provide the products and services you requested from us. Cross our hearts. Scout's honour.</span>
                    <button style={{margin:'20px auto',width:'100%'}}>Sign Up for a Free Demo</button>
                    <p className="formAlert">Free on charge and no obbligations</p>
            </form>
           
        </div>
       
    )
  
}

export default FormBox;