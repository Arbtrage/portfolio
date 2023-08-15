import Image from "next/image";
import ProfileImage from "./profile.jpg";

const imageStyle = {
  borderRadius: '20%',
  border: '1px solid #fff',
};
export default function Index() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6">
      <div className="my-auto">
        <div className="text-center font-bold">
          Hello ,
          <h1 className=" text-5xl pb-6 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            I&apos;m Sayantan
          </h1>
        </div>
      </div>
      <div className="justify-items-center">
        <Image
          src={ProfileImage}
          alt="Profile image"
          width={300}
          height={300}
          style={imageStyle}
          className="object-cover"
        />
      </div>
    </div>
  );
}
