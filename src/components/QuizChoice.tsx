import React from 'react';
import { Form } from 'react-bootstrap';
import ChoiceProps from './types/choiceprops'

export default function QuizChoice(props : ChoiceProps){
  return(
    <div key={props.name} className="mb-3">
      <Form.Check 
        label={props.name}
        value={props.name}
        type='radio'
        id={props.name}
        onChange={props.function}
        checked={props.checked}
      />
    </div>
  )
}