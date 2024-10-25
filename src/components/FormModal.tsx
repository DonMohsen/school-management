"use client"
import Image from 'next/image';
import React from 'react'
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
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
      type === "create"
        ? "bg-lamaYellow"
        : type === "update"
        ? "bg-lamaSky"
        : "bg-lamaPurple";
  return (
    < button className={`${size} flex items-center justify-center rounded-full hover:brightness-75 ${bgColor}`}>
        <Image src={`/${type}.png`} alt={type} width={16} height={16}/>
    </button>
  )
}

export default FormModal