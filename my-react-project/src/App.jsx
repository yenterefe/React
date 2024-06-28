import { useState } from 'react'
import './App.css'
import Span from './Span'
import Input from './Input'
import Button from './Button'


function App() {
  const [word, setWord] = useState("");

  let wordSearch;

  const getText = (event) => wordSearch = event.target.value;


  const getValue = async () => {

    let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearch}`);
    setWord(wordSearch + " : " + JSON.stringify(response.data[0].meanings[0].definitions[0]).replaceAll("{", "").replaceAll("{", "").replaceAll("[", "").replaceAll("]", "").replaceAll("}", ""));
  };


  return (
    <div className="body">
      <Span />
      <Input text={getText} />
      <Button value={getValue} />
      <p> {word} </p>
    </div>
  )
}

export default App
