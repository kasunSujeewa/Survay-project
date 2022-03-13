import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type Props = {}

const Content = (props: Props) => {
  return (
    <div className="content-body">
        <Link to="/questionnaire">
        <div className="content-item">
            <FaQuestionCircle size={70} />
        </div>
        <div className="content-item">
        
            <h3 className='content-body-header'>Questionnaire</h3>
            <p className='content-body-description'>use this for a collect Data</p>
        </div>
        </Link>
       
        
    </div>
  )
}

export default Content