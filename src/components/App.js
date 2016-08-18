import React, { Component } from 'react'
import {
	Router,
	Route,
	Link,
	IndexRoute,
	browserHistory,
	hashHistory,
	Redirect,
	withRouter
} from 'react-router'

const Links = ()=>
    <nav>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/about'>About</Link></div>
        <div><Link to='/search'>Search</Link></div>
    </nav>


const Home = (props)=> <div><h1>Home</h1>{props.children}</div>
const Search = ()=> <div><h1>Search</h1></div>
const About = (props)=> <div><h1>About</h1>{props.children}</div>
const All = (props)=> <div><h1><Links/></h1>{props.children}</div>
export default class App extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={All}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path='/about' component={About}></Route>
                    <Route path='/search' component={Search}></Route>

                </Route>


            </Router>
        )

    }
}
