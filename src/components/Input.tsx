import React, { useState, useEffect } from 'react';
import wordData from '../data/word.json';

function Input({ isStarted, setIsStarted }: {
  isStarted: boolean, setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [wordList, setWordList] = useState(wordData.words); //ワードリストの取得
  const [currentWord, setCurrentWord] = useState(''); //お題
  const [translatedWord, setTranslatedWord] = useState(''); //お題の日本語訳
  const [inputWord, setInputWord] = useState('');
  const [result, setResult] = useState(false);

  function handleIsStarted() {
    setIsStarted(true);
  }

  /** 正解するたびにあたらしい単語を取得 */
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const randomWord = wordList[randomIndex];
    setCurrentWord(randomWord.currentWord);
    setTranslatedWord(randomWord.translatedWord);
  }, [result, wordList]);

  //入力の正誤を判定
  useEffect(() => {
    if (inputWord === currentWord) {
      setResult(true);
      setInputWord('');
    } else {
      setResult(false);
    }
  }, [inputWord, currentWord]);

  return (
    <div>
      {isStarted ?(
        <div>
          <div>{translatedWord}</div>
          <div>{currentWord}</div>
          <input
            type="text"
            name="inputWord"
            value={inputWord}
            onChange={(e) => {
              setInputWord(e.target.value)
            }}
            disabled={!isStarted}
          />
        </div>
      ) : (
        <div>
          <button onClick={handleIsStarted}>ゲームをはじめる</button>
        </div>
      )}
    </div>
  )
}

export default Input;