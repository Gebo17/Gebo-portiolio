import React from 'react'
import { COREVALUES } from "../../../constants";
import { FadeUp } from '@/components';

const CoreValues = () => {
  return (
    <div className='px-4 flex justify-center items-center'>
      <FadeUp>
        <div className="mt-4 shadow-lg shadow-red-200 rounded-md p-4 max-w-[350px]">
            {
              COREVALUES.map( (value, index) => (
                <div className='flex gap-2' key={index}>
                   <span>0{index + 1}</span>
                   <p> {value} </p>
                </div>
              )) 
            }
        </div>

      </FadeUp>
    </div>
  )
}

export default CoreValues