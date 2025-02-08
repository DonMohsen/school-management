import prisma from '@/lib/prisma'
import Image from 'next/image'
import React from 'react'

const UserCard =async ({type}:{type:"admin"|"teacher"|"student"|"parent"}) => {
  const modelMap:Record<typeof type,any>={
admin:prisma.admin,
parent:prisma.parent,
student:prisma.student,
teacher:prisma.teacher,

  }
  const data=await modelMap[type].count()
  console.log(data);
  
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaSky p-4 flex-1 min-w-[130px]'>
      <div className=' items-center flex justify-between'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600 font-bold'>
          2024 / 25
          </span>
        <Image className='cursor-pointer hover:brightness-75 transition-all duration-150' src="/more.png" alt='more...' width={20} height={20}/>

      </div>
      <h1 className='text-2xl font-semibold my-4'>{data}</h1>
      <h2 className=' capitalize text-sm font-medium text-gray-500'>{type}</h2>
    </div>
  )
}

export default UserCard