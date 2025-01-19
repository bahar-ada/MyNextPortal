"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import MyDatePicker from "@/components/MyDatePicker";
import CustomDataTable from "@/components/DataTable/CustomDataTable";
import { GithubIcon } from "@/components/icons";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { TbPentagon } from "react-icons/tb";
import { RiMovie2Line } from "react-icons/ri";
import { BiSolidMoviePlay } from "react-icons/bi";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="mt-8 flex flex-row items-center justify-center gap-4 px-2">
        <Card className="py-4 w-1/3 h-96">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
           
            <FaGit className="size-32 w-20 h-20 md:w-10 md:h-10" />
            <h4 className="font-bold text-large">گیت</h4>
          </CardHeader>
          <CardBody className="flex items-center flex-col overflow-visible py-2">

            <p className="flex items-center text-center text-xs justify-center  py-4  md:text-xl md:leading-normal">

              سرویس میزبانی وب برای پروژه هایی که از این سرویس سورس کنترل استفاده میکنند

            </p>

          </CardBody>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">آموزش</p>
          <Link
              href="https://scm.msc.ir" target='_blank' rel='noopener noreferrer'
              className="flex items-center gap-5 rounded-lg transition ease-in-out delay-150 bg-cyan-700 px-6 py-3 text-sm font-medium text-white hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-cyan-900 md:text-base"
            >

               <FaGithub className="animate-bounce w-5 md:w-6" />
            </Link>
          </CardFooter>
        </Card>

        <Card className="py-4 w-1/3 h-96">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">

            <TbPentagon className="size-32 w-20 h-20 md:w-10 md:h-10" />
            <h4 className="text-tiny text-white/80">نکسوس</h4>
          </CardHeader>
          <CardBody className="flex items-center overflow-visible py-2">

            <p className="flex items-center text-center justify-center text-xl py-4 md:text-xl md:leading-normal">

              سرویس میزبانی کتابخانه ها و وابستگی های لازم برای برنامه نویسی و توسعه نرم افزار

            </p>

          </CardBody>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">نکسوس</p>
            <Link
              href="https://art.msc.ir" target='_blank' rel='noopener noreferrer'
              className="flex items-center gap-5 rounded-lg transition ease-in-out delay-150 bg-cyan-700 px-6 py-3 text-sm font-medium text-white hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-cyan-900 md:text-base"
            >
              <GoDatabase className=" animate-bounce w-5 md:w-6" />
            </Link>
          </CardFooter>
        </Card>

        <Card className="py-4 w-1/3 h-96">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            
            <RiMovie2Line className="size-32 w-20 h-20 md:w-10 md:h-10" />
            <h4 className="font-bold text-tiny">فیلمهای آموزشی </h4>
          </CardHeader>
          <CardBody className="flex items-center overflow-visible py-2">

            <p className="flex items-center text-center justify-center text-xl py-4 md:text-xl md:leading-normal">
              راهنمای تصویری استفاده از امکانات محیط توسعه
            </p>
          </CardBody>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">آموزش</p>
            <Link
              href="/courses"
              className="flex items-center gap-5 rounded-lg transition ease-in-out delay-150 bg-cyan-700 px-6 py-3 text-sm font-medium text-white hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-cyan-900 md:text-base"
            >
              <BiSolidMoviePlay className=" animate-bounce w-5 md:w-6" />
            </Link>
          </CardFooter>
        </Card>

      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <MyDatePicker />
        </Snippet>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <CustomDataTable />
        </Snippet>
      </div>
    </section>
  );
}
