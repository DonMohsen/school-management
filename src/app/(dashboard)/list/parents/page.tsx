import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, studentsData, teachersData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEMS_PER_PAGE } from "@/lib/settings";
import { getUserId, getUserRole } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { Parent, Prisma, Student } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ParentList = Parent & { students: Student[] };

const ParentsList =async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
    const role=await getUserRole();
      const currentUserId=await getUserId();
  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Students",
      accessor: "students",
      className: "hidden md:table-cell",
    },
    
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden md:table-cell",
    },
    
    {
      header: "Address",
      accessor: "address",
      className: "hidden xl:table-cell",
    },
    ...(role === "admin"
      ? [
          {
            header: "Actions",
            accessor: "action",
          },
        ]
      : []),
  ];
    
const renderRow = (item: ParentList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
  >
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">
      {item.students.map((student) => student.name).join(",")}
    </td>
    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormModal table="parent" type="update" data={item} />
            <FormModal table="parent" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);

  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  // URL PARAMS CONDITION

  const query: Prisma.ParentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.parent.findMany({
      where: query,
      include: {
        students: true,
      },
      take: ITEMS_PER_PAGE,
      skip: ITEMS_PER_PAGE * (p - 1),
    }),
    prisma.parent.count({ where: query }),
  ]);

  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* //!TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        {/* //!SEARCHBAR */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center justify-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center md:hover:brightness-75 rounded-full bg-lamaYellow">
              <Image
                src="/filter.png"
                alt="filterlist"
                width={14}
                height={14}
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center md:hover:brightness-75 rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="sortlist" width={14} height={14} />
            </button>
            {role==="admin"&&(

                
          
            <FormModal table="parent" type="create"/>

            )
            }
          </div>
        </div>
      </div>
      {/* //!LIST */}
      <Table columns={columns} renderRow={renderRow} data={data}/>
      {/* //!PAGINATION */}
      <Pagination count={count} page={p}/>
    </div>
    
    
  );
};

export default ParentsList;
