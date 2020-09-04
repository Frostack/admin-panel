import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import api from '../apis/reqres'
import { showAlert } from '../actions'

const useAuth = reqPath => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async values => {
    setIsLoading(true)
    try {
      await api.post(reqPath, values)
      history.push('/admin/dashboard')
      dispatch(showAlert('You Are Logged in'))
    } catch (err) {
      setError(err.response.data.error)
    } finally {
      setIsLoading(false)
    }
  }

  return { error, isLoading, onSubmit }
}

export default useAuth
