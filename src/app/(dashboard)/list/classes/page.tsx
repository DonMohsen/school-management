import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const ClassesList = () => {
  const columns = [
    {
      header: "Class name",
      accessor: "classname",
    },
    {
      header: "Capacity",
      accessor: "capacity",
      className: "hidden md:table-cell",
    },
    {
      header: "Grade",
      accessor: "grade",
      className: "hidden md:table-cell",
    },
    {
      header: "Supervisor",
      accessor: "supervisor",
      className: "hidden md:table-cell",
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
      <tr 
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
       key={item.id}>
        <td className="flex  items-center p-4 gap-4">


        <div className="flex flex-col ">
          <h3 className="font-semibold">{item.name}</h3>
         

        </div>
        </td>
        <td  className="hidden md:table-cell">
          {item.capacity}
        </td>
        <td  className="hidden md:table-cell">
          {item.grade}
        </td>
        <td  className="hidden md:table-cell">
          {item.supervisor}
        </td>
      
        <td>
          <div className="flex items-center gap-2 ">
          
            {role==='admin'&&
              <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
            </>
            }

          </div>
        </td>
      </tr>
    )
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* //!TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
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

<FormModal table="class" type="create" />

            )}
          </div>
        </div>
      </div>
      {/* //!LIST */}
      <Table columns={columns} renderRow={renderRow} data={classesData}/>
      {/* //!PAGINATION */}
      <Pagination/>
    </div>
    
    
  );
};

export default ClassesList;
