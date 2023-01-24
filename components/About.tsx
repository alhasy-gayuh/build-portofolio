import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}>
        <Image
          src="/img/profile.jpg"
          className="-mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-[25rem] md:w-[135rem] xl:w-[150rem] xl:h-[33rem] "
          alt="about-gayuh"
          width={700}
          height={500}
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">litle</span>{" "}
          background
        </h4>
        <p className="text-sm">
          I am a developer with basic skills in creating the structure and
          layout of web pages using HTML and CSS, and can create dynamic web
          applications using JavaScript. I also understand the workings of
          server-side scripting using PHP and Node.js, and have experience using
          frameworks such as Laravel and Express. In addition, I also understand
          the workings of databases using MySQL and MongoDB, and can create web
          applications using React.js. I also have the ability to use Three.js
          to create 3D visualizations on the web. I believe that all of the
          skills I possess will help me handle various web and application
          development projects.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
