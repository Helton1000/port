import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  level: string;
}

const SkillCard = ({ image, title, level }: Props) => {
  return (
    <div className="cursor-pointer rounded-lg bg-gray-900 p-6 text-center transition-all duration-300 hover:bg-red-600">
      <Image
        src={`${image}`}
        alt={title}
        width={80}
        height={80}
        className="mx-auto object-cover"
      />
      <h1 className="mt-[1rem] text-[18px] font-[600] text-white">{title}</h1>
      {/* <div className="bg-black mt-[1rem] rounded-lg p-2 text-white opacity-40 level overflow-hidden">
        <span className="text-sm lg:text-base">{level}</span>
      </div> */}
    </div>
  );
};

export default SkillCard;
