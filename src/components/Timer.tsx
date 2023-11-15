import React, { useEffect, useState } from 'react';
import timerImage from '../assets/images/timer.png';
import resetButton from '../assets/images/stop-button.png';

const Timer = () => {
  const [time, setTime] = useState(0); //制限時間を設定
  const [isStarted, setIsStarted] = useState(false); //ゲームの開始を管理

    /** isStartedの値が変更されると実行 */
  useEffect(() => {
    if (!isStarted) {
      return;
    }
    /**
     * 毎秒1ずつカウントを減らす 
     * タイマーが0以下になるとゲームが開始されていない状態にする
     */
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
      if (time < 1) {
        setIsStarted(false);
      }
    }, 1000);
    /** ゲームが開始されていない時はタイマーを止める */
    return () => {
      clearInterval(timerId);
    };
  }, [isStarted, time]);

  /** ゲームが開始されると時間をリセット */
  function startGame() {
    setTime(100);
    setIsStarted(true);
    }

  /** ゲームが開始されていない状態にする */
  function resetGame() {
    setIsStarted(false);
  }

  return (
    <div>
      {isStarted ? (
        <div>
          <img src={resetButton} alt="リセット" onClick={resetGame} />
          <img src={timerImage} alt="" />残り時間: {time}s
        </div>
      ): (
        <button onClick={startGame}>ゲームをはじめる</button>
      )}
    </div>
  );
};

export default Timer;