'use client'

import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import zxcvbn from "zxcvbn";
import Image from 'next/image'

const Contacts = () => {
  const [value, setValue] = useState(0);
    const [msg, setMsg] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value);
        setValue(zxcvbn(e.target.value).guesses_log10);
    }
  return (

  
    <div className="bg-gradient-to-r from-cyan-950 via-cyan-800 to-cyan-600">     
    
    {
    <><div className="w-68 top-0 h-screen overflow-y-scroll fixed rounded left-0 bg-transparent p-5">
      {<>
        <button className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://a.1passwordusercontent.com/template/001.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-sm font-medium dark:text-white-800">root</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">admin</span>
          </div>
        </button>
        <button className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/dl.reg.163.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-sm  font-medium dark:text-white-800">spn1229@163.com</strong>
          </div>
        </button>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://a.1passwordusercontent.com/template/004.png">
          </img>
          <div className="flex flex-col">
            <strong className=" text-sm font-medium dark:text-white-800">心雨书</strong>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/login.live.com.png" role="presentation">
          </img>
          <div className="flex flex-col">
            <strong className="text-sm font-medium dark:text-white-800">15502940820</strong>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-sm font-medium dark:text-white-800">tsm</strong>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/help.steampowered.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-sm font-medium dark:text-white-800">spn21</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-slate-400 ">steam username</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/login.docker.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">spn</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">docker</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/passwordreset.microsoftonline.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/account.xiaomi.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img className="w-12 h-12 rounded-full" src="https://c.1password.com/richicons/images/login/120/dl.reg.163.com.png">
          </img>
          <div className="flex flex-col">
            <strong className="text-slate-900 text-sm font-medium dark:text-white-200">Ray Flint</strong>
            <span className="text-slate-500 text-sm font-medium dark:text-white-400">Technical Advisor</span>
          </div>
        </div>
       
     

      </>}
    </div>


      <div className="flex  justify ">
        <div className="z-10 max-w-5xl w-full lg:w-auto">
          <div className="flex items-center">
            <button className=" ml-72 mr-20  padding-10">
            <Link href={'/ttt'}></Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m13 8l-7 6l7 7"/><path d="M6 14h22.994c6.883 0 12.728 5.62 12.996 12.5c.284 7.27-5.723 13.5-12.996 13.5H11.998"/></g></svg>
            </button>
          </div>
        </div>

        <button className="flex ml-32 mr-60" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M16 3a3 3 0 0 1 2.995 2.824L19 6v10h.75c.647 0 1.18.492 1.244 1.122l.006.128V19a3 3 0 0 1-2.824 2.995L18 22H8a3 3 0 0 1-2.995-2.824L5 19V9H3.25a1.25 1.25 0 0 1-1.244-1.122L2 7.75V6a3 3 0 0 1 2.824-2.995L5 3h11Zm0 2H7v14a1 1 0 1 0 2 0v-1.75c0-.69.56-1.25 1.25-1.25H17V6a1 1 0 0 0-1-1Zm3 13h-8v1c0 .35-.06.687-.17 1H18a1 1 0 0 0 1-1v-1Zm-7-6a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Zm2-4a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2h4ZM5 5a1 1 0 0 0-.993.883L4 6v1h1V5Z"/></g></svg>
          生成报告
        </button>

        <div className="ml-56 mr-4 flex" >
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m7 8a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.193 4.193 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5c0-.17-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 12h-2m-7 2c-4.42 0-8 1.79-8 4v2h9.68a7 7 0 0 1-.68-3a7 7 0 0 1 .64-2.91c-.53-.06-1.08-.09-1.64-.09m8 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5Z"/>
           </svg>
            <Image
              src="/images/test.png"

              className="ml-2"
              width={30}
              height={30} alt={''} />
            
        </div>

        
      </div>
              
      <div className="w-80 py-12 mx-auto bg-transparent rounded-xl  overflow-hidden md:max-w-2xl m-4">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                    <img className="w-20 h-20 rounded-full" src="https://c.1password.com/richicons/images/login/120/dl.reg.163.com.png">
                    </img>
                    </div>
                    <div className="p-3 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5 9.75v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V9.75a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1 0-1.5h2.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V9.75C4 8.784 4.784 8 5.75 8h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25Zm7.03-8.53l3.25 3.25a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215l-1.97-1.97v10.69a.75.75 0 0 1-1.5 0V3.56L9.28 5.53a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0Z"/></svg>
                    
                    </div>
                                     
                </div>          
            </div>
            
            <div className="pt-0  pb-8 text-center text-blue">
                  用户：
                  <input 
                    type="text" 
                    className="w-60 h-6 bg-transparent rounded-md text-white-800 "
                    
                  />
            </div>


            <div className='py-1 text-center text-blue'>
              密码：
              <input 
                type='password'
                className='w-60 h-6 bg-transparent rounded-md text-white-800'
                value={msg}
                onChange={handleChange}
              ></input>
            </div>
          
            <div  className='flex items-center justify-center pt-4 text-center text-blue'>
               <span>强度：</span>
              <meter
                className="w-60 h-10 rounded-md  text-white-800 ml-2"
                min="0"
                max="12"
                
                
                value={ 323}
            ></meter>
            </div>

            <div className='py-8 text-center text-blue'>
              网站：
              <input
                type='text'
                className='w-60 h-6 bg-transparent rounded-md text-white-800'
                
              ></input>
            </div>

            

            <div className="flex items-center justify-center h-1/5 py-3">
              <button 
                onClick={() => alert('have been pwned')} 
                className="bg-transparent border-none text-white  text-2xs text-center items-center flex no-underline inline-block text-2xs mx-1 cursor-pointer w-32 h "
              >
              重置对应网站密码
              </button>
            </div>

            <div className="flex items-center justify-center h-1/5 py-5">
              <button 
                onClick={() => alert('have been pwned')} 
                className="bg-transparent border-none text-white  text-2xs  items-center flex no-underline inline-block text-2xs text-center mx-1 cursor-pointer w-32 h "
              >
              查看项目修改历史
              </button>
            </div>

          
          </> 
    }
    </div>

  )
}

export default Contacts;

