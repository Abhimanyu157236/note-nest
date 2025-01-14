import React from 'react';
import logo from '../assets/note-nest-logo.jpg';

const LoadingPage = () => {
  return (
    <div className='min-w-[600] h-screen flex justify-center items-center bg-black '>
         <img src={logo} alt="Note Nest logo"/>
    </div>
  );
}


export default LoadingPage;
