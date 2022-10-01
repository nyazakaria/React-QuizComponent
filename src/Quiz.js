import React, { Component } from 'react'

let quizData = require('./quiz_data.json');

 class Quiz extends Component{
    constructor(props) {
        super(props)
        this.state = {
            quiz_position: 1
        }
    }

    render( ){
        return (
            <div className='QuizQuestion' > 
                {quizData.quiz_questions[0].instruction_text}
              
            </div>
        )
    }
}
/*
 {quizData.quiz_questions.map( question => {
               return ( <div key={question.id+question.answer}>
                <ul><li>{question.instruction_text}</li></ul>
               </div>)
            } )}*/

            
export default Quiz;