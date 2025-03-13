import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Salut! Moi c'est <strong>Joël Nutsugan</strong>. Passionné par le développement web et la création d’expériences interactives, je suis un développeur full-stack avec une expertise en HTML, CSS, JavaScript, PHP, et MySQL. Depuis plusieurs mois, j'essaie de concevoir des sites web modernes, performants et optimisés, en mettant l’accent sur l’expérience utilisateur UX et le design responsive.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Curieux et toujours en quête d’apprentissage, j’aime relever des défis techniques et explorer de nouvelles technologies pour proposer des solutions innovantes et efficaces. Que ce soit pour le développement front-end avec des interfaces élégantes et fluides ou pour le back-end avec des bases de données bien structurées et sécurisées, je mets un point d’honneur à livrer un travail de qualité.
            Je suis particulièrement passionné par le développement d’applications, qu’elles soient web, mobiles ou logicielles, ainsi que par la conception d’interfaces utilisateur immersives et l’optimisation des performances. J’ai une soif d’apprendre et d’élargir mes compétences, que ce soit en explorant de nouvelles technologies, en perfectionnant mes connaissances en intelligence artificielle, en cloud computing, ou en découvrant les dernières tendances du développement.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Mon approche est axée sur la rigueur, le détail et l’efficacité, ce qui me permet de transformer des idées en projets concrets et fonctionnels. En plus du développement, j’aime partager mes connaissances et collaborer avec d’autres passionnés du numérique. Mon objectif ? Créer des expériences numériques mémorables et accessibles à tous.
              <div className="tagline2">
            Si tu veux discuter d’un projet ou d’une collaboration, n’hésite pas à me contacter ! 🚀
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
