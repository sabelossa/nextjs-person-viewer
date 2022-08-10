import React from 'react';
import Image from 'next/image';

function Userbox({ name, avatar, email }: any) {
  return (
    <div className='object-center px-10 py-5 shadow-2xl rounded-lg mx-8 my-8 bg-blue-50'>
      <Image src={avatar} alt='avatar picture' height='100' width='100' />

      <div>
        <p>{name}</p>

        <p>{email}</p>
      </div>
    </div>
  );
}

export default Userbox;
