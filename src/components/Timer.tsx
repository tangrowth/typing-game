import React from 'react';

function Timer() {
  /** 制限時間の設定 */

  /** 制限時間のリセットの設定 */

  /** 表示するタイマー */
  return (
    <div>
      <div>
        <img src="../assets/images/timer.png" alt="" />制限時間: ~s
      </div>
      <img src="../assets/images/stop-button.png" alt="リセット" />
    </div>
  )
}

export default Timer;