import React from 'react';

let quizData = require('./quiz_data.json');

export default class Quiz extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            quiz_position: 1
        }
    }

    render( ){

        console.log('test');
        return (
            <div className='QuizQuestion'> 
            {quizData.quiz_questions.map( question => {
               return ( <div key={question.id+question.answer}>
                <ul><li>{question.instruction_text}</li></ul>
               </div>)
            } )}
            </div>
        )
    }
}