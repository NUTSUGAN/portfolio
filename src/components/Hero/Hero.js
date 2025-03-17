import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hello, Moi c\'est Joël.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'Un développeur Full-Stack...',
                    3000,
                    'Je conçois et je code des choses magnifiquement simples, et j\'aime ce que je fais.',
                    1000,
                    'Une personne qui résout des problèmes.',
                    1000,
                    'Un esprit novateur.',
                    1000,
                    'Un...',
                    1000,
                    'Un... un gars cool ??',
                    1000,
                    "Ok...",
                    1000,
                    "Ok...  Je n'ai plus d'idées...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... vous pouvez faire défiler la page pour voir mes projets maintenant...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Sérieusement, mes projets sont vraiment sympas, allez les voir !",
                    1000,
                    "Vous êtes uhh...",
                    1000,
                    "Vous êtes uhh... toujours là ?",
                    1000,
                    "Ok, c'était sympa, mais je vais recommencer la boucle maintenant...",
                    500,
                    "Ou...",
                    1000,
                    "Ou... je pourrais vous faire défiler de force 😈 ! Muahaha ! ",
                    1000,
                    "A bientôt! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/man-svgrepo-com.svg"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Défiler
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
