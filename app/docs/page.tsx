import { title } from "@/components/primitives";
import { SiNuget } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { SiNpm } from "react-icons/si";

export default function DocsPage() {
  return (
    <div className='w-full rounded-md p-5 bg-slate-600'>
      <div className=" flex justify-center grow flex-col gap-4 md:flex-row mr-5">
        <div className=" flex flex-col justify-center justify-items-center items-center gap-4 rounded-lg bg-stone-200 px-6 py-10 md:w-2/5 md:px-20">
          <SiNpm className="size-32 w-20 h-20 md:w-10 md:h-10 bg-slate-600" />

          <p className={`dir-rtl text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            نحوه تنظیم دریافت کتابخانه های npm  از نکسوس

          </p>
          <video controls
            height={'100%'} width={'100%'} src="/video/Nuget/Nuget.mp4" playsInline>

            Your browser does not support the video tag.</video>
        </div>
        <div className=" flex flex-col justify-center justify-items-center items-center gap-4 rounded-lg bg-stone-200 px-6 py-10 md:w-2/5 md:px-20">
          <SiNuget className="size-32 w-20 h-20 md:w-10 md:h-10 bg-slate-600" />

          <p className={`dir-rtl text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            نحوه تنظیم دریافت کتابخانه های Nuget  از نکسوس

          </p>
          <video controls
            height={'100%'} width={'100%'} src="/video/Nuget/Nuget.mp4"  playsInline>

            Your browser does not support the video tag.</video>
        </div>
        <div className=" flex flex-col justify-center justify-items-center items-center gap-4 rounded-lg bg-stone-200 px-6 py-10 md:w-2/5 md:px-20">
          <SiApachemaven className="size-32 w-20 h-20 md:w-10 md:h-10 bg-slate-600" />

          <p className={`dir-rtl text-xl text-gray-800 md:text-2xl md:leading-normal`}>
            نحوه تنظیم دریافت کتابخانه های Maven  از نکسوس

          </p>
          <video controls
            height={'100%'} width={'100%'} src="/video/Nuget/Nuget.mp4"  playsInline>

            Your browser does not support the video tag.</video>
        </div>
      </div>
    </div>
  )
}
