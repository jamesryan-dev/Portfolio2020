import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import folder from './../../images/folder.png'
import fireGif from './../../gif/fire.gif'

const FolderHolder = styled.div`
   position: relative;
   float: left;
   margin: 30px;
   -webkit-transform: rotateY(-15deg);
   /* Safari */
   transform: rotateY(-15deg);
   transform-style: preserve-3d;
   transition: all 0.3s ease-in-out;
   &:hover {
     img {
         top: -30px;
         &:nth-child(2) {
           border: 2px solid blue;
         }
       }

      p {
        color: ${props => props.theme.blue};
      }

      div {
        top: 26px !important;
        transform: rotateX( -25deg);
        box-shadow: 0 7px 5px -2px blue;
      }
     }
  @media (max-width: 900px) {
    margin: 15px;
  }
`
// .folder-holder a:hover .project-image {
//    top: -50px;
// }

// .folder-holder a:hover .folder-close {
//    transform: rotateX( -25deg);
//    box-shadow: 0 7px 5px -2px gray;
// }

const FolderImage = styled.img`
   width: 150px;
   z-index: 1;
`

const ProjectImage = styled.img`
  position: absolute;
  width: 134px;
  left: 50%;
  margin-left: -67px;
  z-index: 5;
  top: 15px;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid transparent;
`

const FolderClose = styled.div`
  position: absolute;
  width: 150px;
  height: 80px;
  right: 2px;
  background: #ffcc66;
  border-radius: 10px;
  top: 26px;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  transform-origin: bottom center;
  box-shadow: 0 4px 2px -2px blue;
  transform: rotateX( -5deg);
  &:hover {
    ${'' /* top: 26px !important;
    transform: rotateX( -25deg);
    box-shadow: 0 7px 5px -2px blue; */}
  }
`

const FolderCloseP = styled.p`
 position: absolute;
 width: 86%;
 text-align: left;
 left: 11px;
 color: ${props => props.theme.black};
 font-size: 18px;
`

const FolderContainer = styled.div`
  position: relative;
  display: block;
  ${'' /* width: 300px; */}
`

const Fire = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 17;
`


export default class FolderComp extends React.Component {
  constructor () {
  super()
}
  isLit = (fire) => {
    const folderHtml =
    <FolderHolder theme={this.props.theme} class='folder-holder'>
      <Link to={this.props.projectLink}>
        <FolderImage class='folder-holder-img' src={folder} />
        <ProjectImage class='project-image' src={this.props.src} srcSet={this.props.src + ' 1x, ' + this.props.src2x + ' 2x'} />
        <FolderClose class='folder-close'>
          <FolderCloseP>{this.props.projectTitle}</FolderCloseP>
        </FolderClose>
      </Link>
    </FolderHolder>
    if (fire == true) {
      return (
        <FolderContainer>
          <Fire className="fire" src={fireGif}/>
          {folderHtml}
        </FolderContainer>
      )
    } else {
      return (
        <div>
        {folderHtml}
        </div>
      )
    }
  }
  render () {
    return (
      <div>
      {this.isLit(this.props.fire)}
      </div>
    )
  }
}
