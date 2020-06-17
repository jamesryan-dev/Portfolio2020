import React from 'react'
import styled from 'styled-components'

import SlideshowComp from './../components/Slider'
import DraggableComp from './../components/Draggable'
import chains from './../gif/chains.gif'
import chess from './../gif/chess.gif'
import dove from './../gif/dove.gif'
import gang from './../gif/gang.gif'
import heart from './../gif/heart.gif'
import ice from './../gif/ice.gif'
import newgif from './../gif/new.gif'
import omni from './../gif/omni.gif'
import ying from './../gif/yin.gif'
import yang from './../gif/yang.gif'
import para from './../gif/para.gif'
import skel from './../gif/skel.gif'

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  @media (max-width: 616px ) {
    height: 75vh;
  }
`

const DraggableContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index: 0;
  div {
    padding: 1em;
  }

  img {
    user-select: none;
  }

  .heart {
    z-index: 1;
  }
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <SlideshowComp />
        <DraggableContainer>
          <DraggableComp src={chains} zIndex='3' />
          <DraggableComp src={chess} zIndex='1' />
          <DraggableComp src={ying} zIndex='2' />
          <DraggableComp src={yang} zIndex='2' />
        </DraggableContainer>
      </Page>
    )
  }
}
