import React from 'react'
import styled from 'styled-components'
import { Wrap } from './../components/Wrap'

import notfoundgif from './../gif/notfound.gif'

const Four = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: black;
  @supports (-webkit-text-stroke: 1px black) {
  h1 {
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: black;
  }
}
`

const Oh = styled.h1`
  font-size: 166.6px;
  color: white;
  font-family: sans-serif;
  transition: all 0.666s ease-in;
  transition-delay: 0.15s;
  &:hover {
    -webkit-text-fill-color: white;
    transition-delay: 0.2s;
  }
`

const John = styled.img`
  position: absolute;
  bottom: 0;
  right: 5%;

  @media only screen and (max-width: 898px) {
    right: 0;
    width: 80%;
  }
`

const FourOhFour2 = styled.div`
display: flex;

  @media only screen and (max-width: 898px) {
    right: 0;
    width: 100%;
    h1 {
      font-size: 136.666px;
      margin-top: 10px;
      margin-bottom: 10px;
      -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    }
  }
`



export default class FourOhFour extends React.Component {
  render () {
    return (
      <Four>
        <Wrap>
        <FourOhFour2>
          <Oh>4</Oh>
          <Oh>0</Oh>
          <Oh>4</Oh>
        </FourOhFour2>
          <John src={notfoundgif} alt='OhNo' />
        </Wrap>
      </Four>
    )
  }
}
