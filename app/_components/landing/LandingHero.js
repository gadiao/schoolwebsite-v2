import { Hero } from "_components";
import heroHome from "_helpers/client/img/landingpage.png";

export { LandingHero };

const LandingHero = () => {
  return (
    <Hero imgSrc={heroHome.src} givenAlt={"Landing Image"} />
  )
};