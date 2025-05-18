import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <section className="bg-purple-100">
    <div className="grid grid-cols-2 h-[50vh]">
      <div className="flex flex-col gap-4 items-center justify-center">
      <div className="text-3xl font-bold">The Best Url shortner in the Market.</div>
      <div className="px-30  text-lg">We are the best url shortner in the market because we dont have login .So that user need not provide the data to the platform. </div>
      <div className='flex gap-4 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
    </div>
    <div className="relative">
      <Image alt="the is the image" className="mix-blend-darken" fill={true}  src={"/vector.jpg"}/>
    </div>
    </div>
    </section>
    </>
  );
}
