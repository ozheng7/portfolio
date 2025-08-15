import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HelloSection from "../components/HelloSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* {theme toggle} */}
      <ThemeToggle />
      {/* {background effect} */}
      <StarBackground />
      {/* {Navbar} */}
      <Navbar />
      {/* {Main content} */}
      <main>
        <HelloSection />
        <AboutSection />
        {/* <SkillsSection /> */}
      </main>
      {/* {footer} */}
    </div>
  );
};
