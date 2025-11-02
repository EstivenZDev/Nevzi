import React from 'react'

interface ButtonBlackProps{
    content: string;
    onclick?: ()=>void
}


export const ButtonBlack = ({content,onclick}:ButtonBlackProps) => {



  return (
    <>
        <button className='bg-black rounded-4xl text-white p-3 w-40 font-light cursor-pointer' onClick={onclick}>{content}</button>
    </>
  )
}

export default ButtonBlack
