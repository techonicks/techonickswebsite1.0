import React from 'react'
import { Triangle } from 'react-loader-spinner'

const FormSubmitLoader = () => {
  return (
    <div className='h-[200px] w-[300px] md:h-[300px] md:w-[400px] px-4 fixed top-[50vh] translate-y-[-50%] left-[50%] translate-x-[-50%]  flex justify-center items-center flex-col gap-5 z-40 bg-black'>
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