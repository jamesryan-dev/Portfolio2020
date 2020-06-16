import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import {HoverAdjustments} from './../HoverAdjustments'
import {A} from './../HTML/A'

const Acta = styled(A)`

`

const CTABannerComp = styled.section`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
align-content: center;

a {
  text-decoration: none;
  padding: 1em 1.5em;
  background: blue;
  min-width: 136.66px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 2px solid ${props => props.theme.black};
  color: ${props => props.theme.white};
  ${'' /* ${({theme}) => HoverAdjustments(theme)} */}
  margin: 0.666em;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props => props.theme.black};
    color: blue;
    border: 2px solid ${props => props.theme.blue};
    cursor: pointer;
  }
}
`

export default class CTABanner extends React.Component {
  render () {
    return (
      <div>
        <CTABannerComp weblink={this.props.weblink} codelink={this.props.codelink}>
          <Link to='/mycomputer'>🗃 Back</Link>
          {(this.props.weblink) ? <a href={this.props.weblink} rel='noopener' target='_blank'>🌐 Website</a> : null }
          {(this.props.codelink) ? <a href={this.props.codelink} rel='noopener' target='_blank'>💾 Code</a> : null }
        </CTABannerComp>
      </div>
    )
  }
}
