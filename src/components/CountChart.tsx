"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Total",
        count: 110,
        fill: "white",
      },
  {
    name: "Girls",
    count: 50,
    fill: "#CFCEFF",
  },
  {
    name: "Boys",
    count: 60,
    fill: "#FAE27C",
  }

];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* //!title */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="more..." width={20} height={20} />
      </div>
      {/* //!chart */}
      <div className="relative w-full h-[75%]">
        <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/maleFemale.png" alt="maleFemale" width={50} height={50}/>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
      {/* //!bottom of chart */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold ">1.234</h1>
          <h2 className="text-xs text-gray-300">Boys(55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaPurple rounded-full" />
          <h1 className="font-bold ">1.234</h1>
          <h2 className="text-xs text-gray-300">girls(55%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
