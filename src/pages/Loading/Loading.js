import React, { Component } from 'react'
import './Loading.css'
import Logo from './SideBite-Logo.png'

class Loading extends Component {
    render() {
        return (
            <div className='loading-page-container'>
                <div className='logo-container'>
                    <img className='logo' src={Logo} alt='logo'/>
                </div>
            </div>
        )
    }
}

export default Loading