import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar fixed left-0 h-full flex'>
        
        {/* First Tier */}
        <div className='h-full bg-slate-800 w-[80px]  p-2'>
            <h1 className='text-xl font-bold text-white'>LOGO</h1>
            <nav className=''>
                <ul>
                    <li></li>
                </ul>
            </nav>
        </div>

        {/* Second Tier */}
        <div className='sidebar-2ndtier h-full w-[200px] bg-slate-200 p-5'>
            second tier
        </div>
    </div>
  )
}

export default Sidebar