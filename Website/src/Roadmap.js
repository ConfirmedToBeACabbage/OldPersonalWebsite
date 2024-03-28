import "./css/styles.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Thoughtsbox } from "./Components/thoughtsbox.js"
import { Roadmapline } from "./Components/roadmapline.js"

export default function Roadmap() {
  useEffect(() => {
    Aos.init({duration: 1500,
              once: false,
              mirror: true});
  }, []);
  return (
    <div data-aos="zoom-in" className="roadmap">
        <div data-aos="fade-up" className="showbody">
          <Roadmapline logo_src={7}/>
          <Thoughtsbox typeparent="work" 
                       intromsghead="Saab"
                       typechild="saabfirst" 
                       intromsgbody="A progression further into the field of development. I've gotten the opportunity to now work more closely with software and develop/provide QA."/>
        </div>
        <div data-aos="fade-up" className="showbody">
          <Roadmapline logo_src={0}/>
          <Thoughtsbox typeparent="work"
                       intromsghead="Telus" 
                       typechild="telus" 
                       intromsgbody="Currently working at Telus; Learning a lot of new technologies and growing. Feel free to take a look at the various skills I'm picking up below."/>
        </div>
        <div data-aos="fade-up" className="showbody">
          <Roadmapline logo_src={1}/>
          <Thoughtsbox typeparent="work" 
                       intromsghead = "Transport Canada" 
                       typechild="transportcanadafull" 
                       intromsgbody="Being to work so closely with technology/hardware and cliental has taught me a lot. I've worked through a lot of tech rollouts and various technological hurdles. Feel free to take a look below for more details!" />
        </div>
        <div data-aos="fade-up" className="showbody">
          <Roadmapline logo_src={2}/>
          <Thoughtsbox typeparent="work" 
                       intromsghead="Personal Experience" 
                       typechild="personalexperience" 
                       intromsgbody="This is a constant which im working on; Technology moves fast today, and I should be able to keep up if I want to offer you the best service!"/>
        </div>
        <div data-aos="fade-up" className="showbody">
          <Roadmapline logo_src={1}/>
          <Thoughtsbox typeparent="work" 
                       intromsghead="Transport Canada Internship"
                       typechild="transportcanadafirst" 
                       intromsgbody="My first introduction to working in an office environment. I got the chance to develop a software application for Transport Canada alongside gain technical experience through troublshooting."/>
        </div>
    </div>
  );
}

export { Roadmap };