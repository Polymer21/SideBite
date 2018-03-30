import React, { Component } from 'react'
import {BrowserRouter as Router, Redirect, Link} from 'react-router-dom'
import './Home.css' 
import Bite from './Bite.png'
import In from './In.png'
import Unique from './Uniquely.png'
import Logo from './SideBite-Logo.png'
import Passion from '../Passion/Passion'

// const handleClick = withRouter(({ history }) => {
//     console.log('CLICK'),
//     // <Route to='/passion'/>
//     onClick=() =>  { history.push('/passion') }}
// )

class Home extends Component {

    state = {
        isClicked: false
    }

    handleClick= () => {
        this.setState({
            isClicked: true})
        console.log(this.state) 
    }

    render() {

        if (this.state.isClicked === true) {
            <Redirect push to='/passion'/>
        }

        return (
            <div className='home-container'>
                 <img src={Logo} className='home-logo'/>
                 <img src={Bite} className='bite'/>
                 <img src={In} className='in'/>
                 <Link path to='/passion' className='about'>
                    {/* <div className='about' onClick={this.handleClick}>
                    </div> */}
                </Link>
                     <p className='about-words'>What's SideBite Passionate about?</p>
                 <div className='unique'>
                     Uniquely
                 </div>
            </div>
        )
    }
}

export default Home