import React, { useEffect, useState } from 'react';
import timerImage from '../assets/images/timer.png';
import resetButton from '../assets/images/stop-button.png';

const Timer = ({ isStarted, setIsStarted }: {
  isStarted: boolean, setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [time, setTime] = useState(0); // 制限時間を設定

  /** isStartedの値が変更されると実行 */
  useEffect(() => {
    if (!isStarted) {
      return;
    }

    // タイマーが100にセットされる
    setTime(100);

    /**
     * 毎秒1ずつカウントを減らす 
     * タイマーが0以下になるとゲームが開始されていない状態にする
     */
    const timerId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          setIsStarted(false);
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    /** ゲームが開始されていない時はタイマーを止める */
    return () => {
      clearInterval(timerId);
    };
  }, [isStarted, setIsStarted]);

  /** ゲームが開始されていない状態にする */
  function resetGame() {
    setIsStarted(false);
  }

  return (
    isStarted ? (
      <div>
        <img src={resetButton} alt="リセット" onClick={resetGame} />
        <img src={timerImage} alt="" />残り時間: {time}
      </div>
    ) : (
        <div></div>
    )
  );
};

export default Timer;