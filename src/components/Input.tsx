import React, { useState, useEffect } from 'react';


function Input() {
  /** お題の取得 */
  const [currentWord, setCurrentWord] = useState("Apple"); //お題
  const [translatedWord, setTranslatedWord] = useState("りんご"); //お題の日本語訳
  const [inputWord, setInputWord] = useState('');
  const [result, setResult] = useState('');

  /** 入力欄との検証 */
  useEffect(() => {
    if (inputWord === currentWord) {
      setResult("正解！");
    } else {
      setResult("不正解");
    }
  }, [inputWord, currentWord]);

  /** 画面の表示 */
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