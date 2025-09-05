import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <>
        <nav className='container px-10 py-5 primary-bg secondry-text'>
            <div className='flex justify-between'>

                {/* LOGO */}
                <div>
                    <h1 className='font-semibold text-2xl'>BLOG</h1>
                </div>

                {/* Navigation Link */}
                <div className='my-auto'>
                    <ul className='flex gap-10'>
                        <li className=''><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/service">Service</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navigation