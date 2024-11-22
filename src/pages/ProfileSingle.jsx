import React from 'react'
import { useParams } from 'react-router-dom'


const ProfileSingle = () => {
    const params = useParams();
    
  return (
    <div>ProfileSingle {params.profileId}</div>
  )
}

export default ProfileSingle