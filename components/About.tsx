import Link from "next/link";

const About = () => {
  return (
    <div className="mt-8 mr-8 ml-8 flex flex-col justify-center ">
      <div className="text-lg  underline underline-offset-4 font-semibold ">
        About
      </div>
      <div className="text-center mt-4 justify-center">
        Passionate about problem-solving and always eager to learn something
        new, Sayantan is a motivated computer science student with a keen
        interest in data structures and algorithms. He is also enthusiastic
        about Open Source contribution and has been actively participating in
        relevant projects based on his skill set. With a solid foundation in
        programming languages such as C++, Javascript, and Java, he derives
        enjoyment from engaging in challenging projects that allow him to
        broaden his skill set. Whether functioning as a collaborative team
        member or pursuing independent endeavors, Sayantan maintains a steadfast
        commitment to delivering top-notch work and effecting positive change.
        Beyond the realm of coding, he finds pleasure in reading books, playing
        the guitar, and embarking on journeys of exploration to new
        destinations.
      </div>
      <Link
        href="https://drive.google.com/file/d/1utFflSuB4LKDjQt6oJ4sMU4L0INNhOAa/view?usp=drive_link"
        target="_blank"
        className="text-center text-black font-bold text-xl align-center mt-10 mx-auto px-7 py-2 rounded-full bg-teal-500 hover:bg-teal-300"
      >
        My Resume
      </Link>
    </div>
  );
};

export default About;
