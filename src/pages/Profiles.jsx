import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const profiles = [1,2,3,4,5];

const Profiles = () => {
  return (
    <div className='flex justify-between'>
    <ul className=' bg-gray-100 p-6 flex-1'>
        <h1 className='text-2xl font-bold'>Our Team </h1>
        {profiles.map((profile) => (
            <li key={profile}>
              <NavLink to={`/profiles/${profile}`} 
                className={({isActive}) => { 
                    return isActive ? 'text-blue-500' : ''
                }}> 
                Profile {profile}
              </NavLink>
            </li>
          ))}
    </ul>
    
    <div className='border-l border-dashed flex-1 p-6'>
        <Outlet />
    </div>
    </div>
  )
}

export default Profiles