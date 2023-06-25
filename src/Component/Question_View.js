import React, { useState } from "react";
import { IconButton, MenuItem, Typography } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd"
import  DragIndicatorIcon  from "@material-ui/icons/DragIndicator";
import './Question_Form.css';

function Question_form(){
    
    const [questions,setQuestions] = useState(
        [{questionText:'What is the Capital of Sri Lanka?',
         questionType:'radio',
         options:[
            {optionText:"Kandy"},
            {optionText:"Colombo"},
            {optionText:"Jaffna"},
            {optionText:"Galle"},
         ],
         name:'Radio-Group',
         open:true,
         required:true
        },{questionText:'What is the Capital of Sri Lanka?',
        questionType:'radio',
        options:[
           {optionText:"Kandy"},
           {optionText:"Colombo"},
           {optionText:"Jaffna"},
           {optionText:"Galle"},
        ],
        name:"",
        open:true,
        required:false
       }])
    function QuestionUi(){
        return questions.map((ques,i)=>(
            <Draggable key={i} draggableId={i+'id'} index={i}>
                {(provided,snapshot)=>(
                    <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                        <div>
                            <div style={{marginBottom:"0px"}}>
                                <div style={{width:"100%",marginBottom:'0px'}}>
                                    {/* Drag ICon Indicator */}
                                    <DragIndicatorIcon style={{transform:'rotate(-90deg)',color:'#DAE0E2',position:'relative',left:'300px'}}
                                    fontSize="small"/>
                                </div>
                                <div key={i}>
                                    {/* Question form Tab opening */}
                    
                    <AccordionSummary aria-controls="panella-content" id ="panella-header" elevation={1} style={{width:'100%'}}>
                    {questions[i].open?(

                        <div className="saved_questions">
                            {/* Display Question Text */}
                        <Typography style={{fontSize:'15px',fontWeight:'400',letterSpacing:'.1px',lineHeight:'24px',paddingBottom:'8px'}}>
                        {i+1}.{questions[i].questionText}{questions[i].required && ' *'}</Typography>
                        {/* Display question Options */}
                        {ques.options.map((op,j)=>(
                            <div key={j}>
                                <div style={{display:'flex'}}>
                                    <FormControlLabel 
                                    style={{marginLeft:'5px',marginBottom:'5px'}} 
                                     control ={<input type={ques.questionType} name ={ques.name}
                                    color="primary" style={{marginRight:'3px'}} 
                                    required={ques.type}/>}
                                    label={<Typography 
                                        style={{fontFamily:'Roboto,Arial,Sans-serif',
                                        fontSize:'13px',
                                        fontWeight:'400',
                                        letterSpacing:'.2px',
                                        lineHeight:'20px',
                                        color:'#202124'}}>
                                        {ques.options[j].optionText}
                                        </Typography>
                                        }/>
                                </div>
                                </div>
                        ))}
                        </div>
                    ):""}
                    </AccordionSummary>
                    {/* Change question options  */}
                    {questions[i].open?(
                    <div className="Question_boxes">
                            </div>
                   ):""} 
            </div>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
           
        ))
        
    }
    return(
        <div className="question_form">
            <br/>
            <div className="section">
                <div className="question_title_section">
                    <div className="question_form_top">
                    
                        <input type="text" className="question_form_top_name" style={{color:'black'}} placeholder="Untitled Document"/>
                        <input type="text" className="question_form_top_desc" placeholder="Form Description"/>
                        
                    </div>
                </div>
                <DragDropContext>
                  <Droppable droppableId="droppable">
                    {(provided,snapshot)=>(
                        <div
                        {...provided.droppableProps}
                        ref={provided.innerRef} >
                            {QuestionUi()}
                            {provided.placeholder}
                        </div>
                    )}
                  </Droppable>
                </DragDropContext>
                 </div>
        
        </div>
        );
}

export default Question_form;