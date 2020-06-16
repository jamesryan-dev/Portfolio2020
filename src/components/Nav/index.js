import React from 'react'
import styled from 'styled-components'
// import Draggable from 'react-draggable'
import logo from './../../gif/jn.gif'
import Link from 'gatsby-link'

const NavComp = styled.section`
  width: 20%;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 693px) {
    width: 100%;
    padding: 0.75em;
    position: relative;
  }
  @media (max-width: 414px) {
  }
`

const Logo = styled.img`
  width: 100%;
  padding-top: 1.25rem;
  margin: 0;
  @media (max-width: 693px) {
    padding-top: 0;
    width: 50%;
    margin: 0 auto;
  }
`

const PaddingMobile = styled.div`
  height: 100%;
@media (max-width: 414px) {
  box-sizing: border-box;
}
`

const NavMenu = styled.ul`
  text-decoration: none;
  width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: 693px) {  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.white};
  }
`

const NavItem = styled.li`
  font-size: 18px;
  padding: 0.666em;
  font-family: 'Open Sans Condensed', Helvetica;
  list-style-type: none;
  text-decoration: none;
  text-align: left;
  margin: 1.5em 0;
  /* linear-gradient(to right, transparent, red 50%, transparent 90%, transparent) */
  background-image: linear-gradient(to right,
                                      blue,
                                      blue 50%,
                                      transparent 80%,
                                      transparent);
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all .2s ease-in;
    width: 100%;
  a {
    text-decoration: none;
  }
  @media (max-width: 693px) {
    padding: 0.1333em;
    margin: 0;
  }

  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
  }
  &:hover {
   padding-left: 1em;
   color: ${props => props.theme.black};
   background-position: 0 0;
    a {
      color: ${props => props.theme.black};
    }
     &:before {
     visibility: visible;
     -webkit-transform: scaleX(1);
     transform: scaleX(1);
    }
  }

  @-webkit-keyframes Gradient {
    0% {background-position: 0% 50%}
    50% {background-position: 100% 50%}
    100% {background-position: 0% 50%}
  }

  @-moz-keyframes Gradient {
    0% {background-position: 0% 50% }
    50% {background-position: 100% 50% }
    100% {background-position: 0% 50% }
  }

  @keyframes Gradient {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`

const Emoji = styled.div`



.kitty-switch {
width: auto;
display: block;
position: relative;
margin: 30px 0px 20px 0px;
}
.kitty-switch .prompt {
display: inline-block;
margin-top: 10px;
}
.kitty-switch .well {
background: white;
height: 20px;
width: 65px;
position: absolute;
right: 50px;
top: 7px;
border-radius: 10px;
box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.1);
border: 1px solid #a5d4e4;
cursor: pointer;
}
.kitty-switch #toggle {
opacity: 0;
border: none;
border-radius: 0;
outline: none;
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
height: 29px;
width: 140px;
background: transparent;
position: absolute;
right: 0px;
top: 3px;
cursor: pointer;
z-index: 100;
color: tranparent;
}
.kitty-switch #toggle:after {
content: '';
background-color: transparent;
height: 40px;
width: 80px;
position: absolute;
left: 30px;
top: -5px;
}
.kitty-switch #toggle ~ div.kitty:before {
content: "\01F431";
position: absolute;
right: 80px;
top: -10px;
font-size: 45px;
z-index: 1;
color: #53adcb;
-moz-transition: all 0.25s ease-out;
-webkit-transition: all 0.25s ease-out;
-o-transition: all 0.25s ease-out;
transition: all 0.25s ease-out;
}
.kitty-switch #toggle:checked {
right: 0px;
}
.kitty-switch #toggle:checked:after {
left: -80px;
}
.kitty-switch #toggle:checked ~ div.kitty:before {
content: '\01F63A';
top: -10px;
right: 41px;
}
.kitty-switch #toggle:checked ~ div.visible {
opacity: 1;
max-height: 900px;
overflow: visible;
}
.kitty-switch #toggle ~ label:before {
content: "No";
position: absolute;
color: #53adcb;
left: -30px;
top: 0px;
font-size: 16px;
}
.kitty-switch #toggle ~ label:after {
content: "Yes";
position: absolute;
color: #bbbbbb;
left: 83px;
top: 0px;
font-size: 16px;
}
.kitty-switch #toggle:checked ~ label:before {
color: #bbbbbb;
}
.kitty-switch #toggle:checked ~ label:after {
color: #53adcb;
}
`

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shouldHide: false
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick () {
    this.setState(prevState => ({
      shouldHide: !prevState.shouldHide
    }))
  }
  render () {
    return (
      <NavComp className='Nav'>
        <PaddingMobile>
          <Link to='/' exact><Logo src={logo} /></Link>

          <NavMenu className='Menu'>
            <Link to='/about/'><NavItem>About.i</NavItem></Link>
            <Link to='/me/'><NavItem>Me.href</NavItem></Link>
            <Link to='/mycomputer/'><NavItem>Projects</NavItem></Link>
            <a onClick={this.onClick}><NavItem>Cv.dmg</NavItem></a>

            <Emoji>
              <div className="kitty-switch">
                <input type="checkbox" id="toggle" tabindex="1"></input>
                <div className="kitty"></div>
                <label for="toggle" className="well"></label>
              </div>
            </Emoji>

          </NavMenu>
        </PaddingMobile>
      </NavComp>

    )
  }
}
