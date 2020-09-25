//react core
import React from 'react';

//material ui assets
/*   I used MATERIAL UI theme 
     for creation of landing page sections 
*/ 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';


//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';


//my components
import Header from './components/Header';
import List from './components/List';
import FormBox from './components/FormBox';
import Knob from './components/Knob';
import Carousel from './components/Carousel';
import FlexBox from './components/FlexBox';


//project assets
import './App.css';


function App() {
  /* basic configuration for Responsive GRID */
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  /*  I create array items to iterate list of feture of app 
      using a custom component called List in order 
      to print a list of checked tasks 
  */ 
  const list_items = [ 
                      "Reach all employees",
                      "Motivate and inspire employees",
                      "Increase employee engagement",
                      "Reduce staff turnover",
                      "Communicate at lightning speed",
                      "Do it all from one application"
  ];
   
  /* I don't have time to implement everything so I inserted a service message for missing functions */
  const notAvailable = () =>{
    alert("Not Available! Sorry.");
  }
  
  return (
    <div className="App">
      {/* I developed a custom component called Header to create first background with the introduction of this landing page */ }
      <Header></Header>
      <div className={classes.root}>
        {/* In the second section I created a row splitted in two part where there is in first colum a component called List who iterate the array of items */}
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              
                <Grid item sm={6} xs={12}>
                  <List title="The Benefit" list={list_items}></List>
                </Grid>
                {/* In the second column there will be initialize the FormBox in order to renderize the Enquire Form only in the case you are on desktop mode
                    , otherwise the Form will hidden in responsive mobile so you must use the modal dialog
                */ }
                <Grid item sm={6} xs={12}>
                  <Hidden only={['sm','xs']}>
                      <FormBox></FormBox>
                  </Hidden>
                </Grid>

            </Grid>{/* CLOSE ROW */ }

            <Divider></Divider>

            {/*  In the third section for the implementation of infographics I didn't find mini pies in this web kit, the only similar was CircleProgress, 
                 so i played and I inveted my version of JQuery Knob with a custom style on App.css 
            */ }      
            <Grid container spacing={3} className="knobsBlock">
                  <h3>Some stats to warm you up</h3>
                  <Grid item sm={4} xs={12} align-items-xs-center justify-xs-flex-end>
                    {/*  I want to show my custom knobs pie only in mobile mode */ }
                      <Hidden only={['xl','lg','md']}>
                        {/*  in this component I pass as first parameter the percentage to show, 
                              and as second parameter the size in px of this graph */ 
                        }
                          <Knob value={31} size={150}></Knob>
                      </Hidden>
                      {/*  Obviously I created a specific card graph for desktop mode, 
                           and it is consist of an icon font with specif color, a marker with pseudo element to customize the + symbol in App.css and description label */ }
                      <Hidden only={['sm','xs']}>
                        <div className="infoCard">
                          <FontAwesomeIcon icon={faCircleNotch} size="5x" style={{color:'#56ab74'}}></FontAwesomeIcon>
                          <strong>31%</strong>
                        </div>
                      </Hidden>
                      <p>Increase communication between management and employees</p>
                  </Grid>
                    
                  <Grid item sm={4} xs={12} align-items-xs-center justify-xs-flex-end>
                      <Hidden only={['xl','lg','md']}>
                        <Knob value={39} size={150}></Knob>
                      </Hidden> 
                      <Hidden only={['sm','xs']}>
                        <div className="infoCard">
                          <FontAwesomeIcon icon={faAlignLeft} size="5x" style={{transform:'rotate(-90deg)',color:'#56ab74'}} ></FontAwesomeIcon>
                          <strong>39%</strong>
                        </div>
                      </Hidden>
                      <p>Higher cut through of company news and updates</p>
                  </Grid>
                  
                  <Grid item sm={4} xs={12} align-items-xs-center justify-xs-flex-end>
                      <Hidden only={['xl','lg','md']}>
                        <Knob value={30} size={150}></Knob>
                      </Hidden>
                      <Hidden only={['sm','xs']}>
                        <div className="infoCard">
                          <FontAwesomeIcon icon={faSignal} size="5x" style={{color:'#56ab74'}}></FontAwesomeIcon>
                          <strong>30%</strong>
                        </div>
                      </Hidden>       
                      <p>More information being shared between collegues</p>
                  </Grid>

            </Grid>{/* CLOSE ROW */ }
          </Container> 
          {/*  After the end of third section I closed the container because I made a break section with a pseudo carousel, 
               but I don't I have time to realize the slide effect. I though to insert a fade effect on click of one avatars below, 
               but it remained only an idea 
          */ }
          <Carousel></Carousel>
          <Container> 
            {/*   To finish rapidly the development I reclyed previous style and I adjust styles directly inline, sorry I know is not the better approach */ }       
            <Grid item sm={12} xs={12}>
                <h3>Replace non-compliant communication tools</h3>
                <h2 style={{textAlign:'center'}}>All-in-one solution</h2>
                <FlexBox></FlexBox>
            </Grid>
            <Grid style={{margin:'0 auto'}}>
                <h2 style={{textAlign:'center',width:'300px'}}>Start optimizing your internal communication!</h2>
                <p style={{textAlign:'center',margin:'0 auto'}}>What are you waiting for? Request a free demo and experience the benefits for your franchise.</p>
                <button style={{display:'block', margin:'60px auto'}} onClick={notAvailable}>Sign up for a free demo</button>
                <span style={{color:'#888',display:'block',textAlign:'center',margin:'0 auto 40px'}}>NYP Connect is a Speakap product</span>
            </Grid>
          </Container>
         
      
          </div>
    </div>
  );
}

export default App;
