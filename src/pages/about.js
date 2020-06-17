import React from 'react'
import styled from 'styled-components'

import {H1} from './../components/HTML/H1'
import {H2} from './../components/HTML/H2'
import {H3} from './../components/HTML/H3'
import {H4} from './../components/HTML/H4'
import {A} from './../components/HTML/A'

import {HoverAdjustments} from './../components/HoverAdjustments'

import CubeComp from './../components/Cube'
import ThreeD from './../components/ThreeJs'

import logo from './../images/logo.png'

const Page = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const AboutContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 60%;
  flex: 1;
  * {
    user-select: none;
  }
`

const H3about = styled(H3)`
  margin: 0;
  margin-right: ${props => props.about ? '0.3em' : null};
`

const H1about = styled(H1)`
  margin-top: 0;
  font-size: 40px;
`

const H2about = styled(H2)`
  i {
    padding-right: 5px;
    color: ${props => props.theme.white};
    font-size: 26px;
    transition: all .666s ease;
    &:hover {
      background: -webkit-linear-gradient(#eee, #333);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
    }
  }
`

const H4about = styled(H4)`
`

const Aabout = styled(A)`

`

const VerticalCenterAlign = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  -webkit-margin-before: 0.83em;
  -webkit-margin-after: 0.83em;
  position: relative;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    color: ${props => props.theme.white};
    ${({theme}) => HoverAdjustments(theme)}
    border: 2px solid ${props => props.theme.black};
    padding-right: 2px;
    transition: all 0.3s ease-in-out;
    img {
      padding-right: 3px;
    }
    @media (max-width: 414px) {
    }
    &:hover {
      background: ${props => props.theme.blue};
      border: 2px solid ${props => props.theme.blue};
    }
  }

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
  }

`

const RuinLogo = styled.img`
  height: 30px;
  margin: 0;
`

const Canvas = styled.div`
height: 100% !important;
width: 50% !important;
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
              <ThreeD />
        <AboutContainer>
          <H1about>hello_world</H1about>
          <H2about>iCreate under the alias of 👽<i className='large'>names</i>👔</H2about>
          <VerticalCenterAlign about><H3about about>I'm a Front-end Web Developer & Designer</H3about></VerticalCenterAlign>
          <H4about>I fuck with Css-in-js/Sass/Vanilla Css™, React.js⚛️ & SVGs💖</H4about>
          <CubeComp />
        </AboutContainer>
        <Canvas id="canvas"></Canvas>
      </Page>
    )
  }
}
