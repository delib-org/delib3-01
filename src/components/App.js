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
import css from './App.css'
const Links = ()=>
    <nav className={css.navbar}>
        <div className={css.nav_button}><Link className={css.href} to='/'>Home</Link></div>
        <div className={css.nav_button}><Link className={css.href} to='/about'>About</Link></div>
        <div className={css.nav_button}><Link className={css.href} to='/search'>Search</Link></div>
    </nav>

const Footer = ()=>
    <footer className={css.footer}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </footer>



const All = (props)=>
    <div className={css.all}>
        <div>

        <Links/>
        </div>
        <div className={css.wrapper}>{props.children}</div>
        <Footer/>
    </div>

const Home = ()=> <div><h1>Home</h1></div>
const Search = ()=> <div><h1>Search</h1></div>
const About = ()=> <div><h1>About</h1></div>

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
