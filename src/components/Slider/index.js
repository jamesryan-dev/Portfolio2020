import React from 'react'
import styled from 'styled-components'

const Slideshow = styled.div`
  position: relative;
  overflow: hidden;
  height: 50px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`


const SlideshowContent = styled.p`
  height: 100%;
  width: 17666px;
  animation: moveSlideshow 317.666s linear infinite;
  margin: 0;
  line-height: 50px;
  transition: all .4s ease-in;
  font-size: 46px;
  font-family: 'Mughal', sans-serif;
  opacity: 0.2;
  color: white !important;
  transform: translate3d(0, 0, 0);
  user-select: none;
  &:hover {
      opacity: 0.5;
  }
  ${'' /* @keyframes slideshow {
    0%    { left: 0; }
    100%  { left: -200%; }
  } */}

  @keyframes moveSlideshow {
  100% {
    -webkit-transform: translateX(-200%);
  }
}
`

export default class SlideshowComp extends React.Component {
  render () {
    return (
      // <SlideshowAbsolute>
      <Slideshow>
        <SlideshowContent>Welcome to my website, please enjoy your stay.. HTML
            CSS _Styling.scss vanilla.js $Jquery Cross-browser New THREE.js Compatability Svg Retina Gulp Webpack Next.js UX import React from 'react' React.Native
            Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
            Welcome to my website, please enjoy your stay.. HTML
              CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
              Responsive UI Agile New THREE.js Sanity REST HTTP Gatsby Nunjucks API Next.js User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
              Welcome to my website, please enjoy your stay.. HTML
                CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
                Welcome to my website, please enjoy your stay.. HTML
                    CSS _Styling.scss vanilla.js $Jquery Cross-browser New THREE.js Compatability Svg Retina Gulp Webpack Next.js UX import React from 'react' React.Native
                    Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
                    Welcome to my website, please enjoy your stay.. HTML
                      CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                      Responsive UI Agile New THREE.js Sanity REST HTTP Gatsby Nunjucks API Next.js User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
                      Welcome to my website, please enjoy your stay.. HTML
                        CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                        Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profileWelcome to my website, please enjoy your stay.. HTML
                            CSS _Styling.scss vanilla.js $Jquery Cross-browser New THREE.js Compatability Svg Retina Gulp Webpack Next.js UX import React from 'react' React.Native
                            Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
                            Welcome to my website, please enjoy your stay..HTMLCSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                              Responsive UI Agile New THREE.js Sanity REST HTTP Gatsby Nunjucks API Next.js User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
                              Welcome to my website, please enjoy your stay..HTMLCSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                                Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile Welcome to my website, please enjoy your stay.. HTML
                                    CSS _Styling.scss vanilla.js $Jquery Cross-browser New THREE.js Compatability Svg Retina Gulp Webpack Next.js UX import React from 'react' React.Native
                                    Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
                                    Welcome to my website, please enjoy your stay.. HTML
                                      CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                                      Responsive UI Agile New THREE.js Sanity REST HTTP Gatsby Nunjucks API Next.js User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
                                      Welcome to my website, please enjoy your stay.. HTML
                                        CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                                        Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile Welcome to my website, please enjoy your stay.. HTML
                                            CSS _Styling.scss vanilla.js $Jquery Cross-browser New THREE.js Compatability Svg Retina Gulp Webpack Next.js UX import React from 'react' React.Native
                                            Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
                                            Welcome to my website, please enjoy your stay.. HTML
                                              CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                                              Responsive UI Agile New THREE.js Sanity REST HTTP Gatsby Nunjucks API Next.js User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile
                                              Welcome to my website, please enjoy your stay.. HTML
                                                CSS _Styling.scss vanilla.js $Jquery Cross-browser Compatability Svg Retina Gulp Webpack UX import React from 'react' React.Native
                                                Responsive UI Agile REST HTTP Gatsby Nunjucks API User Testing Grunt xCode Pair Programming Wordpress PHP CMS Someone with the job title Recruiter has viewed your profile

          </SlideshowContent>
      </Slideshow>
      // </SlideshowAbsolute>
    )
  }
}
