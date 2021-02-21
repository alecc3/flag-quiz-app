import { Form } from 'react-bootstrap';

export default function QuizChoice(props){
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