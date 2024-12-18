import React from 'react'

function CaptianDetails() {
  return (
    <div className='mt-2'>
        <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-2'>
          <img className='h-10 w-10 object-cover rounded-full' src="https://th.bing.com/th/id/OIP.Ay-JorY6n16gPi5G337osgAAAA?w=300&h=300&rs=1&pid=ImgDetMain" alt="" />
          <h4 className='text-lg font-medium' >Magnus Carlson</h4>

        </div>
        <div >
          <h5 className='text-xl font-semibold'>₹ 256.22</h5>
          <p className='text-sm font-medium text-gray-600'>Earned</p>
        </div>
        </div>
        <div className='flex p-4 mt-6 bg-gray-100 rounded-xl justify-center items-center gap-5'>
          <div className='text-center'>
          <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
         
          <div className='text-center'>
            <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
          </div>

          <div className='text-center'>
            <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
       </div>
  )
}

export default CaptianDetails