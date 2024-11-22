import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <div> 404 Not Found</div>
        <Link to="/">Back to Homepage</Link>
    </>
  )
}

export default ErrorPage