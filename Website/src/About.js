import "./css/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Thoughtsbox } from "./Components/thoughtsbox";
import { Roadmapline } from "./Components/roadmapline";

export default function About() {
  
  useEffect(() => {
    Aos.init({duration: 1500,
              once: false,
              mirror: true});
  }, []);

  return (
    <div data-aos="zoom-in" className="roadmap">
        <div data-aos="fade-up" className="showbody">
          <Roadmapline logo_src={3}/>
          <Thoughtsbox typeparent="projects" 
                       intromsghead="UBC Game Jam" 
                       typechild="ubcgamejam" 
                       intromsgbody="An exciting competition developing a Video Game with a theme! What more can you ask for? This was an exciting 48 hour hurdle which I absolutely adored. Feel free to look at more details."/>
        </div>
        <div data-aos="fade-up" className="showbody">
          <Roadmapline logo_src={4}/>
          <Thoughtsbox typeparent="projects" 
                       intromsghead="Google Play Store Project"
                       typechild="rollaball" 
                       intromsgbody="Given my motto of consistently growing my field of vision in terms of technological understanding; In highschool I decided to go through the whole processing of developing, delegating, and publishing an app to the Google Play Store."/>
        </div>
        <div data-aos="fade-up" className="showbody">
          <Roadmapline logo_src={5}/>
          <Thoughtsbox typeparent="projects" 
                       intromsghead="Non-Multilayer-Neural-Network"
                       typechild="nonmultilayernetwork" 
                       intromsgbody="To gain a truly deeper understanding of what I work with I really like to understand the underlying concepts. This is my approach to machine learning, I decided to alone, using online sources for mathematical models develop a simple neural network in C++ using no additional libraries."/>
        </div>
        <div data-aos="fade-up" className="showbody">
          <Roadmapline logo_src={6}/>
          <Thoughtsbox typeparent="projects" 
                       intromsghead="Grassfire Algorithm (Full Traversal Recode)"
                       typechild="fullgrassfire" 
                       intromsgbody="Pathfinding is always exciting in the field of robotics. I decided to work on reinventing the grassfire algorithm into a full pathfinding algorithm which could traverse a whole node map."/>
        </div>
    </div>
  );
}

export { About };