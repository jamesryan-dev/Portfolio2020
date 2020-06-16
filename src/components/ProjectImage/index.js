import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

const ImageContainer = styled.section`
  height: 100%;
  width: 100%;
  margin: 30px 0;
  border: 2px solid ${props => props.theme.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  img {
    height: 90%;
    width: 100%;
  }
`

export default class ProjectImageComp extends React.Component {
  render () {
    return (
      <ScrollAnimation animateIn='fadeIn' offset={0}>
        <ImageContainer>
          <img src={this.props.src} />
        </ImageContainer>
      </ScrollAnimation>
    )
  }
}
