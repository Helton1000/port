import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Programmer",
        1500,
        "Web Developer",
        1500,
        "Software Engineer",
        1500,
        "Technology Student",
        1500,
      ]}
      speed={50}
      className="text-[2rem] font-bold uppercase text-[#55e6a5] md:text-[3rem]"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
