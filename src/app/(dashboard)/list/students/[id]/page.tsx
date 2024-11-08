import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import FormModal from '@/components/FormModal'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleStudentPage = () => {
  return (
    <div className='flex flex-col xl:flex-row flex-1 p-4 gap-4  m-4'>
        {/* //!LEFT */}
        <div className='w-full xl:w-2/3 '>
            {/* //!TOP */}
            <div className='flex flex-col lg:flex-row gap-4'>
                {/* //!INFO CARD */}
                <div className='bg-lamaSky p-6 px-4 rounded-md flex-1 flex gap-4'>
                    <div className='w-1/3'>
                    <Image 
                    className='w-36 h-36 rounded-full object-cover'
                    src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200" alt='' width={144} height={144}/>
                    </div>
                    <div className='w-2/3 flex flex-col justify-between gap-4'>
                    <div className='flex items-center justify-start w-full '>

                    <h1 className='text-xl font-semibold pr-4'  >random name</h1>
                    <FormModal table='student' type='update'/>
                    </div>
                    <p className='text-sm text-gray-500'>description Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                        <div className='w-full md:w-1/3 flex items-center gap-2 lg:w-full'>
                            <Image src="/blood.png" alt='' width={14} height={14}/>
                            <span>A+</span>
                        </div>
                        <div className='w-full md:w-1/3 flex items-center gap-2 lg:w-full'>
                            <Image src="/date.png" alt='' width={14} height={14}/>
                            <span>January 2002 55th</span>
                        </div>
                        <div className='w-full md:w-1/3 flex items-center gap-2 lg:w-full'>
                            <Image src="/mail.png" alt='' width={14} height={14}/>
                            <span>yahoo.com</span>
                        </div>
                        <div className='w-full md:w-1/3 flex items-center gap-2 lg:w-full'>
                            <Image src="/phone.png" alt='' width={14} height={14}/>
                            <span>099999999</span>
                        </div>

                    </div>
                    </div>
                </div>


                {/* //!SMALL CARD */}
                <div className='flex-1 flex gap-4 justify-between flex-wrap'>
                    {/* //!CARD */}
                    <div className='w-full bg-white p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[45%] 2xl:w-[46%]'>
                        <Image src="/singleAttendance.png" alt='single attandance' width={24} height={24} className='w-6 h-6 '/>
                        <div>
                            <h1 className='text-xl font-semibold '>90%</h1>
                            <span className='text-sm text-gray-400'>Attandance</span>
                        </div>
                    </div>
                      {/* //!CARD */}
                      <div className='w-full bg-white p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[45%] 2xl:w-[46%]'>
                        <Image src="/singleBranch.png" alt='single attandance' width={24} height={24} className='w-6 h-6 '/>
                        <div>
                            <h1 className='text-xl font-semibold '>70%</h1>
                            <span className='text-sm text-gray-400'>dhgsdzf</span>
                        </div>
                    </div>
                      {/* //!CARD */}
                      <div className='w-full bg-white p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[45%] 2xl:w-[46%]'>
                        <Image src="/singleLesson.png" alt='single attandance' width={24} height={24} className='w-6 h-6 '/>
                        <div>
                            <h1 className='text-xl font-semibold '>90%</h1>
                            <span className='text-sm text-gray-400'>Attandance</span>
                        </div>
                    </div>
                      {/* //!CARD */}
                      <div className='w-full bg-white p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[45%] 2xl:w-[46%]'>
                        <Image src="/singleClass.png" alt='single attandance' width={24} height={24} className='w-6 h-6 '/>
                        <div>
                            <h1 className='text-xl font-semibold '>90%</h1>
                            <span className='text-sm text-gray-400'>Attandance</span>
                        </div>
                    </div>

                </div>
            </div>
            {/* //!BOTTOM */}
            <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
                {/* //!Student SCHEDULE */}
                <h1>Student&apos; Schedule</h1>
                <BigCalendar/>
            </div>
        </div>
        {/* //!RIGHT */}
        <div className='w-full xl:w-1/3 '>
        <div className='bg-white p-4 rounded-md'>
            <h1 className='text-xl font-semibold '>Shortcuts</h1>
            <div className='mt-4 gap-4 flex flex-wrap text-xs text-gray-500 '>
                <Link href="/" className='p-3 rounded-md even:bg-lamaSky odd:bg-lamaYellow hover:brightness-90 '>Student&apos; Classes</Link>
                <Link href={`/list/teachers?classId=${2}`} className='p-3 rounded-md even:bg-lamaSky odd:bg-lamaYellow hover:brightness-90 '>Student&apos; Teachers</Link>
                <Link href={`/list/exams?classId=${`4`}`} className='p-3 rounded-md even:bg-lamaSky odd:bg-lamaYellow hover:brightness-90 '>Student&apos; Exams</Link>
                <Link href="/list/lessons?classId=2" className='p-3 rounded-md even:bg-lamaSky odd:bg-lamaYellow hover:brightness-90 '>Student&apos; Lessons</Link>
                <Link href={`/list/results?studentId=student2`} className='p-3 rounded-md even:bg-lamaSky odd:bg-lamaYellow hover:brightness-90 '>Student&apos; Results</Link>
                <Link href="/list/parents?search=15" className='p-3 rounded-md even:bg-lamaSky odd:bg-lamaYellow hover:brightness-90 '>Student&apos; Parents</Link>

            </div>

        </div>
        <Performance/>
            <Announcements/>
        </div>

    </div>
  )
}

export default SingleStudentPage