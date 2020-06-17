import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import folder from './../../images/folder.png'
import fireGif from './../../gif/fire.gif'

const SmallFolderHolder = styled.div`
   position: relative;
   float: left;
   // margin: 30px;
   margin-right: 12px;
   -webkit-transform: rotateY(-15deg);
   /* Safari */
   transform: rotateY(-15deg);
   transform-style: preserve-3d;
   transition: all 0.3s ease-in-out;
   // &:hover {
   //   img {
   //       top: 2px;
   //       &:nth-child(2) {
   //         // border: 1px solid blue;
   //       }
   //     }
   //
   //    p {
   //      color: ${props => props.theme.blue};
   //    }
   //
   //    div {
   //      top: 26px !important;
   //      top: 5px !important;
   //      transform: rotateX( -25deg);
   //      // box-shadow: 0 7px 5px -2px blue;
   //    }
   //   }
  @media (max-width: 900px) {
    // margin: 15px;
  }
`
// .folder-holder a:hover .project-image {
//    top: -50px;
// }

// .folder-holder a:hover .folder-close {
//    transform: rotateX( -25deg);
//    box-shadow: 0 7px 5px -2px gray;
// }

const SmallFolderImage = styled.img`
   width: 150px;
   width: 30px;
   z-index: 1;
`

const SmallProjectImage = styled.img`
  position: absolute;
  width: 134px;
  width: 29px;
  left: 50%;
  left: -1px;
  top: 10px;
  //margin-left: -67px;
  z-index: 5;
  //top: 15px;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid transparent;
`

const SmallFolderClose = styled.div`
  position: absolute;
  width: 150px;
  width: 31px;
  height: 80px;
  height: 19px;
  right: 2px;
  right: 0px;
  background: #ffcc66;
  border-radius: 3px;
  top: 26px;
  top: 4px;
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

const SmallFolderCloseP = styled.p`
 position: absolute;
 width: 86%;
 text-align: left;
 left: 11px;
 color: ${props => props.theme.black};
 font-size: 18px;
 display: none;
`

const SmallFolderContainer = styled.div`
  position: relative;
  display: block;
  ${'' /* width: 300px; */}
`



export default class SmallFolderComp extends React.Component {
  constructor () {
  super()
}
  isLit = (fire) => {
    const folderHtml =
    <SmallFolderHolder theme={this.props.theme} className='folder-holder'>
      <Link to={this.props.projectLink}>
        <SmallFolderImage class='folder-holder-img' src={folder} />
        <SmallProjectImage class='project-image' src={this.props.src} srcSet={this.props.src + ' 1x, ' + this.props.src2x + ' 2x'} />
        <SmallFolderClose class='folder-close'>
          <SmallFolderCloseP>{this.props.projectTitle}</SmallFolderCloseP>
        </SmallFolderClose>
      </Link>
    </SmallFolderHolder>
    if (fire == true) {
      return (
        <SmallFolderContainer>
          {folderHtml}
        </SmallFolderContainer>
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
