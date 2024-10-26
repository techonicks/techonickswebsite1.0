"use client"
import React from 'react'
import { Triangle } from 'react-loader-spinner'

const FormSubmitLoader = () => {
  return (
    <div className='h-screen w-screen px-4 fixed top-[50vh] translate-y-[-50%] left-[50%] translate-x-[-50%]  flex justify-center items-center flex-col gap-5 z-40 bg-black/50 rounded backdrop-blur-sm'>
        <Triangle
        visible={true}
        // height="200"
        // width="200"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass="div"
      />
      <span className=''>
        Your response is being submitted
      </span>
    </div>
  )
}

export default FormSubmitLoader