import React from 'react';
import Image from 'next/image';

function Userbox({ name, avatar, email }: any) {
  return (
    <div>
      <Image src={avatar} alt='avatar picture' height='100' width='100' />

      <div>
        <p>{name}</p>

        <p>{email}</p>
      </div>
    </div>
  );
}

export default Userbox;
