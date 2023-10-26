import React, { useState } from 'react'

const Switcher12 = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
    <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
    <input
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        className='sr-only'
    />
    <span className='label flex items-center text-sm font-medium text-black'>
        Light
    </span>
    <span
        className={`slider mx-2 flex h-6 w-[40px] items-center rounded-full p-1 duration-200 ${
        isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
        }`}
    >
        <span
        className={`dot h-4 w-4 rounded-full bg-white duration-200 ${
            isChecked ? 'translate-x-[17px]' : ''
        }`}
        ></span>
    </span>
    <span className='label flex items-center text-sm font-medium text-black'>
        Dark
    </span>
</label>
    </>
  )
}

export default Switcher12