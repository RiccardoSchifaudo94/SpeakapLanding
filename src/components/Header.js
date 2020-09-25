import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';

//components and assets
import applogo from './../img/logo.svg';



function Header(){
    {/*   METHODS TO SET STATE FOR OPENING AND CLOSING FORM MODAL */ }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return(
        
        <div>
        {/*   DIALOG MODAL FOR ENQUIRING INFOMATION */ }
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className="FormBoxStyle">
          <DialogTitle id="form-dialog-title"><h4 style={{marginLeft:'35px',marginTop:'35px'}}>SIGN UP NOW !</h4></DialogTitle>
          <DialogContent>
            <DialogContentText>
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
                    <span style={{textAlign:'left'}}>Speakap is 100% commited to respecting and protecting your privacy as the precious treasure trove that it is, and we pinky-swear to only use your personal information to administer your account and to provide the products and services you requested from us. Cross our hearts. Scout's honour.</span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
                <button onClick={handleClose} color="primary" style={{margin:'0 auto'}}>
                Sign up for a free demo
                </button>
          </DialogActions>
        </Dialog>
        {/*   DIALOG MODAL FOR ENQUIRING INFOMATION */ }
        {/*   HEADER COMPONENT */ }
        <header className="headerBkg">
            <div className="container">
                <img className="headerLogo" src={applogo} alt="logo"/>
                <h1 style={{textTransform:'uppercase'}}>The internal coomunication app for <span style={{borderBottom:'3px solid #fff'}}>new york pizza</span></h1>
                <p>NYP Connect is a private and secure social platform that enables you to easily and quickly reach all employees. NYP Connect is always available: in the restaurant, at the head office and from home. The NYP Connect app is a must-have for all your internal communication needs.</p>
                <Hidden only={['lg','md']}><button onClick={handleClickOpen}>Sign up for a free demo</button></Hidden>
            </div>
           
        </header>
      </div>
      
    )
}

export default Header;