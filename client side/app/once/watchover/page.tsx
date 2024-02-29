import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const history = ({}) => {
    return (    
    
        <div className='bg-gradient-to-br from-slate-900 to-sky-700'>   
        <div className="z-10 ml-24 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
          <button className='mr-2  padding: 10px'>
            <Link href={'/'}></Link>
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

              className=""
              width={30}
              height={30} alt={''} />
            </a>
          </div>
        </div>

            <div className="max-w-192 mx-auto relative z-10 h-32 ml-30 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                <div className="md:flex">
                    
                <div className="card ">
                        <h1 className='ml-4 mt-2 font-bold'>总体密码强度预览</h1>
                        <div className="card-body flex">               
                            <div className="bg-green-600 ml-8 h-8 mt-4 rounded-l-full w-24"></div>
                            <div className="bg-lime-500  h-8 mt-4 w-80"></div>
                            <div className="bg-yellow-500  h-8 mt-4 w-36"></div>
                            <div className="bg-red-500  h-8 mt-4 w-12 rounded-r-full"></div>
                        </div>

                        <div className="card-body flex">
                            <div className="bg-green-600 ml-8 w-4 h-4 mt-4"> </div>
                            <h2 className='ml-2 mt-3'>很好</h2>
                            <div className="bg-lime-500 ml-8 w-4 h-4 mt-4"> </div>
                            <h2 className='ml-2 mt-3'>好</h2>
                            <div className="bg-yellow-500 ml-8 w-4 h-4 mt-4"> </div>
                            <h2 className='ml-2 mt-3'>一般</h2>
                            <div className="bg-red-500 ml-8 w-4 h-4 mt-4"> </div>
                            <h2 className='ml-2 mt-3'>弱</h2>
                        </div>                      
                    </div>
                </div>
            </div>
        <div className='flex mx-auto justify-center'>
            <div className="w-48 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10  rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                <div className="md:flex">
                    <div className="p-8">
                        <div className=" tracking-wide text-sm text-indigo-500 font-semibold">重复使用的密码</div>
                        <p className="mt-2 text-4xl text-white">32</p>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline">查看项目</a>                       
                    </div>
                </div>           
            </div>

            <div className="w-48 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10  rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
                <div className="md:flex">
                    <div className="p-8">
                        <div className=" tracking-wide text-sm text-indigo-500 font-semibold">易受攻击的密码</div>
                        <p className="mt-2 text-4xl text-white">15</p>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-gray-500 hover:underline">查看项目</a>                        
                    </div>
                </div>           
            </div>

            <div className="w-52 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0  dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10  rounded-xl shadow-md overflow-hidden  m-5 ">
                <div className="md:flex">
                    <div className="p-8">
                        <div className=" tracking-wide text-sm text-indigo-500 font-semibold">已经泄露的密码</div>
                        <p className="mt-2 text-4xl text-white"></p>                      
                        <a href="#" className="block mt-1 text-lg leadin-tight font-medium text-gray-500 hover:underline">查看项目</a>                   
                    </div>
                </div>           
            </div>
        </div>

            <div className=" mx-auto col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10  rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
                <div className="md:flex">
                   
                    <div className="p-7">
                       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">泄露报告</div>                        
                       <p className="mt-2 text-gray-500">与数据库对比</p>
                       <a href="#" className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">生成报告</a>
                    </div>
                </div>
            </div>
        </div>
            
            
    )
}

export default history;