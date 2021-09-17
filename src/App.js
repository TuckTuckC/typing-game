import React, {useState, useEffect} from 'react';
import Words from './components/Words';
import Container from './components/Container';
import Typeracer from './components/Typeracer';
import Results from './components/Results';
import './App.css';

const App = () => {

  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState('');
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * word.length);

  const checkAnswer = () => {
    if(inputValue.trim() === newWord) {
      setCorrectResults(prevCorrect => [...prevCorrect, newWord]);
      setCountCorrect(prevCorrect => prevCorrect + 1);
      return;
    };
    setWrongResults(prevWrong => [...prevWrong, inputValue]);
  };

  const handleInput = e => {
    if(e.charCode === 13 && inputValue.trim() !== '') {
      checkAnswer();
      setNewWord(word[randomWord]);
      setInputValue('');
    };
  };

  return (
    <div className="App">
      <Container>
        <Typeracer 
          newWord = {newWord}
          inputValue = {inputValue}
          setInputValue = {setInputValue}
          disabled = {disabled}
          time = {time}
          animation = {animation}
          handleInput = {handleInput}
        />
      </Container>
      <Results 
        correctResults = {correctResults}
        wrongResults = {wrongResults}
        countCorrect = {countCorrect}
      />
    </div>
  );
};

export default App;