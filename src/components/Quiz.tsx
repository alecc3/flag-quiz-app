import React, { useEffect, useState } from 'react';
import buildSelections from './utils/shuffle'
import QuizChoice from './QuizChoice'
import QuizProps from './types/quizprops'
import Country from './types/country'

const { emojiCountryCode } = require('country-code-emoji');

export default function Quiz(props : QuizProps){
  const [countryIndex, setcountryIndex] = useState(0);
  const [choices, setChoices] = useState(<></>);
  const [score, setScore] = useState(0);
  const [isChecked, setChecked] = useState(false);
  const [result, setResult] = useState("");

  const countries = props.countries
  const flag = countries[countryIndex].emoji
  const code = emojiCountryCode(flag).toLowerCase()
  const flagImg = <img src={`https://www.countryflags.io/${code}/flat/64.png`} alt="curFlag"/>

  const addPoints = (amount: number) => setScore(score+amount)

  const checkAnswer = (e : React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement
    const selected = target.value
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
    const list : JSX.Element =
      <>
      {selections.map((country : Country) =>
          <QuizChoice name={country.name} function={checkAnswer} checked={isChecked}/>
      )}
      </>
    setChoices(list)
  },[countryIndex])

  return(
    <div>
      {`Score - ${score}`}
      <div>
        <h1>
          {flagImg} {result}
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