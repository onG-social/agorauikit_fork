import React, { useContext } from 'react'
import EndCall from './Local/EndCall'
import LocalAudioMute from './Local/LocalAudioMute'
import LocalVideoMute from './Local/LocalVideoMute'
import PropsContext from '../PropsContext'
import StartStreaming from './Local/StartStreaming'
import RtcContext from '../RtcContext'

function LocalControls() {
  const { streamingHasStarted } = useContext(RtcContext);
  const { styleProps, rtcProps } = useContext(PropsContext)
  const { localBtnContainer } = styleProps || {}
  const displayStartStreamingButton = rtcProps.privateCall === false && rtcProps.role !== 'audience';

  return (
    <div
      style={{
        ...{
          backgroundColor: '#007bff',
          width: '100%',
          height: 70,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        },
        ...localBtnContainer
      }}
    >
      {displayStartStreamingButton && <StartStreaming />}
      {streamingHasStarted && rtcProps.role !== 'audience' && <LocalVideoMute />}
      {streamingHasStarted && rtcProps.role !== 'audience' && <LocalAudioMute />}
      <EndCall />
    </div>
  )
}

export default LocalControls
