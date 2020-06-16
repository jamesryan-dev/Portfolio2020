import React from 'react'
import styled from 'styled-components'

import FolderComp from './../components/Folder'

import {H1} from './../components/HTML/H1'
import {P} from './../components/HTML/P'
import {A} from './../components/HTML/A'

import {HoverAdjustments} from './../components/HoverAdjustments'

import ay1 from './../images/projects/auralyouth/ay1.png'
import spr1 from './../images/projects/srdesign/spr3.png'
import le1 from './../images/projects/left/le1.png'
import jb1 from './../images/projects/zine/jb3.png'
import cp1 from './../images/projects/codepen/cp1.png'
import mg1 from './../images/projects/250/mg2.png'

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
  @media (max-width: 616px ) {
    height: 75vh;
  }

  h1, p {
    width: 50%;
  }

  h1 {
    margin-top: 0;
  }
`

const Pprojects = styled(P)``
const H1projects = styled(H1)``

const Alink = styled(A)`
position: relative;
text-decoration: none;
padding: 5px;
z-index: 2;
${({theme}) => HoverAdjustments(theme)}
&:after {
  position: absolute;
  content: '';
  height: 2px;
  bottom: 5px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  background: blue;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

&:hover {
  color: ${props => props.theme.white};
  &:after {
    height: 100%;
    bottom: 0;
    z-index: -1;
  }
}
`

const ProjectFolders = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 80px;
  align-content: flex-start;
  justify-content: flex-start;
`

export default class Projects extends React.Component {
  render () {
    return (
      <Page>
        <H1projects>Projects</H1projects>
        <Pprojects>Whilst the majority of my <i>most frequent</i> code has been written at <Alink href='https://ruin.studio' rel='noopener' target='_blank'>Ruin.Studio</Alink> here's a few selected works from my freelance and/or for projects/sites built for fun</Pprojects>
        <ProjectFolders fire={this.props.fire}>
          <FolderComp fire projectTitle='Aural Youth' info='' projectLink='/projects/auralyouth' src={ay1} src2x='' />
          <FolderComp fire projectTitle='SR Design' info='' projectLink='/projects/seanryan' src={spr1} src2x='' />
          <FolderComp fire projectTitle='250mg' info='' projectLink='/projects/250mg' src={mg1} src2x='' />
          <FolderComp projectTitle='LEFT' info='' projectLink='/projects/left' src={le1} src2x='' />
          <FolderComp projectTitle='Digital Zine[0]' info='' projectLink='/projects/zine' src={jb1} src2x='' />
          <FolderComp projectTitle='Codepen Experiments' info='' projectLink='/projects/codepen' src={cp1} src2x='' />
        </ProjectFolders>
      </Page>
    )
  }
}
