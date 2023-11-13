import React, { useState, useEffect } from 'react';
import timerImage from '../assets/images/timer.png';
import resetButton from '../assets/images/stop-button.png'
import { clear } from 'console';

function Timer() {
  /** 制限時間の設定 */

  /** 制限時間のリセットの設定 */

  /** 表示するタイマー */
  return (
    <div>
      <div>
        <img src={timerImage} alt="" />制限時間: ~s
      </div>
      <img src={resetButton} alt="リセット" />
    </div>
  )
}

export default Timer;