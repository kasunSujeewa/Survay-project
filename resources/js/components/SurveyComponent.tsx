import React from 'react'
import * as Survey from "survey-react";
import axios from "axios";




import "survey-react/modern.css";
import "./index.css";
import { Navigate, useNavigate } from 'react-router-dom';

Survey.StylesManager.applyTheme("modern");

type Props = {}

const SurveyComponent = (props: Props) => {
  const navigate = useNavigate();

  const sumbmitData = (data:any) => {
       
    axios.post('/survayData',data).then(
      (response) => {
        setInterval(() => {
          navigate("/");
        }, 3000);
        
      }
    ).catch(error => {
      console.log("ERROR:: ",error.response.data);
      
      });
  }
    const json = {
        
            "title": "Survey for Risk prediction of basics symptoms",
            "logoPosition": "right",
            "pages": [
             {
              "name": "page1",
              "elements": [
               {
                "type": "boolean",
                "name": "question1",
                "title": "Is there is a  Headache ?",
                "isRequired": true
               },
               {
                "type": "checkbox",
                "name": "question2",
                "visibleIf": "{question1} = true",
                "title": "Area",
                "isRequired": true,
                "choices": [
                 "Around the eyes",
                 "Just above the nose",
                 "Around the head like a band",
                 "Left Side",
                 "Right side",
                 "Whole Full head"
                ]
               },
               {
                "type": "radiogroup",
                "name": "question3",
                "visibleIf": "{question1} = true",
                "title": "History",
                "isRequired": true,
                "choices": [
                 "Did you get it suddenly?",
                 "Was it prevailing for a long time?",
                 "Did it increase rapidly?"
                ]
               },
               {
                "type": "radiogroup",
                "name": "question4",
                "visibleIf": "{question1} = true",
                "title": "Nature",
                "isRequired": true,
                "choices": [
                 "Is it pressing in nature?",
                 "Picking in nature?"
                ]
               },
               {
                "type": "radiogroup",
                "name": "question5",
                "visibleIf": "{question1} = true",
                "title": "Radiation",
                "isRequired": true,
                "choices": [
                 "From front to behind",
                 "From behind to front",
                 "Doesn’t it travel"
                ]
               },
               {
                "type": "rating",
                "name": "question6",
                "visibleIf": "{question1} = true",
                "title": "Grading",
                "isRequired": true,
                "rateMax": 9
               }
              ]
             },
             {
              "name": "page2",
              "elements": [
               {
                "type": "boolean",
                "name": "question7",
                "title": "Is there a Cough?",
                "isRequired": true
               },
               {
                "type": "radiogroup",
                "name": "question8",
                "visibleIf": "{question7} = true",
                "title": "Cough",
                "isRequired": true,
                "choices": [
                 "Dry cough",
                 "Cough with phlegm"
                ]
               },
               {
                "type": "radiogroup",
                "name": "question9",
                "visibleIf": "{question8} = 'item2'",
                "title": "Color",
                "isRequired": true,
                "choices": [
                 "Black",
                 "Red",
                 "Yellow",
                 "White"
                ]
               },
               {
                "type": "radiogroup",
                "name": "question10",
                "visibleIf": "{question8} = 'item2'",
                "title": "Nature",
                "choices": [
                 "Is it solidified",
                 "Liquid nature"
                ]
               },
               {
                "type": "boolean",
                "name": "question11",
                "visibleIf": "{question8} = 'item2'",
                "title": "Is smell bad"
               },
               {
                "type": "rating",
                "name": "question12",
                "visibleIf": "{question8} = 'item2'",
                "title": "Volume ",
                "isRequired": true,
                "rateMax": 9
               },
               {
                "type": "radiogroup",
                "name": "question14",
                "visibleIf": "{question1} = true",
                "title": "History",
                "choices": [
                 "Did you get it suddenly?",
                 "Was it prevailing for a long time?",
                 "Did it increase rapidly?"
                ]
               },
               {
                "type": "radiogroup",
                "name": "question13",
                "visibleIf": "{question7} = true",
                "title": "Which posture is difficult",
                "isRequired": true,
                "choices": [
                 "Standing",
                 "seated",
                 "Sleeping"
                ]
               },
               {
                "type": "rating",
                "name": "question15",
                "visibleIf": "{question7} = true",
                "title": "Grading",
                "rateMax": 9
               }
              ]
             },
             {
              "name": "page3",
              "elements": [
               {
                "type": "boolean",
                "name": "question16",
                "title": "Nose related Complications",
                "isRequired": true
               },
               {
                "type": "boolean",
                "name": "question17",
                "visibleIf": "{question16} = true",
                "title": "Bleeding?"
               },
               {
                "type": "radiogroup",
                "name": "question18",
                "visibleIf": "{question17} = true",
                "title": "Nature",
                "choices": [
                 "Is it solidified",
                 "Liquid nature (Fresh blood)"
                ]
               },
               {
                "type": "checkbox",
                "name": "question19",
                "visibleIf": "{question16} = true",
                "title": "Time",
                "choices": [
                 "Morning",
                 "Night",
                 "Evening"
                ]
               },
               {
                "type": "checkbox",
                "name": "question20",
                "visibleIf": "{question16} = true",
                "title": "Which posture is difficult",
                "choices": [
                 "Standing",
                 "seated",
                 "Sleeping"
                ]
               },
               {
                "type": "boolean",
                "name": "question21",
                "visibleIf": "{question16} = true",
                "title": "Are you waking up suddenly?"
               },
               {
                "type": "boolean",
                "name": "question22",
                "visibleIf": "{question16} = true",
                "title": "Is it difficult to breath When turning to side?"
               }
              ]
             },
             {
              "name": "page4",
              "elements": [
               {
                "type": "boolean",
                "name": "question23",
                "title": "Do you get mucus",
                "isRequired": true
               },
               {
                "type": "radiogroup",
                "name": "question24",
                "visibleIf": "{question23} = true",
                "title": "Color",
                "choices": [
                 "Red",
                 "Black",
                 "Yellow",
                 "White"
                ]
               },
               {
                "type": "radiogroup",
                "name": "question25",
                "visibleIf": "{question23} = true",
                "title": "Nature",
                "choices": [
                 "Is it solidified?",
                 "Liquid nature"
                ]
               },
               {
                "type": "boolean",
                "name": "question26",
                "visibleIf": "{question23} = true",
                "title": "Is it bad smell?"
               },
               {
                "type": "rating",
                "name": "question27",
                "visibleIf": "{question23} = true",
                "title": "Volume",
                "rateMax": 9
               },
               {
                "type": "boolean",
                "name": "question28",
                "title": "Do you sneeze?",
                "isRequired": true
               }
              ]
             },
             {
              "name": "page5",
              "elements": [
               {
                "type": "boolean",
                "name": "question29",
                "title": "Do your eyes pain ?",
                "isRequired": true
               },
               {
                "type": "checkbox",
                "name": "question30",
                "visibleIf": "{question29} = true",
                "title": "Time",
                "choices": [
                 "Morning",
                 "Night",
                 "Evening"
                ]
               },
               {
                "type": "checkbox",
                "name": "question31",
                "visibleIf": "{question29} = true",
                "title": "Which posture is difficult?",
                "choices": [
                 "Standing",
                 "Seated",
                 "Sleeping"
                ]
               },
               {
                "type": "rating",
                "name": "question32",
                "visibleIf": "{question29} = true",
                "title": "Grading",
                "rateMax": 9
               },
               {
                "type": "boolean",
                "name": "question33",
                "title": "Do you have burry vision?",
                "isRequired": true
               }
              ]
             },
             {
              "name": "page6",
              "elements": [
               {
                "type": "boolean",
                "name": "question34",
                "title": "Does your ear pain?",
                "isRequired": true
               },
               {
                "type": "boolean",
                "name": "question35",
                "visibleIf": "{question34} = true",
                "title": "Your ear lobes?"
               },
               {
                "type": "boolean",
                "name": "question36",
                "visibleIf": "{question34} = true",
                "title": "Inside of ear"
               },
               {
                "type": "checkbox",
                "name": "question37",
                "visibleIf": "{question34} = true",
                "title": "Time",
                "choices": [
                 "Morning",
                 "Night",
                 "Evening"
                ]
               },
               {
                "type": "checkbox",
                "name": "question38",
                "visibleIf": "{question34} = true",
                "title": "Which posture is difficult",
                "choices": [
                 "Standing",
                 "Seated",
                 "Sleeping"
                ]
               },
               {
                "type": "rating",
                "name": "question39",
                "visibleIf": "{question34} = true",
                "title": "Grade ",
                "rateMax": 9
               }
              ]
             },
             {
              "name": "page7",
              "elements": [
               {
                "type": "boolean",
                "name": "question40",
                "title": "Are you Vomiting?",
                "isRequired": true
               },
               {
                "type": "radiogroup",
                "name": "question41",
                "visibleIf": "{question40} = true",
                "title": "Color",
                "choices": [
                 "Red",
                 "Black",
                 "No color changed"
                ]
               },
               {
                "type": "radiogroup",
                "name": "question42",
                "visibleIf": "{question40} = true",
                "title": "Nature",
                "choices": [
                 "Is it solidified?",
                 "Liquid nature"
                ]
               },
               {
                "type": "rating",
                "name": "question43",
                "visibleIf": "{question40} = true",
                "title": "Volume",
                "rateMax": 9
               },
               {
                "type": "radiogroup",
                "name": "question44",
                "visibleIf": "{question40} = true",
                "title": "History",
                "choices": [
                 "Did you get it suddenly?",
                 "Was it prevailing for a long time?",
                 "Did it increase rapidly?"
                ]
               },
               {
                "type": "checkbox",
                "name": "question45",
                "visibleIf": "{question40} = true",
                "title": "Which posture is difficult",
                "choices": [
                 "Standing",
                 "seated",
                 "Sleeping"
                ]
               },
               {
                "type": "checkbox",
                "name": "question46",
                "visibleIf": "{question40} = true",
                "title": "Time",
                "choices": [
                 "Morning",
                 "Night",
                 "Evening"
                ]
               }
              ]
             },
             {
              "name": "page8",
              "elements": [
               {
                "type": "boolean",
                "name": "question47",
                "title": "Did you lose weight",
                "isRequired": true
               },
               {
                "type": "boolean",
                "name": "question48",
                "title": "Are you sweating at night?",
                "isRequired": true
               },
               {
                "type": "boolean",
                "name": "question49",
                "title": "Are you feeling right?",
                "isRequired": true
               },
               {
                "type": "boolean",
                "name": "question50",
                "title": "You don’t have the appetite",
                "isRequired": true
               },
               {
                "type": "boolean",
                "name": "question51",
                "title": "Do you have fever",
                "isRequired": true
               },
               {
                "type": "comment",
                "name": "question52",
                "title": "Doctor suggestions?"
               },
               {
                "type": "boolean",
                "name": "question53",
                "title": "Is it risky?",
                "isRequired": true
               }
              ]
             }
            ]
           
};
const survey = new Survey.Model(json);

  return (
    <Survey.Survey
    model={survey}
    onComplete = {(survay:any) =>{
      sumbmitData(survay.data)
    }}
/>
  )
}

export default SurveyComponent