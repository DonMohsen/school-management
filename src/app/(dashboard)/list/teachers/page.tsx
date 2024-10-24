import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const TeacherList = () => {
  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Teacher ID",
      accessor: "teacherId",
      className: "hidden md:table-cell",
    },
    {
      header: "Subjects",
      accessor: "subjects",
      className: "hidden md:table-cell",
    },
    {
      header: "Classes",
      accessor: "classes",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
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
    const renderRow=(item:any)=>(
      <tr key={item.id}>
        <td className="flex  items-center p-4 gap-4">


        <Image src={item.photo} alt="photo" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover"/>
        <div className="flex flex-col ">
          <h3 className="font-semibold">{item.name}</h3>
          {item.email?(
          <p className="text-gray-500 text-sm">{item?.email}</p>
        ):(          <p className="text-gray-500 text-sm">No Email ...</p>
        )}

        </div>
        </td>
        <td  className="hidden md:table-cell">
          {item.teacherId}
        </td>
        <td  className="hidden md:table-cell">
          {item.classes.join(",")}
        </td>
        <td  className="hidden md:table-cell">
          {item.subjects.join(",")}
        </td>
        <td  className="hidden md:table-cell">
          {item.phone}
        </td>
        <td  className="hidden md:table-cell">
          {item.address}
        </td>
        <td>
          <div className="flex items-center gap-2 ">
            <Link href={`/list/teachers/${item.id}`}>
            <button className="flex items-center justify-center w-7 h-7 rounded-full bg-lamaSky">

            <Image src="/view.png" alt="view" width={16} height={16}/>
            </button>
            {role==='admin'&&
              <button className="flex items-center justify-center w-7 h-7 rounded-full bg-lamaPurple">

              <Image src="/delete.png" alt="view" width={16} height={16}/>
              </button>
            }

            </Link>
          </div>
        </td>
      </tr>
    )
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* //!TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All teachers</h1>
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
            <button className="w-8 h-8 flex items-center justify-center md:hover:brightness-75 rounded-full bg-lamaYellow">
              <Image src="/create.png" alt="add" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* //!LIST */}
      <Table columns={columns} renderRow={renderRow} data={teachersData}/>
      {/* //!PAGINATION */}
      <Pagination/>
    </div>
    
    
  );
};

export default TeacherList;
