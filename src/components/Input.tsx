import React, { useState, useEffect } from 'react';
import wordData from '../data/word.json';


function Input() {
  const [wordList, setWordList] = useState(wordData.words); //ワードリストの取得
  const [currentWord, setCurrentWord] = useState(''); //お題
  const [translatedWord, setTranslatedWord] = useState(''); //お題の日本語訳
  const [inputWord, setInputWord] = useState('');
  const [result, setResult] = useState("不正解");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const randomWord = wordList[randomIndex];
    setCurrentWord(randomWord.currentWord);
    setTranslatedWord(randomWord.translatedWord);
  }, [result, wordList]);

  useEffect(() => {
    if (inputWord === currentWord) {
      setResult("正解！");
      setInputWord('');
    } else {
      setResult("不正解");
    }
  }, [inputWord, currentWord]);

  return (
    <div>
      <div>{ translatedWord }</div>
      <div>{ currentWord }</div>
      <input
        type="text"
        name="inputWord"
        value={inputWord}
        onChange={(e) => {
          setInputWord(e.target.value)
        }}
      />
      {result}
    </div>
  )
}

export default Input;