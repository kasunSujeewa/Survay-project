import React from 'react'
import Navbar from './Navbar'
import SurveyComponent from './SurveyComponent'
type Props = {}

const Questionnaire = (props: Props) => {
  return (
    <div>
         <Navbar/>
          <SurveyComponent />
    </div>
  )
}

export default Questionnaire