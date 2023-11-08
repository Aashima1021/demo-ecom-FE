import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginImg from "../../assets/Login.png"
import GoogleSvg from "../../assets/Google.svg"
import TwitterSvg from "../../assets/twitter.svg"
import Input from "../../atoms/Input"

const Login = () => {
    return (
        <>
            <section className="loginForm bg-red-400 flex">
                <div className='bg-gray-600 w-full'>
                    <>
                        <div className=" flex items-center justify-center ">
                            <div className=" w-full overflow-hidden">
                                <div className="md:flex h-[588px] w-full">
                                    <div className='hidden md:flex w-1/2  '>
                                        <img className='object-top w-full object-cover' src={LoginImg} alt='Login' />
                                    </div>

                                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                        <div className="mb-10">
                                            <h1 className="font-bold text-[34px] text-gray-900">Sign In Page</h1>
                                        </div>

                                        {/* Continue with google and twitter button  */}
                                        <div className="mb-5 flex w-full xl:w-[526px] ">
                                            <button className="flex gap-2 justify-center py-2 items-center w-full border  border-lightBlack rounded-lg text-sm font-medium ">
                                                <img src={GoogleSvg} alt='googleSvg image' />
                                                <span className='text-purpleColor text-[16px]'>Continue with Google</span>
                                            </button>
                                        </div>

                                        <div className="mb-5 flex w-full xl:w-[526px] ">
                                            <button className="flex gap-2 justify-center py-2 items-center w-full border border-lightBlack rounded-lg text-sm font-medium ">
                                                <img src={TwitterSvg} alt='googleSvg image' />
                                                <span className='text-purpleColor text-[16px]'>Continue with Twitter</span>
                                            </button>
                                        </div>
                                        {/* Continue with google and twitter button  */}


                                        <div className='flex flex-col px-3'>
                                            {/* Email  */}
                                            <div className="flex -mx-3 ">
                                                <div className="w-full lg:w-[526px] mb-5">
                                                    <label htmlFor="" className="text-xs px-1">Username or email address</label>
                                                    <div className="flex">
                                                        <Input type="email" className="pl-6 py-2 focus:outline-lightBlack w-full rounded-lg border" id='email' />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Password  */}
                                            <div className="flex -mx-3  ">
                                                <div className="w-full lg:w-[526px] mb-5">
                                                    <label htmlFor="" className="text-xs px-1">Password</label>
                                                    <div className="flex">
                                                        <Input type="email"
                                                            //  type={`${hide ? "password" : "text"}`} 
                                                            className="pl-6 py-2 focus:outline-lightBlack w-full rounded-lg border"
                                                            id='password'
                                                        />

                                                    </div>
                                                    <Link to="/forgetPassword" className='text-sm text-semibold cursor-pointer text-end hover:text-purpleColor underline'>
                                                        Forget your password
                                                    </Link>
                                                </div>
                                            </div>


                                            <div className="flex -mx-3">
                                                <div className="w-full mb-5">
                                                    <Link to="/login" type="button" className="bg-purpleColor border text-lightGray rounded-lg text-sm px-10 py-2 text-center mr-3 md:mr-0 outline-none">Login</Link>
                                                </div>
                                            </div>
                                            <div className="text-lightBlack">Don't have an account?
                                                <NavLink to="/register" className=' cursor-pointer hover:text-purpleColor'>
                                                    Sign up
                                                </NavLink>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </section >
        </>

    )
}

export default Login