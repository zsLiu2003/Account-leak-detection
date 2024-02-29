'use client';
import React, { useState, ChangeEvent } from 'react';
import zxcvbn from 'zxcvbn';
import Image from 'next/image'
import Link from 'next/link';

const PasswordStrengthMeter = () => {
    const [value, setValue] = useState(0);
    const [msg, setMsg] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value);
        setValue(zxcvbn(e.target.value).guesses_log10);

    
    /*const [inputValue, setInputValue] = useState('');
        
    const handleChange2 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
            setInputValue(event.target.value);
          };
        
    const handleClick = () => {
            alert(inputValue);
          };
          */
    
   

    };

   
      

    return (
    
      <main className="flex min-h-screen bg-gradient-to-r from-slate-900 via-cyan-800 to-sky-700 flex-col items-center justify-between mt-0 shadow-lg">
        
            
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
          <button className='mr-2  padding: 10px'>
            <Link href={'/ttt'}></Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m13 8l-7 6l7 7"/><path d="M6 14h22.994c6.883 0 12.728 5.62 12.996 12.5c.284 7.27-5.723 13.5-12.996 13.5H11.998"/></g></svg>
          </button>
          <p className="fixed  top-0 flex  opacity-20  justify-center   from-zinc-200 pb-6 pt-8  dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">
            Created by&nbsp;
            <code className="font-mono ">造轮子的弱鸡们</code>
          </p>
          <div className="fixed bottom-0 left-0  flex h-48 w-full items-end items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
            >
           
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m7 8a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.193 4.193 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5c0-.17-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 12h-2m-7 2c-4.42 0-8 1.79-8 4v2h9.68a7 7 0 0 1-.68-3a7 7 0 0 1 .64-2.91c-.53-.06-1.08-.09-1.64-.09m8 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5Z"/>
           </svg>
            <Image
              src="/images/test.png"

              className="ml-2"
              width={30}
              height={30} alt={''} />
            </a>
          </div>
        </div>
        
        
        <div className="md:flex justify-center">
          <div className="p-6" style={{ letterSpacing: '0.1em' }} >
              <div className="uppercase tracking-wider text-5xl text-white text-center  font-semibold " style={{ textAlign: 'center' }}>
              你 的 账 户 被 泄 露 了 吗？
              </div>
          </div>
        </div>
             
      <div className='flex'>
        <span className='mr-2  padding: 10px'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"/></svg>
        </span>
        <input 
                type="text" 
                placeholder="请输入用户名"              
                className='w-96 px-4 h-7 bg-white rounded-md text-blue-800 text-base mb-1'
                value={msg}
                onChange={handleChange}
              ></input>
      </div>

      <div className='flex'>
        <span className='mr-2  padding: 10px'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></svg>
        </span>
          <input type="password" 
                  className="w-96 px-4 h-7 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black mb-1" 
                  placeholder="请输入密码"
                 >
          </input>
          
      </div>

          
       
        

        <div className="flex items-center justify-center  h-1/5 mb-0 mt-0">
              <button 
                onClick={() => alert('have been pwned')} 
                className="bg-sky-500 border-none text-white  text-2xs text-center items-center flex no-underline inline-block text-2xs mx-1 cursor-pointer w-96 rounded-md h-8 "
                style={{justifyContent: 'center',alignItems: 'center'}}
              >
              检 查 是 否 遭 到 泄 露
              </button>
            </div>
  
      </main>
      
        
    );
};

export default PasswordStrengthMeter;