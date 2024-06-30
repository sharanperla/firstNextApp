'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <div className="flex w-screen h-screen items-top justify-center">
      <div className="px-10 py-5 w-[50%]">
        <Slide delay={2} cascade>
          <h1 className="text-7xl py-4 font-bold">
            Let's see my first project on Next.js
          </h1>
          <p className="text-2xl">
            If you want to use @material-tailwind/react with the Next.js 13 App
            Router, you need to make use of the 'use client' directive since many
            Material Tailwind components can only be rendered on the client side.
            A simple approach is to re-export or wrap Material Tailwind components
            in your own components.
          </p>
          <div>
            <button className="p-3 bg-white rounded-lg text-black m-4 hover:bg-white/5">
              Click here
            </button>
            <button
              className="p-3 bg-white rounded-lg text-black m-4 hover:bg-white/5"
              onClick={handleClick}
            >
              About
            </button>
          </div>
        </Slide>
      </div>
      <div className="px-10 py-5">
        <Zoom>
          <Image src="/free-images.avif" width={450} height={450} alt="image" />
        </Zoom>
      </div>
    </div>
  );
};

export default Page;
