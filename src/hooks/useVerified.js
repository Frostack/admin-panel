import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

function useVerified() {
  const history = useHistory()
  const isAuthenticated = Cookies.get('token') ? true : false
  if (isAuthenticated) history.push('/admin/dashboard')
}

export default useVerified
