import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ali from "./../images/ali.jpg";
import nima from "./../images/nima.jfif";

const Profile2 = ({ img, about, medias }) => {
  return (
    <div>
      <div className=" flex flex-col-reverse sm:flex-row justify-evenly pt-28 line-clamp-5 dark:text-violet-50 text-violet-950 text-right font-sans">
        <div className=" w-full sm:w-6/12">
          <h1 className="text-4xl mt-12 sm:mt-3 text-center sm:text-left ">
            I am Nima Hamzehee
          </h1>
          <p className="text-lg mt-8 text-center sm:text-left">
            Computer Engineering student and passionate back-end developer.
          </p>
          <p className="text-lg mt-8 text-center sm:text-left">
            loves linux and mountaineering ⛰️.
          </p>
          <p className="text-lg mt-8 text-center sm:text-left">
            My expertise is in designing scalable and efficient back-end systems
            with a focus on performance and security.
          </p>
          <div className="mt-5 justify-center sm:justify-start gap-4 flex">
            {/* "w-10 rounded-lg" */}
            <img
              className="w-10 "
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              height="30"
              alt="python logo"
            />

            <img
              className="w-10 p-1 bg-white rounded-lg"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
              height="30"
              alt="django logo"
            />

            <img
              className="w-10 "
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              height="30"
              alt="postgresql logo"
            />

            <p className="pt-2">and ...</p>
          </div>
        </div>
        <div className="">
          <img
            className={"sm:w-80 w-100 rounded-xl"}
            src={nima}
            alt="co-founder photo"
          />
        </div>
      </div>

      <div className="flex flex-col pt-28 line-clamp-5 align-middle dark:text-violet-50 text-violet-950 text-right font-sans">
        <div className="text-center h-10">
          <h1 className="text-3xl">Links to contact me</h1>
        </div>
        <div className="text-center pt-12 h-52 flex flex-row justify-evenly">
          <a className="logos" href="https://t.me/NimaHmz_0">
            <FaTelegramPlane className="text-sky-400 text-6xl" />
          </a>
          <a className="logos" href="https://www.instagram.com/nima_hmz_/">
            <FaInstagram className="text-rose-600 text-6xl" />
          </a>
          <a className="logos" href="https://github.com/Nima-Hmz">
            <FaGithub className="dark:text-white text-black text-6xl" />
          </a>
          <a
            className="logos"
            href="https://www.linkedin.com/in/nima-hamzehee-2861a7295/"
          >
            <FaLinkedin className="dark:text-white text-blue-800 text-6xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
