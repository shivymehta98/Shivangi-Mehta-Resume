import React from "react";
import ExperienceItem from "../ExperienceItem";
import css from "./ExperienceSection.module.scss";

const ExperienceSection = () => {
  let experiences = [
    {
      title: "Faculty",
      companyName: "Pandit Deendayal Energy University (PDEU)",
      startDate: "08/2023",
      endDate: "Ongoing",
      location: "Gandhinagar, IN",
      // companyDescription:
      //   "VahVah is an edtech startup revolutionizing the beauty and makeup industry by offering micro-batch makeup courses to students across India. Taught by top instructors in metro cities, VahVah aims to make high-quality beauty education accessible to all.",
      reponsibilities: [
        "Working as a faculty in Department of Information and Communication Technology where I teach subjects as Operating System, Web Technology (HTML, CSS, JavaScript, ES6, MERN Stack) and Machine Learning along with other academic and administrative responsibities.</a>",

        // "Developed and maintained multiple high-performance websites using NextJS for SSG, ISR, and SSR pages, achieving an SEO score above 90 for each site. <br/><br/>Streamlined workflows and optimized development and deployment processes using AWS ECS, GitHub Actions, and Docker.<br/><br />- Technologies used: <b>ReactJS</b>, <b>NextJS</b>, <b>Sass</b>, <b>ECS</b>, <b>Docker</b><br />- <a href='https://vahvah.com' style='color:#384347'>https://vahvah.com</a><br />- <a href='https://vahvah.biz' style='color:#384347'>https://vahvah.biz</a>",

        // "Played a pivotal role in the development of VahVah's Android app, contributing to a modular project architecture that simplified maintenance and enhanced development efficiency. <br/><br/> Implemented continuous delivery pipeline with Fastlane for uploading flavored builds to App Distribution and Play Console, ensuring a streamlined and high-quality development process. <br/><br />- Technologies: <b>Kotlin</b>, <b>Jetpack Compose</b>, <b>OneSignal</b>, <b>RazorPay</b><br />- 10k+ downloads on Play Store<br />- 4.8 rating on Play Store<br />- 98% crash-free users<br />- <a href='https://play.google.com/store/apps/details?id=com.vahvah.student' style='color:#384347'>https://play.google.com/store/apps/details?id=com.vahvah.student</a>",
      ],
    },
    {
      title: "Assistant Professor",
      companyName: "Charotar University of Science and Technology (CHARUSAT)",
      startDate: "07/2021",
      endDate: "07/2023",
      location: "Changa, Anand, IN",
      // companyDescription:
      //   "The m56 team designs and develops engaging digital experiences for global brands, celebrities and media companies.",
      reponsibilities: [
        "Worked as an Assistant Professor, Department of Computer Science & Engineering at CHARUSAT, Changa where I've taught subjects as Cyber Security & Cyber Laws, Full stack Development (MERN STACK), Cryptography & Network Security with other academic and administrative responsibities.",
        
        // "Part of the development team at Hanx, a trivia quiz game for Apple Arcade, I worked with Unity 3D and GameSparks to create engaging gameplay experience.<br />- Technologies: <b>Unity 3D</b>, <b>GameSparks</b><br />- <a href='https://apps.apple.com/in/app/hanx101-trivia/id1576564975' style='color:#384347'>https://apps.apple.com/in/app/hanx101-trivia/id1576564975</a>",
      ],
    },
    {
      title: "Cyber Forensics and Investigations",
      companyName: "Cyber Crime Cell",
      startDate: "12/2020",
      endDate: "02/2021",
      location: "Dafnala, Ahmedabad, IN",
      companyDescription: "Law Enforcement Cell at Ahmedabad.",
      reponsibilities: [
        "Worked as an intern and helped in the investigation processes using various digital forensics tools such as UFED, FTK, Access Data etc and thus providing technical support.",
        
        // "Part of the development team at Hanx, a trivia quiz game for Apple Arcade, I worked with Unity 3D and GameSparks to create engaging gameplay experience.<br />- Technologies: <b>Unity 3D</b>, <b>GameSparks</b><br />- <a href='https://apps.apple.com/in/app/hanx101-trivia/id1576564975' style='color:#384347'>https://apps.apple.com/in/app/hanx101-trivia/id1576564975</a>",
      ],
    },
    {
      title: "Software Developer (Intern)",
      companyName: "Viitor Cloud Technologies Pvt. Ltd.",
      startDate: "01/2019",
      endDate: "07/2019",
      location: "Ahmedabad, IN",
      // companyDescription:
      //   "The m56 team designs and develops engaging digital experiences for global brands, celebrities and media companies.",
      reponsibilities: [
        "Worked for 3 live websites using Front End Technologies such as Angular 7, Angular 8, Angular Material, Material Design, Bootstrap, Google Firebase.",
        
        // "Part of the development team at Hanx, a trivia quiz game for Apple Arcade, I worked with Unity 3D and GameSparks to create engaging gameplay experience.<br />- Technologies: <b>Unity 3D</b>, <b>GameSparks</b><br />- <a href='https://apps.apple.com/in/app/hanx101-trivia/id1576564975' style='color:#384347'>https://apps.apple.com/in/app/hanx101-trivia/id1576564975</a>",
      ],
    },
  ];

  return (
    <div className={css.body}>
      <p className={css.sectionTitle}>Experience</p>

      {experiences.map((experience, index) => {
        return (
          <div key={index} className={css.experienceItem}>
            <ExperienceItem experience={experience} />
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceSection;
