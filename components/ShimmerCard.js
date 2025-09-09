import React from 'react'

const ShimmerCard = () => {
  return (
    <>
        <div className="border p-3 rounded cursor-pointer hover:bg-gray-200 mb-3">
            <div className="space-y-4">
                <div className='h-48'></div>
                <h2 className="h-16"></h2>
                <p className='h-24'></p>
            </div>
        </div>
    </>
  )
}

export default ShimmerCard