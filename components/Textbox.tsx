import React from 'react';

function refreshPage() {
  window.location.reload();
}

function Textbox() {
  return (
    <div className='text-xl py-6 px-8 flex justify-center '>
      <div className='content-center'>
        <button onClick={refreshPage}>
          <p className='shadow-2xl display: inline-block p-6 rounded-lg bg-blue-50'>
            This is a web application using the https://randomuser.me/ api.
            Press here to refresh and see 5 new random users.
          </p>
        </button>
      </div>
    </div>
  );
}

export default Textbox;
