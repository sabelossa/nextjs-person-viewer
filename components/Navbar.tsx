import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <nav className='flex items-center flex-wrap bg-green-300 p-4 '>
        <Link href='/'>
          <a href='#'>
            <span className='text-xl text-white font-bold uppercase tracking-wide bg-sky-700 rounded p-2'>
              Person Viewer
            </span>
          </a>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
