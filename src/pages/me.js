import React from 'react'
import styled from 'styled-components'

import {H1} from './../components/HTML/H1'
import {P} from './../components/HTML/P'

import music from './../images/icons/SVG/music.svg'
import email from './../images/icons/SVG/email.svg'
import twitter from './../images/icons/SVG/bat.svg'
import ig from './../images/icons/SVG/ig.svg'

const Page = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
`

const Intro = styled.div`
  width: 100%;
  padding-top: 150px;
  @media (max-width: 693px) {
    width: 100%;
  }
`

const H1me = styled(H1)`
  margin-top: 0;
`

const Pme = styled(P)`
`

const H1link = styled(H1)``

const ContactContainer = styled.div`
  display: block;
`

const ContactUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  ${'' /* height: 90vh;
  overflow: scroll;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll; */}
`

const ContactLi = styled.li`
  padding: 0.75rem;
  text-decoration: none;
  margin: 0;
  box-sizing: border-box;
  transition: background 1.666s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    height: 100%;
    object-fit: contain;
    width: 40px;
    height: 40px;
  }
  .soundcloud {
    height: 33px;
    width: 33px;
  }
  a {
    text-decoration: none;
    ${'' /* color: ${props => props.theme.white}; */}
    transition: all .1s ease-out;
    flex: 1;
    h1 {
      margin: 0;

      @media (max-width: 693px) {
        font-size: 24px;
      }
    }
  }
  &:hover {
    background: ${props => props.theme.blue};
    background: ${props => props.gallery ? 'none' : null};
    a {
      color: ${props => props.theme.black};
    }
    h1 {
      color: ${props => props.theme.black};
    }
  }
`

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: scroll;

  @media (max-width: 616px) {
    display: none;
  }
`

const Window = styled.img`
  height: 50%;
  width: 50%;
  object-fit: contain;
  opacity: 0;
  &:hover {
    opacity: 1;
    transition: opacity 1.666s ease;
  }
`

export default class Index extends React.Component {
  render () {
    return (
      <Page>
        <Intro>
          <H1me>hyper_Links</H1me>
          <Pme>A collection of links to stalk me further   👀</Pme>
          <Pme>Follow, Say <i>hey</i>     👋🏻</Pme>
          <Pme>Always down for making friends, collaborating, freelance and/or sharing music     ♻️</Pme>
        </Intro>
        <ContactContainer>
          <ContactUl>
            <ContactLi><a href='mailto:freebobcole@gmail.com'><H1link>Email - freebobcole@gmail.com</H1link></a><img src={email} /></ContactLi>
            <ContactLi><a href='https://www.instagram.com/names.fm/' target='_blank' rel='noopener'><H1link>Instagram - @names.fm</H1link></a><img src={ig} /></ContactLi>
            <ContactLi><a href='https://twitter.com/namescodes' target='_blank' rel='noopener'><H1link>Twitter - @names_fm</H1link></a><img src={twitter} /></ContactLi>
            <ContactLi><a href='https://soundcloud.com/namesnames' target='_blank' rel='noopener'><H1link>Soundcloud - /names-fm</H1link></a><img className='soundcloud' src={music} /></ContactLi>

          </ContactUl>
        </ContactContainer>
      </Page>
    )
  }
}
