"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom';
import SubjectForm from './forms/SubjectForm';
// import TeacherForm from './forms/TeacherForm';
// import StudentForm from './forms/StudentForm';
// import SubjectForm from './forms/SubjectForm';
// import ExamForm from './forms/ExamForm';
// import ClassForm from './forms/ClassForm';
const ClassForm=dynamic(()=>import("./forms/ClassForm"),{
  loading:()=><h1>Loading...</h1>
})
// const deleteActionMap = {
//   subject: deleteSubject,
//   class: deleteClass,
//   teacher: deleteTeacher,
//   student: deleteStudent,
//   exam: deleteExam,
// // TODO: OTHER DELETE ACTIONS
//   parent: deleteSubject,
//   lesson: deleteSubject,
//   assignment: deleteSubject,
//   result: deleteSubject,
//   attendance: deleteSubject,
//   event: deleteSubject,
//   announcement: deleteSubject,
// };

type TableEnum = 
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcement";

const FormModal = ({table,type,data,id}:
    {table:TableEnum;
        type: "create" | "update" | "delete";
        data?: any;
        id?: number | string;
    }
) => {
  const Form = () => {
    // const [state, formAction] = useFormState(deleteActionMap[table], {
    //   success: false,
    //   error: false,
    // });

    // const router = useRouter();

    // useEffect(() => {
    //   if (state.success) {
    //     toast(`${table} has been deleted!`);
    //     setOpen(false);
    //     router.refresh();
    //   }
    // }, [state, router]);
    return type==="delete"&& id?(
      <form action="" className='p-4 flex flex-col gap-4'>
        <span className='text-center font-medium p-4 '>All data will be deleted not temprary but peeermenantly, are you sure to delete this {table}?</span>
      <button className='bg-red-700 text-white rounded-md border-none py-2 hover:brightness-125 w-max px-10 self-center'>Delete</button>
      </form>
    ):
    (
      // "create or update form"
      <SubjectForm  type='create' />

    )

  }
  const [open, setOpen] = useState(false);

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
      type === "create"
        ? "bg-lamaYellow"
        : type === "update"
        ? "bg-lamaSky"
        : "bg-lamaPurple";
  return (
    <>
    <button
    className={`${size} flex items-center justify-center rounded-full hover:brightness-75 ${bgColor}`}
    onClick={() => setOpen(true)}
  >
    <Image src={`/${type}.png`} alt="" width={16} height={16} />
  </button>
  {open && (
    <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
        <Form />
        
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <button className='bg-red-400 hover:bg-red-500 rounded-full flex items-center justify-center p-2'>

          <Image src="/close.png" alt="" width={14} height={14} className='text-black fill-black'  />
          </button>
        </div>
      </div>
    </div>
  )}
  </>
  )

}
export default FormModal;