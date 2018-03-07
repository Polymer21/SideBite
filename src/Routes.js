import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Loading from './pages/Loading/Loading'
import Passion from './pages/Passion/Passion'



class Routes extends Component {
    render() {
        return (
            <main>
                <Router>
                    <div>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/loading' component={Loading}/>
                        <Route path='/passion' component={Passion}/>
                    </div> 
                </Router>
            </main>
        )
    }
}

export default Routes
