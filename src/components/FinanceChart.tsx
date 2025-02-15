"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinanceChart = () => {
  const data = [
    {
      name: "Jan",
      income: 4000,
      expense: 2400,
    },
    {
      name: "Feb",
      income: 3000,
      expense: 1398,
    },
    {
      name: "Mar",
      income: 2000,
      expense: 9800,
    },
    {
      name: "Apr",
      income: 2780,
      expense: 3908,
    },
    {
      name: "May",
      income: 1890,
      expense: 4800,
    },
    {
      name: "Jun",
      income: 2390,
      expense: 3800,
    },
    {
      name: "Jul",
      income: 3490,
      expense: 4300,
    },

    {
      name: "Aug",
      income: 3490,
      expense: 4300,
    },

    {
      name: "Sep",
      income: 3490,
      expense: 4300,
    },

    {
      name: "Oct",
      income: 3490,
      expense: 4300,
    },

    {
      name: "Nov",
      income: 3490,
      expense: 4300,
    },

    {
      name: "Dec",
      income: 3490,
      expense: 4300,
    },
  ];
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Attendance</h1>
        <Image src="/moreDark.png" alt="more..." width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d6db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis tick={{ fill: "#d1d6db" }} tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend
          
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px", fontWeight:"bold"  }}
          />

          <Line dot={false} type="monotone" dataKey="income" stroke="#c3ebfa" strokeWidth={4} />
          <Line dot={false} type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
