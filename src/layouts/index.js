import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import Nav from './../components/Nav'
import DownloadComp from './../components/Download'
import SmallFolderComp from './../components/SmallFolder'

import logo from './../gif/jn.gif'
import logo2 from './../images/logo.svg'
import Link from 'gatsby-link'
import ay1 from './../images/projects/auralyouth/ay1.png'
import {UL} from './../components/HTML/UL'
import {LI} from './../components/HTML/LI'

import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './animations.css'

require('normalize.css')

const nightMode = {
  label: 'nightMode',
  black: 'black',
  white: 'white',
  blue: 'blue'
}

const lightMode = {
  label: 'lightMode',
  black: 'white',
  white: 'black',
  blue: 'blue'
}

const WrapLayout = styled.div`
  max-width: 1200px;
  ${'' /* max-height: 750px; */}
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 693px) {
    flex-direction: column;
  }

  @media (min-width: ) {
    min-width: 1200px;
  }
`

const TransitionContainer = styled.div`
  width: 100%;
  left: 20%;
  @media (max-width: 693px) {
    width: 100%;
    left: 0;
    height: auto;
  }

  @media (min-width: 1295px) {
    max-width: 1000px;
    width: 100%;
    left: 35%;
  }
`

const PageRender = styled.div`
  width: auto;
  overflow: scroll;
  height: 85%;
  box-sizing: border-box;
  padding: 1.35rem;
  /* padding-left: 4rem; */
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  /* overflow-y: scroll; */
  background: ${props => props.theme.black};
  @media (max-width: 693px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
`

injectGlobal`

@font-face {
font-family: 'Mughal';
font-style: normal;
src: local('Mughal'),
      url('../static/fonts/Mughal.otf')
}

@font-face {
font-family: 'Arch';
font-style: normal;
src: local('Russell-Square-Regular'),
      url('../static/fonts/Russell Square Regular.ttf')
}
  html {
    background: black;
  }
  body {
    font-family: sans-serif;
    background: black;
    ${'' /* background: ${nightMode.black}; */}
  }
  * {
    transition: all 0.5s ease-in-out;
    cursor:crosshair;
  }
  h1, h2, h3, h4, h5, p, a, ul, li {
    font-family: sans-serif;
    transition: color 0.3s ease-in-out;
    ${'' /* color: ${nightMode.blue}; */}
  }

  #___gatsby {
    ${'' /* height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center; */}
  }

  @keyframes blinker {
  50% { opacity: 0; }
}
`

// import Global from './../components/Global'

// import { Children } from 'react';
// import { withTheme, injectGlobal } from 'styled-components';
//
// const Global = ({ theme, children }) => {
//   injectGlobal`
//     body {
//       background: ${({theme}) => theme.black};
//       background: ${props => props.theme.white};
//     }
//     h1, h2, h3, h4, h5, p, a, ul, li {
//       font-family: 'Open Sans Condensed', sans-serif;
//       color: ${props => props.theme.white};
//     }
//   `;
//   return Children.only(children);
// };

// export default withTheme(Global);

//* NAV */

const NavComp = styled.section`
  width: 100%;
  padding: 1rem 2.1rem;
  max-width: 1200px;
  max-width: 1150px;
  margin: 0 auto;
  height: 50px;
  z-index: 666;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 0;
  background: red !@important;

  /* background: ${props => props.theme.black}; */
  overflow: hidden;
  @media (max-width: 693px) {
    width: 100%;
    padding: 0.75em;
    position: relative;
  }
  @media (max-width: 414px) {
  }

  a {
    display: block;
  }
`

const Logo = styled.img`
  /* width: 100%; */
  height: 100%;
  object-fit: contain;
  margin: 0;
  max-width: 136px;
  display: inherit !important;
  user-select: none;
  pointer-events: none;
  &:hover {
    cursor: alias;
  }
  @media (max-width: 693px) {
    /* padding-top: 0;
    width: 50%;
    margin: 0 auto; */
  }
`

const LogoContainer = styled.div`
  width: 12%;
  display: flex;
  align-items: center;
  a{
    display: inherit !important;
  }
  @media (max-width: 693px) {
    /* padding-top: 0;
    width: 50%;
    margin: 0 auto; */
  }
`


const PaddingMobile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

@media (max-width: 414px) {
  box-sizing: border-box;
}
`

const NavMenu = styled(UL)`
  text-decoration: none;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  user-select: none;
  @media (max-width: 693px) {  }

  a {
    text-decoration: none;
  }

  a:hover {
    /* color: ${props => props.theme.white}; */
  }
  .blink {
    &:hover {
        animation: blinker 1s linear infinite;
    }
  }


`

const NavItem = styled(LI)`
    transition: all .2s ease-in;
    list-style: none;
    margin-left: 1.6rem;
    user-select: none;
    display: flex;
    align-items: center;
  a {
    text-decoration: none;
    color: ${props => props.theme.white} !important;
  }
  @media (max-width: 693px) {}

  &:hover,
  &:visited,
  &:focus {
    text-decoration: none;
  }
  &:hover {
   color: ${props => props.theme.white};
    a {
      color: ${props => props.theme.black};
    }
     &:before {
     visibility: visible;
    }
  }

  &:hover {
    .folder-holder {
      img {
          top: 2px;
          &:nth-child(2) {
            // border: 1px solid blue;
          }
        }

       p {
         color: ${props => props.theme.blue};
       }

       div {
         top: 26px !important;
         top: 5px !important;
         transform: rotateX( -25deg);
         // box-shadow: 0 7px 5px -2px blue;
       }
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

export default class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDark: true,
      theme: nightMode,
      shouldHide: false
    }
    this.handlePopUp = this.handlePopUp.bind(this)
  }
  static propTypes = {
   children: PropTypes.func,
 }

  handlePopUp () {
    this.setState(prevState => ({
      shouldHide: !prevState.shouldHide
    }))
  }
  HandleColorChange () {
    // Toggle day / night on click
    const isDark = !this.state.isDark

    this.setState({
      isDark: isDark,
      theme: isDark ? nightMode : lightMode
    })
  }
  render () {
    // uncomment at end
    //document.addEventListener('contextmenu', event => event.preventDefault());
    // const { children, location } = this.props
    return (
      <div>
      {/* <a onClick={this.onClick}>CLick</a> */}
      <ThemeProvider className='Theme' theme={this.state.theme}>
        <WrapLayout className='Nav-PageRender-Flex-Container Also-Wrap'>
    			<Helmet
    	      title='jimmyNames'
    	      meta={[
    	        { name: 'description', content: 'Jimmy Names' },
    	        { name: 'keywords', content: 'jimmy names, jimmyNames' },
    	      ]}
    	    />
        	{/* <Nav /> */}
          <NavComp className='Nav'>
            <PaddingMobile>
            <LogoContainer>
              <Link to='/' exact><Logo src={logo2} /></Link>
              </LogoContainer>

              <NavMenu className='Menu'>
                <Link to='/about/'>
                  <NavItem>
                    <SmallFolderComp projectTitle='' info='' projectLink='/about/' src={ay1} src2x='' />
                    About.i
                  </NavItem>
                </Link>

                <Link to='/me/'>
                  <NavItem>
                    <SmallFolderComp projectTitle='' info='' projectLink='/about/' src={ay1} src2x='' />
                    Me.href
                  </NavItem>
                </Link>

                <Link to='/404/'>
                  <NavItem className='blink'>
                    <SmallFolderComp projectTitle='' info='' projectLink='/404/' src={ay1} src2x='' />
                    Click here for free work
                  </NavItem>
                </Link>

              </NavMenu>

            </PaddingMobile>
          </NavComp>
    		    			<PageRender id='page-wrap' className='PageRender'>
    		      			 {this.props.children()}
    		    			</PageRender>
      	</WrapLayout>
      </ThemeProvider>
      </div>
    )
  }
}



const Emoji = styled.div`

width: 100%;
min-height: 60px;
height: auto;

.kitty-switch {
width: auto;
width: 100%;
display: block;
position: relative;
}
.kitty-switch .prompt {
display: inline-block;
margin-top: 10px;
}
.kitty-switch .well {
background: ${props => props.theme.black};
height: 20px;
width: 65px;
position: absolute;
right: 90px;
top: 7px;
border-radius: 10px;
box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.1);
border: 2px solid ${props => props.theme.blue};
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
width: 100%;
background: transparent;
position: absolute;
left: 0px;
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
${'' /* content: "⚫️"; */}
content: '👽';
position: absolute;
right: 133.666px;
top: 11px;
font-size: 17px;
z-index: 1;
transition: all 1s ease-out;
}
.kitty-switch #toggle:checked {
right: 0px;
}
.kitty-switch #toggle:checked:after {
left: -80px;
}
.kitty-switch #toggle:checked ~ div.kitty:before {
  ${'' /* content: '⚪️'; */}
  content: '👔';
  top: 11px;
  right: 88px;
}
.kitty-switch #toggle:checked ~ div.visible {
opacity: 1;
max-height: 900px;
overflow: visible;
}
`

const DownloadPopup = styled.div`
  height: 333px;
  width: 333px;
  background: ${props => props.theme.black};
  position: fixed;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.blue};
  font-size: 4em;
  align-items: center;
  top: 33.3%;
  left: 25%;
  z-index: 666;
  border: 2px solid ${props => props.theme.white};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  height: ${props => props.visible ? null : '0px'};
  width: ${props => props.visible ? null : '0px'};
  transform: ${props => props.visible ? null : 'scale(0, 0) rotate(180deg)'};
  transform-origin: top right;
`
