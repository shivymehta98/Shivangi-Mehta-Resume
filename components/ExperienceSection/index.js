import React from "react";
import ExperienceItem from "../ExperienceItem";
import css from "./ExperienceSection.module.scss";

const ExperienceSection = () => {
  let experiences = [
    {
      title: "Senior Software Engineer",
      companyName: "VahVah Institute",
      startDate: "09/2020",
      endDate: "Ongoing",
      location: "Bangalore, IN",
      companyDescription:
        "VahVah is an edtech startup revolutionizing the beauty and makeup industry by offering micro-batch makeup courses to students across India. Taught by top instructors in metro cities, VahVah aims to make high-quality beauty education accessible to all.",
      reponsibilities: [
        "Spearheaded the development of VahVah's iOS app from concept to launch, collaborating closely with design and product teams to create a seamless user experience and functional interface.<breakPara /><br/>- Utilized technologies such as <b>SwiftUI</b>, <b>Combine</b>, <b>Swift</b>, <b>OneSignal</b><br />- 4.7 rating on App Store<br />- 97% crash-free users<br />- App Store link: <a href='https://apps.apple.com/in/app/vah-vah-makeup-hairstyle/id1578305224' style='color:#384347'>https://apps.apple.com/in/app/vah-vah-makeup-hairstyle/id1578305224</a>",

        "Developed and maintained multiple high-performance websites using NextJS for SSG, ISR, and SSR pages, achieving an SEO score above 90 for each site. <br/><br/>Streamlined workflows and optimized development and deployment processes using AWS ECS, GitHub Actions, and Docker.<br/><br />- Technologies used: <b>ReactJS</b>, <b>NextJS</b>, <b>Sass</b>, <b>ECS</b>, <b>Docker</b><br />- <a href='https://vahvah.com' style='color:#384347'>https://vahvah.com</a><br />- <a href='https://vahvah.biz' style='color:#384347'>https://vahvah.biz</a>",

        "Played a pivotal role in the development of VahVah's Android app, contributing to a modular project architecture that simplified maintenance and enhanced development efficiency. <br/><br/> Implemented continuous delivery pipeline with Fastlane for uploading flavored builds to App Distribution and Play Console, ensuring a streamlined and high-quality development process. <br/><br />- Technologies: <b>Kotlin</b>, <b>Jetpack Compose</b>, <b>OneSignal</b>, <b>RazorPay</b><br />- 10k+ downloads on Play Store<br />- 4.8 rating on Play Store<br />- 98% crash-free users<br />- <a href='https://play.google.com/store/apps/details?id=com.vahvah.student' style='color:#384347'>https://play.google.com/store/apps/details?id=com.vahvah.student</a>",
      ],
    },
    {
      title: "Software Engineer",
      companyName: "m56 Studios",
      startDate: "05/2019",
      endDate: "08/2020",
      location: "Bangalore, IN",
      companyDescription:
        "The m56 team designs and develops engaging digital experiences for global brands, celebrities and media companies.",
      reponsibilities: [
        "Created iOS application Fudos from scratch to a full product. With Fudos, users can create and upload their recipes using in-app video editor and participate in challenges conducted by popular chefs like Carla Hall.<br />- Technologies: <b>iOS</b>, <b>Swift</b>, <b>Firebase</b>",
        
        "Part of the development team at Hanx, a trivia quiz game for Apple Arcade, I worked with Unity 3D and GameSparks to create engaging gameplay experience.<br />- Technologies: <b>Unity 3D</b>, <b>GameSparks</b><br />- <a href='https://apps.apple.com/in/app/hanx101-trivia/id1576564975' style='color:#384347'>https://apps.apple.com/in/app/hanx101-trivia/id1576564975</a>",
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
