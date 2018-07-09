import React, { Fragment, Component } from "react";

import * as firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Firebase from '../../firebase';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import ABar from '../appbar'
import YTSearch from 'youtube-api-search';
  import VideoList from './video_list';
  import VideoDetail from './video_details';
  const API_KEY = 'AIzaSyCUAz81B-N4iNHprsiyTim474pf4ase9HM';

const diet_types = [
  'Veg', 'NVeg', 'Keto'
]
const meal_types = [
  'Breakfast', 'Lunch', 'Snacks', 'Dinner'
]


Firebase;

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },

});


class Diet extends Component{
  
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

   
  
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
      });
    }

  constructor(){
    super();
    this.state={
      videos: [], 
      selectedVideo: null,
      ingr:'a',
      name:'a',
      prep: 'a',
      nutrients:'a'
    
    };
    this.videoSearch('fitness excercise and diet plan');
  }
    
  componentDidMount(meal_types) {
    const rootRef = Firebase.database().ref().child('react/Dietplan');
    const vdescRef = rootRef.child('Veg/desc')
    const vname1Ref = rootRef.child('Veg/Breakfast/Recipe1/name');
    const vnutrients1Ref = rootRef.child('Veg/Breakfast/Recipe1/nutrient');
    const vingr1Ref = rootRef.child('Veg/Breakfast/Recipe1/ingr');
    const vprep1Ref = rootRef.child('Veg/Breakfast/Recipe1/prep');

    vdescRef.on('value', snap =>{
      this.setState({
        vdesc:snap.val()
        
       });
      });
    vname1Ref.on('value', snap =>{
     this.setState({
       vname1:snap.val()
       
      });
      console.log(this.state.name)
    });
    vnutrients1Ref.on('value', snap =>{
      this.setState({
        vnutrients1:snap.val()
      });
    });
      vingr1Ref.on('value', snap =>{
        this.setState({
         vingr1:snap.val()
     });
    });
    
    vprep1Ref.on('value', snap =>{
       this.setState({
         vprep1:snap.val()
      });
    });

    const vname2Ref = rootRef.child('Veg/Breakfast/Recipe2/name');
    const vnutrients2Ref = rootRef.child('Veg/Breakfast/Recipe2/nutrient');
    const vingr2Ref = rootRef.child('Veg/Breakfast/Recipe2/ingr');
    const vprep2Ref = rootRef.child('Veg/Breakfast/Recipe2/prep');
    vname2Ref.on('value', snap =>{
     this.setState({
       vname2:snap.val()
       
      });
      console.log(this.state.name)
    });
    vnutrients2Ref.on('value', snap =>{
      this.setState({
        vnutrients2:snap.val()
      });
    });
      vingr2Ref.on('value', snap =>{
        this.setState({
        vingr2:snap.val()
     });
    });
    
    vprep2Ref.on('value', snap =>{
       this.setState({
         vprep2:snap.val()
      });
    });

    const vname3Ref = rootRef.child('Veg/Breakfast/Recipe3/name');
    const vnutrients3Ref = rootRef.child('Veg/Breakfast/Recipe3/nutrient');
    const vingr3Ref = rootRef.child('Veg/Breakfast/Recipe3/ingr');
    const vprep3Ref = rootRef.child('Veg/Breakfast/Recipe3/prep');
    vname3Ref.on('value', snap =>{
     this.setState({
       vname3:snap.val()
       
      });
      console.log(this.state.name)
    });
    vnutrients3Ref.on('value', snap =>{
      this.setState({
        vnutrients3:snap.val()
      });
    });
      vingr3Ref.on('value', snap =>{
        this.setState({
         vingr3:snap.val()
     });
    });
    
    vprep3Ref.on('value', snap =>{
       this.setState({
         vprep3:snap.val()
      });
    });

    
    const nvdescRef = rootRef.child('NVeg/desc')
    const nvname1Ref = rootRef.child('NVeg/Breakfast/Recipe1/name');
    const nvnutrients1Ref = rootRef.child('NVeg/Breakfast/Recipe1/nutrient');
    const nvingr1Ref = rootRef.child('NVeg/Breakfast/Recipe1/ingr');
    const nvprep1Ref = rootRef.child('NVeg/Breakfast/Recipe1/prep');

    nvdescRef.on('value', snap =>{
      this.setState({
        nvdesc:snap.val()
        
       });
      });
    nvname1Ref.on('value', snap =>{
     this.setState({
       nvname1:snap.val()
       
      });
      console.log(this.state.name)
    });
    nvnutrients1Ref.on('value', snap =>{
      this.setState({
        nvnutrients1:snap.val()
      });
    });
      nvingr1Ref.on('value', snap =>{
        this.setState({
         nvingr1:snap.val()
     });
    });
    
    nvprep1Ref.on('value', snap =>{
       this.setState({
         nvprep1:snap.val()
      });
    });

    const nvname2Ref = rootRef.child('NVeg/Breakfast/Recipe2/name');
    const nvnutrients2Ref = rootRef.child('NVeg/Breakfast/Recipe2/nutrient');
    const nvingr2Ref = rootRef.child('NVeg/Breakfast/Recipe2/ingr');
    const nvprep2Ref = rootRef.child('NVeg/Breakfast/Recipe2/prep');
    nvname2Ref.on('value', snap =>{
     this.setState({
       nvname2:snap.val()
       
      });
      console.log(this.state.name)
    });
    nvnutrients2Ref.on('value', snap =>{
      this.setState({
        vnutrients2:snap.val()
      });
    });
      nvingr2Ref.on('value', snap =>{
        this.setState({
        nvingr2:snap.val()
     });
    });
    
    nvprep2Ref.on('value', snap =>{
       this.setState({
         nvprep2:snap.val()
      });
    });

    const nvname3Ref = rootRef.child('NVeg/Breakfast/Recipe3/name');
    const nvnutrients3Ref = rootRef.child('NVeg/Breakfast/Recipe3/nutrient');
    const nvingr3Ref = rootRef.child('NVeg/Breakfast/Recipe3/ingr');
    const nvprep3Ref = rootRef.child('NVeg/Breakfast/Recipe3/prep');
    nvname3Ref.on('value', snap =>{
     this.setState({
       nvname3:snap.val()
       
      });
      console.log(this.state.name)
    });
    nvnutrients3Ref.on('value', snap =>{
      this.setState({
        nvnutrients3:snap.val()
      });
    });
      nvingr3Ref.on('value', snap =>{
        this.setState({
         nvingr3:snap.val()
     });
    });
    
    nvprep3Ref.on('value', snap =>{
       this.setState({
         nvprep3:snap.val()
      });
    });

    const kdescRef = rootRef.child('Keto/desc')
    const kname1Ref = rootRef.child('Keto/Breakfast/Recipe1/name');
    const knutrients1Ref = rootRef.child('Keto/Breakfast/Recipe1/nutrient');
    const kingr1Ref = rootRef.child('Keto/Breakfast/Recipe1/ingr');
    const kprep1Ref = rootRef.child('Keto/Breakfast/Recipe1/prep');

    kdescRef.on('value', snap =>{
      this.setState({
        kdesc:snap.val()
        
       });
      });
    kname1Ref.on('value', snap =>{
     this.setState({
       kname1:snap.val()
       
      });
      console.log(this.state.name)
    });
    knutrients1Ref.on('value', snap =>{
      this.setState({
        knutrients1:snap.val()
      });
    });
      kingr1Ref.on('value', snap =>{
        this.setState({
         kingr1:snap.val()
     });
    });
    
    kprep1Ref.on('value', snap =>{
       this.setState({
         kprep1:snap.val()
      });
    });

    const kname2Ref = rootRef.child('Keto/Breakfast/Recipe2/name');
    const knutrients2Ref = rootRef.child('Keto/Breakfast/Recipe2/nutrient');
    const kingr2Ref = rootRef.child('Keto/Breakfast/Recipe2/ingr');
    const kprep2Ref = rootRef.child('Keto/Breakfast/Recipe2/prep');
    kname2Ref.on('value', snap =>{
     this.setState({
       kname2:snap.val()
       
      });
      console.log(this.state.name)
    });
    knutrients2Ref.on('value', snap =>{
      this.setState({
        vnutrients2:snap.val()
      });
    });
      kingr2Ref.on('value', snap =>{
        this.setState({
        kingr2:snap.val()
     });
    });
    
    kprep2Ref.on('value', snap =>{
       this.setState({
         kprep2:snap.val()
      });
    });

    const kname3Ref = rootRef.child('Keto/Breakfast/Recipe3/name');
    const knutrients3Ref = rootRef.child('Keto/Breakfast/Recipe3/nutrient');
    const kingr3Ref = rootRef.child('Keto/Breakfast/Recipe3/ingr');
    const kprep3Ref = rootRef.child('Keto/Breakfast/Recipe3/prep');
    kname3Ref.on('value', snap =>{
     this.setState({
       kname3:snap.val()
       
      });
      console.log(this.state.name)
    });
    knutrients3Ref.on('value', snap =>{
      this.setState({
        knutrients3:snap.val()
      });
    });
      kingr3Ref.on('value', snap =>{
        this.setState({
         kingr3:snap.val()
     });
    });
    
    kprep3Ref.on('value', snap =>{
       this.setState({
         kprep3:snap.val()
      });
    });
  }

/*
*/

  render() {

    const { classes, theme } = this.props;

    return (

      <Fragment>

      <ABar />
      <div >
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="Vegetarian" />
            <Tab label="Non-Vegetarian" />
            <Tab label="Keto Diet" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          
        >
          <TabContainer centered dir={theme.direction}>
          
          <Paper>
          <div className="App">
          <Typography variant="headline" gutterBottom>{this.state.vdesc}</Typography>
          <h1> RECIPE 1</h1>
          <h1> NAME</h1>
          <Typography variant="title" gutterBottom>{this.state.vname1}</Typography>
          
          <h1> Nutrients</h1>
          <Typography variant="title" gutterBottom >{this.state.vnutrients1}</Typography>
          
          <h1> INGREDIENTS</h1>
          <Typography variant="title" gutterBottom >{this.state.vingr1}</Typography>
          
          <h1> PREPARATION</h1>
          <Typography variant="title" gutterBottom >{this.state.vprep1}</Typography>
          </div>


          <div className="App">
          <h1> RECIPE 2</h1>
          <h1> NAME</h1>
          <Typography variant="title" gutterBottom>{this.state.vname2}</Typography>
          
          <h1> Nutrients</h1>
          <Typography variant="title" gutterBottom >{this.state.vnutrients2}</Typography>
          
          <h1> INGREDIENTS</h1>
          <Typography variant="title" gutterBottom >{this.state.vingr2}</Typography>
          
          <h1> PREPARATION</h1>
          <Typography variant="title" gutterBottom >{this.state.vprep2}</Typography>
          </div>

          <div className="App">
          <h1> RECIPE 3</h1>
          <h1> NAME</h1>
          <Typography variant="title" gutterBottom>{this.state.vname3}</Typography>
          
          <h1> Nutrients</h1>
          <Typography variant="title" gutterBottom >{this.state.vnutrients3}</Typography>
          
          <h1> INGREDIENTS</h1>
          <Typography variant="title" gutterBottom >{this.state.vingr3}</Typography>
          
          <h1> PREPARATION</h1>
          <Typography variant="title" gutterBottom >{this.state.vprep3}</Typography>
          </div>
          </Paper>
          
          </TabContainer>
          <TabContainer centered dir={theme.direction}>
          <Paper>
          <div className="App">
          <Typography variant="headline" gutterBottom>{this.state.nvdesc}</Typography>
          <h1> RECIPE 1</h1>
          <h1> NAME</h1>
          <Typography variant="title" gutterBottom>{this.state.nvname1}</Typography>
          
          <h1> Nutrients</h1>
          <Typography variant="title" gutterBottom >{this.state.nvnutrients1}</Typography>
          
          <h1> INGREDIENTS</h1>
          <Typography variant="title" gutterBottom >{this.state.nvingr1}</Typography>
          
          <h1> PREPARATION</h1>
          <Typography variant="title" gutterBottom >{this.state.nvprep1}</Typography>
          </div>


          <div className="App">
          <h1> RECIPE 2</h1>
          <h1> NAME</h1>
          <Typography variant="title" gutterBottom>{this.state.nvname2}</Typography>
          
          <h1> Nutrients</h1>
          <Typography variant="title" gutterBottom >{this.state.nvnutrients2}</Typography>
          
          <h1> INGREDIENTS</h1>
          <Typography variant="title" gutterBottom >{this.state.nvingr2}</Typography>
          
          <h1> PREPARATION</h1>
          <Typography variant="title" gutterBottom >{this.state.nvprep2}</Typography>
          </div>

          <div className="App">
          <h1> RECIPE 3</h1>
          <h1> NAME</h1>
          <Typography variant="title" gutterBottom>{this.state.nvname3}</Typography>
          
          <h1> Nutrients</h1>
          <Typography variant="title" gutterBottom >{this.state.nvnutrients3}</Typography>
          
          <h1> INGREDIENTS</h1>
          <Typography variant="title" gutterBottom >{this.state.nvingr3}</Typography>
          
          <h1> PREPARATION</h1>
          <Typography variant="title" gutterBottom >{this.state.nvprep3}</Typography>
          </div>
          </Paper>
          </TabContainer>
          <TabContainer centered dir={theme.direction}>
          <Paper>
          <div className="App">
          <Typography variant="headline" gutterBottom>{this.state.kdesc}</Typography>
          <h1> RECIPE 1</h1>
          <h1> NAME</h1>
          <Typography variant="title" gutterBottom>{this.state.kname1}</Typography>
          
          <h1> Nutrients</h1>
          <Typography variant="title" gutterBottom >{this.state.knutrients1}</Typography>
          
          <h1> INGREDIENTS</h1>
          <Typography variant="title" gutterBottom >{this.state.kingr1}</Typography>
          
          <h1> PREPARATION</h1>
          <Typography variant="title" gutterBottom >{this.state.kprep1}</Typography>
          </div>


          <div className="App">
          <h1> RECIPE 2</h1>
          <h1> NAME</h1>
          <Typography variant="title" gutterBottom>{this.state.kname2}</Typography>
          
          <h1> Nutrients</h1>
          <Typography variant="title" gutterBottom >{this.state.knutrients2}</Typography>
          
          <h1> INGREDIENTS</h1>
          <Typography variant="title" gutterBottom >{this.state.kingr2}</Typography>
          
          <h1> PREPARATION</h1>
          <Typography variant="title" gutterBottom >{this.state.kprep2}</Typography>
          </div>

          <div className="App">
          <h1> RECIPE 3</h1>
          <h1> NAME</h1>
          <Typography variant="title" gutterBottom>{this.state.kname3}</Typography>
          
          <h1> Nutrients</h1>
          <Typography variant="title" gutterBottom >{this.state.knutrients3}</Typography>
          
          <h1> INGREDIENTS</h1>
          <Typography variant="title" gutterBottom >{this.state.kingr3}</Typography>
          
          <h1> PREPARATION</h1>
          <Typography variant="title" gutterBottom >{this.state.kprep3}</Typography>
          </div>
          </Paper>
          
          </TabContainer>
        </SwipeableViews>
      </div>
      <div>
      <Paper>
      <div>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
          videos={this.state.videos} />
          </div>
        </Paper>
      </div>

    </Fragment>
      
     ) }
} 

Diet.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Diet);