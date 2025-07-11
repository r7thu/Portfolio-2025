"use client"
import Image from "next/image";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from 'react-toastify';//step 1 for toast notification install and paste
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
   const [formData,setFormData]=useState({
        description:"",
        gmail:"",
    })

    const onChangeHandler =(e)=>{
        const name= e.target.name
        const value= e.target.value
        setFormData(target=>({...target,[name]:value}))
    }

     const onSubmitHandler = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('/api',formData)
            toast.success(response.data.msg)
            setFormData({
               description:"",
               gmail:"",
            })
        } catch (error) {
            
        }
    }




  return (
     <main>
      <ToastContainer
      theme="dark"
      />
      <div className="sm:w-[70vw] w-[90vw] sm:mt-14 mt-6 sm:mx-auto mx-auto h-dvh ">
        <div className="flex gap-7 sm:gap-10 items-center" >
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src="/PROFILE.jpg" className="w-full h-full  object-cover transition-transform duration-300 ease-in-out hover:scale-110" alt="" />
          </div>
          <div>
            <h1 className="text-2xl">RITHU</h1>
            <p className="text-gray-400">@riitthhu</p>
          </div>
        </div>

        {/* CONTENT */}

        <div className="flex text-[#a1a1a6] flex-col gap-5 mt-8 text-[14px]">
          <p>Hi, I'm <span> Rithuharshan </span>,  a 20-year-old Computer Science and Engineering student at <span> NIT Calicut </span>, living Wayanad, Kerala.</p>
          <p> I'm passionate about <span> full-stack development </span>and love working across both <span> frontend</span> and <span> backend </span>to  build web apps that actually work, are <span>easy to use</span>, and look good enough to make you forget how much coffee went into them</p>
          <p>When I&rsquo;m<span> not busy</span>, you&rsquo;ll usually find me watching movies, playing games, diving into<span> random tech experiments</span>, or catching up on some much-needed sleep.</p>
          <p>I keep <span>chasing ideas that turn into code</span>, half-finished prototypes, or late-night 'aha' moments—and sometimes, something<span> actually works!</span></p>
        </div>

        <div className="mt-10 sm:flex-row flex-col flex gap-5 sm:gap-10">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rithuu4@gmail.com&su=Inquiry%20from%20Portfolio&body=Hi%20Rithu%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20really%20impressed%20with%20your%20work.%20I%E2%80%99d%20love%20to%20get%20in%20touch%20regarding%20a%20potential%20opportunity.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D"  target="_blank" rel="noopener noreferrer"  className="bg-[#18181B] relative shrink-0 flex gap-3 items-center w-fit px-4 sm:px-3 sm:py-1 py-2 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px]
            group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
            ">
            {/* <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/> */}
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
            <div className="relative">
            <span className="relative sm:mt-1 mt-[6px] inline-flex rounded-full h-3 w-3 bg-[#ff3576] ping-fade"></span>
            <span className="absolute left-0 top-[6px] sm:top-[4px] inline-flex rounded-full h-3 w-3 bg-[#ff3576] "></span>
            </div>
            Available for new oppurtunities
            </a>
          <a href="/resume.docx" download className="bg-[#18181B] relative shrink-0 flex gap-3 w-fit px-4 sm:px-3 sm:py-1 py-2 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          ">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-download text-gray-400"
            aria-hidden="true"
          >
            <path d="M12 15V3" />
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="m7 10 5 5 5-5" />
          </svg>

            Download CV</a>
        </div>

        <hr className="mt-10 mb-5 h-px border-0 bg-gradient-to-r from-transparent via-[#808080] to-transparent" />
        
          <p className="my-4 text-[15px] text-[#a1a1a6]">Where to find me (digitally) if you wish to</p>
          <div className="flex gap-3 flex-wrap">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rithuu4@gmail.com" target="_blank"  rel="noopener noreferrer"  className=" relative shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          ">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/mail.svg" className="w-4" alt="" />
            Email Me</a>
          <a href="https://www.instagram.com/riitthhu/" target="_blank" rel="noopener noreferrer" className="relative shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          ">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/instagram.svg" className="w-4" alt="" />
            Instagram</a>
          <a href="https://github.com/r7thu" target="_blank" rel="noopener noreferrer" className="relative shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          ">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
            <img src="/github (1).svg" className="w-4" alt="" />
            GitHub</a>
          <a href="https://www.linkedin.com/in/rithu-harshan-a55993323/" target="_blank" rel="noopener noreferrer" className="relative shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          ">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/linkedin.svg" className="w-4" alt="" />
            Linkedin</a>
          <a href="https://x.com/riitthhu" target="_blank" rel="noopener noreferrer" className="relative shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          ">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/twitter.svg" className="w-4" alt="" />
             {/* <Twitter className="w-5 h-5 text-blue-500" /> */}
            Twitter</a>
          </div>

        <hr className="mt-10 mb-8 h-px border-0 bg-gradient-to-r from-transparent via-[#808080] to-transparent" />

        <div>

          <div className="flex justify-start gap-6 items-center">
            <h1 className="text-[32px]">SKILLS</h1>
            <p className="text-[#4c4c4e] mt-2 text-[14px]">Tools and frameworks I work with</p>
          </div>

          <p className="mt-2 text-[15px] text-[#a1a1a6]">These are the tools I&rsquo;ve picked up along the way—and the list keeps growing as I dive deeper into development.</p>
        

          <p className="text-[#a1a1a6] my-5">{"<LANGUAGES/>"}</p>
          <div className="flex gap-3 flex-wrap">
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/javascript.svg" className="w-4" alt="" />
            JavaScript</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/c.svg" className="w-4" alt="" />
            C</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
            <img src="/cpp.svg" className="w-4" alt="" />
            C++</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/html.svg" className="w-4" alt="" />
            HTML</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/css.svg" className="w-4" alt="" />
            CSS</button>
          </div>

          <p className="text-[#a1a1a6] my-5">{"<FRAMEWORKS/LIBRARIES/>"}</p>
          <div className="flex gap-3 flex-wrap">
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/reactjs.svg" className="w-4" alt="" />
            React</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/nextjs.svg" className="w-4" alt="" />
            Next.js</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/tailwind.svg" className="w-4" alt="" />
            TailwindCSS</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/gsap.svg" className="w-4" alt="" />
            GSAP</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/axios.png" className="w-[25px] h-[20px]" alt="" />
            Axios</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px] items-center  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)] text-[13.5px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/nodemailer.png" className="w-[22px] h-[15px] mb-[2px]" alt="" />
            NodeMailer</button>
          </div>

          <p className="text-[#a1a1a6] my-5">{"<BACKEND & RUNTIME/>"}</p>
          <div className="flex gap-3">
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/nodejs.svg" className="w-4" alt="" />
            Node.js</button>
          </div>

          <p className="text-[#a1a1a6] my-5">{"<DATABASE/>"}</p>
          <div className="flex gap-3">
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px]
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/mongodb.svg" className="w-4" alt="" />
            MongoDB</button>
          </div>
          
          <p className="text-[#a1a1a6] my-5">{"<DEVELOPER TOOLS/>"}</p>
          <div className="flex gap-3 flex-wrap">
          <button className="shrink-0 bg-[#18181B]  px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px] items-center
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/git.svg" className="w-4" alt="" />
            Git</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px] items-center
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/github.svg" className="w-4" alt="" />
            GitHub</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px] items-center
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/vscode.svg" className="w-4" alt="" />
            VS Code</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px] items-center
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/vercel.svg" className="w-4" alt="" />
            Vercel</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px] items-center
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/clerk3.svg" className="w-4" alt="" />
            Clerk Auth</button>
          <button className="shrink-0 bg-[#18181B] px-3 py-1 rounded-[10px]  shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]  text-[14px] flex gap-[10px] items-center
          group hover:shadow-xl hover:ring-1 hover:ring-zinc-600 duration-300 overflow-hidden
          relative">
            <div className="h-[50px] w-4 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute bottom-0 -left-10 blur-sm -rotate-45 group-hover:left-[150%] duration-600"/>
             <img src="/cloud.svg" className="w-4" alt="" />
            Cloudinary</button>
          </div>

        </div>

        <hr className="mt-10 mb-8 h-px border-0 bg-gradient-to-r from-transparent via-[#808080] to-transparent" />
        <div>
          <div className="flex justify-start gap-6 items-center">
            <h1 className="text-[32px]">PROJECTS</h1>
            <p className="text-[#4c4c4e] mt-3 text-[15px]">Here are some of my Projects</p>
          </div>
        </div>
        {/* <hr className="mt-10 h-px border-0 bg-[#808080]"/> */}
        <a href="https://www.zosmoox.in/" className=" mt-10 flex flex-col sm:flex-row justify-center bg-[#151414] px-3 rounded-2xl py-3 items-center sm:gap-4 gap-2">
          <img src="/projectzosmoox.png" className="rounded-md object-cover w-full sm:h-60 h-40" alt="" />
          <div>
            <h2 className="text-2xl">E-Commerce Website</h2>
            <p className="text-[#a1a1a6] text-[13px]">Zosmoox is a full-stack e-commerce site built with <span> Next.js</span>,<span> TailwindCSS</span>,<span> Node.js</span>, and <span>MongoDB</span>. It includes Clerk-powered auth, a slick<span> admin panel</span>, dynamic products, a smart cart, and Cloudinary for images — all running smooth on Vercel. </p>
          </div>
        </a>

        <form onSubmit={onSubmitHandler}  className="sm:w-[60%] lg:w-[37%] w-[75vw] md:w-[50%] flex flex-col items-center mx-auto sm:mt-20 mt-10 py-4 bg-[#151414] rounded-xl">
          <p className="mb-5">Write a Review</p>
          <input value={formData.gmail} placeholder='Your Gmail'   onChange={onChangeHandler} type="text" name='gmail' className="px-3 mb-3 py-2 bg-[#202021] w-[90%] rounded-md" />
          
          <textarea
          value={formData.description}
          placeholder="Write Your Review"
          onChange={onChangeHandler}
          name="description"
          
          className="bg-[#202021] h-32 w-[90%] rounded-lg p-2 resize-none text-white placeholder:text-gray-400"
          />
          <button className="bg-[#545468] mt-3 px-3 py-1 rounded active:bg-gray-200">SUBMIT</button>
        </form>


        <div className="pb-5">
         <h1 className='text-[24px] my-7 mt-16'>rithu.dev</h1>
          <p className='text-[15px] text-[#545468] font-jetbrains pb-6'>That&rsquo;s all, folks | This site was crafted with vision, built with caffeine, patched with duct tape, and launched on hope. Errors were ignored, bugs tamed (briefly), and features… creatively defined.</p>
        </div>
      </div>
      {/* <div className="h-dvh"></div> */}
      {/* <div className="h-dvh"></div> */}
      {/* <div className="h-dvh"></div> */}
      {/* <Footer/> */}

    </main>
  );
}
