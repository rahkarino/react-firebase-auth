import React from 'react'
const Hero = (props) => {
    return (<section className="hero"><h1>Welcome to user panel !</h1><button onClick={props.handleLogout}>Log out</button></section>)
}
export default Hero