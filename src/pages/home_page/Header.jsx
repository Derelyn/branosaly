import portrait from "./imgs/myPhoto2.jpg";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header-title">
        <img src={portrait} alt="portrait" />
        <h1>
          Hello, I'm <strong>Branislav Šály</strong>, Self-thaught Web Developer, Who is Looking For Junior Front-end Job in Bratislava.
        </h1>
      </div>
      <div className="header-typing-effect">
        <Typewriter
          options={{
            strings: ["<strong>Hire me</strong>", "I love <strong>CSS</strong>", "Coded in <strong>React</strong>"],
            cursor: [""],
            speed: 800,
            deleteSpeed: 45,
            autoStart: true,
            loop: true,
            pauseFor: 2000
          }}
        />
      </div>
    </div>
  );
};

export default Header;
