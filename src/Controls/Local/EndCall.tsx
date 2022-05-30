import React, { CSSProperties, useContext } from 'react'
import PropsContext from '../../PropsContext'
// import RtcContext from '../../RtcContext'
import BtnTemplate from '../BtnTemplate'

function EndCall() {
  const { styleProps, callbacks, rtcProps } = useContext(PropsContext)
  const { localBtnStyles } = styleProps || {}
  const { endCall } = localBtnStyles || {}
  // const { dispatch } = useContext(RtcContext)

  const name = rtcProps.privateCall ? 'callEnd' : 'leave';
  const btnStyle: CSSProperties = rtcProps.privateCall ? { backgroundColor: '#ef5588', borderColor: '#f00' } : { borderColor: '#f00' };
  return (
    <BtnTemplate
      style={endCall || btnStyle}
      name={name}
      onClick={() => callbacks?.EndCall && callbacks.EndCall()}
    />
  )
}

export default EndCall
