"use client";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import Image from "next/image";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "aaa",
    time: 2024,
    describtiun: "aaadis",
  },
  {
    id: 2,
    title: "bbb",
    time: 2024,
    describtiun: "aaadis",
  },
  {
    id: 3,
    title: "ccc",
    time: 2024,
    describtiun: "aaadis",
  },
];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className=" bg-white p-4 rounded-md">

    <Calendar className="react-calendar" onChange={onChange} value={value} />
    <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-5">Events</h1>
        <Image src="/moreDark.png" alt="more..." width={20} height={20}/>
    </div>
    <div className="flex flex-col gap-4">
        {events.map((event)=>(
            <div key={event.id}
            className=" p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            >
                <div className="flex items-center justify-between">
                    <h1 className=" font-semibold text-gray-600 ">{event.title}</h1>
                    <span className="text-gray-300 text-xs ">{event.time}</span>

                </div>
                <p className="mt-2 text-sm text-gray-400">{event.describtiun}</p>

            </div>
        ))}

    </div>
    </div>
  );
};

export default EventCalendar;
