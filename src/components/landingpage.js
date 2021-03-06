import React, {Component} from 'react';
import logo from '../images/profile.png';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
render(){
    return(
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={12}>
            <img 
            src={logo} 
            alt="avatar"
            className="avatar-img"/>
            <div className="banner-text">
                <h1>Software developer junior</h1>
            <hr/>
            <p>Android Studio | C# | JavaScript | React | Java | NodeJS | MongoDB</p>
            <div className="social-links">
             {/*LinkedIn */}
            <a href="https://www.linkedin.com/in/thain%C3%A1-braz/" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
            </a>
            {/*Github */}
             <a href="https://github.com/thainabbraz" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true"/>
            </a>
            </div>
            </div>

            </Cell>
        </Grid>
        </div>
        )
    }
 }
export default Landing;
