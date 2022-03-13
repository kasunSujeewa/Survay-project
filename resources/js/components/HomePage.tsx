import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'


type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <Navbar/>
          <Content/>
          {/* <SurveyComponent /> */}
          <Footer/>
    </div>
  )
}

export default HomePage