import React from 'react'
import { connect } from 'react-redux'
import { BsX } from 'react-icons/bs'

import { hideAlert } from '../../actions'
import { Wrapper, AlertCustomButton } from './index'

function AlertModal({ hideAlert, msg, show, color }) {
  if (!show) return null

  return (
    <Wrapper color={color}>
      <div>{msg}</div>
      <AlertCustomButton onClick={hideAlert} color={color}>
        <BsX size={24} />
      </AlertCustomButton>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    show: state.modal.show,
    msg: state.modal.msg,
    color: state.modal.color,
  }
}

const mapDispatchToProps = {
  hideAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertModal)
