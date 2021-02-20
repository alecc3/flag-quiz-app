import React, { useState } from 'react';
import buildSelections from './utils/shuffle'
import QuizOption from './utils/option'

export default function Quiz(props){
  const [cur, setCur] = useState(0);
  const [score, setScore] = useState(0);
  const [isChecked, setChecked] = useState(false);

  const addPoints = () => setScore(score+1)

  const cycle = (e) => {
    const selected = e.target.value
    const correct = (selected === countries[cur].name)

    setTimeout(() => {
        // Add score if user picked correctly
        if (correct) addPoints()
        // Reset boxes
        setChecked(false)
        // Pick another random flag
        const random = Math.floor(Math.random() * countries.length)
        setCur(random)
    }, 300)
  }

  const countries = props.countries
  const flag = countries[cur].emoji
  const selections = buildSelections(countries, cur)
  const list =
  <div>
  {selections.map((country) =>
      <QuizOption name={country.name} function={cycle} checked={isChecked}/>
  )}
  </div>

  return(
    <div>
      {`Score - ${score}`}
      <div>
        <h1>
          {flag}
        </h1>
        <h4>
          What country is this?
        </h4>
      </div>
      {list}
      <button className="skip" onClick={cycle}>
        Skip
      </button>
    </div>
  );
}