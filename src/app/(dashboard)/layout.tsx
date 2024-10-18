import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { PiCaretUpDownBold } from "react-icons/pi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex relative">
    <div className="absolute bottom-[50%] right-0">
        <PiCaretUpDownBold width={10} height={10} className="w-5 h-5 text-slate-500"/>

        </div>
    
  {/* //!left     */}
 
  <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-auto flex flex-col">
    <Navbar/>
  {children}
  </div>
  {/* // !right */}
  <div
  style={{direction:"rtl"}}
  className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 max-h-screen overflow-y-auto scrollbar-thin overflow-x-hidden hide-scrollbar  " >
  <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/National_University_of_Skills.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School Management</span>
        </Link>
        <Menu />
        
  </div>
    </div>;
}