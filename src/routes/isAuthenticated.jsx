import { Navigate, Outlet } from 'react-router-dom'

const IsAuthenticated = () => {
  let auth = { 'access': true }

  if (sessionStorage.getItem('email')) {
    auth = { 'access': false }
  } else {
    auth = { 'access': true }
  }

  return (
    auth.access ? <Outlet /> : <Navigate to="/dashboard" />
  )
}

export default IsAuthenticated