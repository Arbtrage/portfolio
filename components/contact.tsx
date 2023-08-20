import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
const links = [
  {
    id: 1,
    icon: <FaGithub />,
    name: "Github",
    link: "https://github.com/Arbtrage",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sayantan-naskar/",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    name: "Twitter",
    link: "https://twitter.com/Sayantan_101",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/_t.h.e_w.a.n.d.e.r.e.r_/",
  },
];
const Contact = () => {
  return (
    <div className="mt-8 mr-8 ml-8 flex flex-col justify-center ">
      <div className="text-lg mb-6 underline underline-offset-4 font-semibold ">
        Find me on the web :
      </div>

      {links.map((item, key) => {
        return (
          <div className="flex flex-row gap-8 justify-start" key={item.id}>
            <h1 className="my-auto">{item.icon}</h1>
            <Link key={item.id} href={item.link} target="_blank" className=" rounded-full text-xl text-red-200 hover:scale-105">
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
