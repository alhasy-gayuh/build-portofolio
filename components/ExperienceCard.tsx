import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}>
        <Image
          className="rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
          src="/img/card1.png"
          alt="card1"
          width={128}
          height={128}
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">CEO of GAMA</h4>
        <p className="font-bold text-xl mt-1">GAMA</p>
        <div className="flex my-2 space-x-2">
          <Image
            className="rounded-full"
            src="/img/react.png"
            alt="react"
            width={30}
            height={30}
          />
          <Image
            className="rounded-full"
            src="/img/javascript.png"
            alt="react"
            width={30}
            height={30}
          />
          <Image
            className="rounded-full"
            src="/img/typescript.png"
            alt="react"
            width={30}
            height={30}
          />
        </div>
        <p className="py-5 text-gray-300 uppercase">
          Started Work ... - Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          <li>Summary point Summary point Summary point</li>
          <li>Summary point Summary point Summary point</li>
          <li>Summary point Summary point Summary point</li>
          <li>Summary point Summary point Summary point</li>
          <li>Summary point Summary point Summary point</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
