import Head from "next/head";

import css from "./Home/Home.module.scss";

import AboutMeSection from "../../components/AboutMeSection";
import ExperienceSection from "../../components/ExperienceSection";
import EducationSection from "../../components/EducationSection";
import SkillsSection from "../../components/SkillsSection";
import PublicationsSection from "../../components/PublicationsSection";
import ProjectSection from "../../components/ProjectSection"
export default function Home() {
  return (
    <div className={css.main}>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutMeSection />

        <div className={css.infoSections}>
          <div className={css.leadingSection}>
            <div className={css.infoSection}>
              <ExperienceSection />
            </div>
           
            <div className={css.infoSection}>
              <EducationSection />
            </div>
            <div className={css.infoSection}>
              <ProjectSection />
            </div>
          </div>
          

          <div className={css.trailingSection}>
            <div className={css.infoSection}>
              <SkillsSection />
            </div>
            <div className={css.infoSection}>
              <PublicationsSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
