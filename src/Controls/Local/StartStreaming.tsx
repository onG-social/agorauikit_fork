
import React, { CSSProperties, Fragment, useContext } from 'react'
import RtcContext from '../../RtcContext'

function StartStreaming() {
  const { streamingHasStarted, startStreaming } = useContext(RtcContext);

  const startStream = () => {
    startStreaming(true)
  }

  if (streamingHasStarted === true) {
    return <Fragment></Fragment>
  }

  return (
    <div
      onClick={startStream}
      style={styles.button}
    >
      Start Stream
    </div>
  )
}

const styles = {
  button: {
    background: '#15d798',
    'border- radius': '11px',
    padding: '20px 45px',
    color: '#ffffff',
    display: 'inline-block',
    'font-size': '24px',
    'Text-align':    'center',
    pointer: 'cursor'
  } as CSSProperties
}

export default StartStreaming