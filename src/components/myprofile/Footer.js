import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Firebase from '../../firebase';
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from './Button'

Firebase;



var user = firebase.auth().currentUser;

//var user = firebase.auth().currentUser;


const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // error: will use the default color
    },
  },
});

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    fontsize: 25,
    marginLeft: theme.spacing.unit*30
    ,
    marginRight: theme.spacing.unit*15,
    marginTop: theme.spacing.unit*5,
    width: 300,
  },
  menu: {
    width: 300,
  },
  
});

const Genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
 
];

//const userReducer = modelReducer('user', initialUser);

class TextFields extends React.Component {
/*
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
*/

  state = {
    name: '',
    age: '',
    Number:'',
    Gender: ' ',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      
    });
  };
  

  render() {
    firebase.auth().onAuthStateChanged(function(user) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      if (user) {
        console.log({user})
        user.providerData.forEach(function () {
          console.log("Sign-in provider: " + user.providerId);
          console.log("  Provider-specific UID: " + user.uid);
          console.log("  Name: " + user.displayName);
          console.log("  Email: " + user.email);
          console.log("  Photo URL: " + user.photoURL);
        });
      } 
    });
    const { classes } = this.props;

    return (
      <Fragment>
        <Paper>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
         <TextField
          id="Username"
          label="Username"
          defaultValue=" "
          className={classes.textField}
          margin="normal"
        />

         <TextField
          id="Email id"
          label="Email id"
          defaultValue=" "
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="select-Gender"
          select
          label="Please select your gender"
          className={classes.textField}
          value={this.state.Gender}
          onChange={this.handleChange('Gender')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
                >
          {Genders.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

         <TextField
          id="Age"
          label="Age"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
         <TextField
          id=" Mobile number"
          label=" Mobile Number"
          value={this.state.Number}
          onChange={this.handleChange('Number')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          Enter your weight
          id=" Enter your weight* "
          label="Enter your weight(in kg)* "
          defaultValue= " "
          className={classes.textField}
          margin="normal"
        />
         <TextField
          Enter your Height
          id="Enter your Height*"
          label="Enter your Height(in meter)*"
          defaultValue=" "
          className={classes.textField}
          margin="normal"
        />
          </form>
          < Button />
          </Paper>
          <div>
            
          </div>
          </Fragment>
          
    );
  }
}

 
  
TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);


/*<Paper>
        <Tabs
          value = {0}  
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        </Tabs>
    </Paper>*/