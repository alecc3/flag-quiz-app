import React, { useEffect, useState } from 'react';
import buildSelections from './utils/shuffle'
import QuizChoice from './QuizChoice'

export default function Quiz(props){
  const [countryIndex, setcountryIndex] = useState(0);
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [isChecked, setChecked] = useState(false);
  const [result, setResult] = useState("");

  const countries = props.countries
  const flag = countries[countryIndex].emoji

  const addPoints = amount => setScore(score+amount)

  const checkAnswer = (e) => {
    const selected = e.target.value
    const correct = (selected === countries[countryIndex].name)
    // Add score if user picked correctly
    if (correct){
      addPoints(1)
      setResult("Correct")
    }
    else{
      setResult("Wrong")
    }
    cycle()
  }

  const cycle = () => {
    setTimeout(() => {
        // Reset check and result for next question
        setChecked(false)
        setResult("")
        // Pick another random flag
        const random = Math.floor(Math.random() * countries.length)
        setcountryIndex(random)
    }, 800)
  }

  // Build new selections on country change
  useEffect(() => {
    const selections = buildSelections(countries, countryIndex)
    const list =
      selections.map((country) =>
          <QuizChoice name={country.name} function={checkAnswer} checked={isChecked}/>
      )
    setChoices(list)
  },[countryIndex])

  return(
    <div>
      {`Score - ${score}`}
      <div>
        <h1>
          {flag} {result}
        </h1>
        <h4>
          What country is this?
        </h4>
      </div>
      {choices}
      <button className="skip" onClick={cycle}>
        Skip
      </button>
    </div>
  );
}