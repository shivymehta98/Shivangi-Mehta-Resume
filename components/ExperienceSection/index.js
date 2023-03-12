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
        "Kickstarting in the beauty and makeup space, VahVah is a edtech startup that plans to offer Makeup course in micro-batches to students across India to learn from the top teachers in metros.",
      reponsibilities: [
        "Responsible for creating and managing VahVah iOS app.<br />- Technologies: <b>SwiftUI</b>, <b>Combine</b>, <b>Swift</b>, <b>OneSignal</b><br />- 4.7 rating on App Store<br />- 97% crash-free users<br />- <a href='https://apps.apple.com/in/app/vah-vah-makeup-hairstyle/id1578305224' style='color:#384347'>https://apps.apple.com/in/app/vah-vah-makeup-hairstyle/id1578305224</a>",

        "Responsible for creating and maintaining multiple websites. Used NextJS to create SSG, ISR and SSR pages. Improved website performance and increased SEO score to more than 90.<br />- Technologies: <b>ReactJS</b>, <b>NextJS</b>, <b>Sass</b><br />- <a href='https://vahvah.com' style='color:#384347'>https://vahvah.com</a><br />- <a href='https://vahvah.biz' style='color:#384347'>https://vahvah.biz</a>",
        
        "Part of the Android team for creating the VahVah android app. Created seperate modules with single responsibility and hosted them on Maven using GitHub Actions. Created continous delivery pipeline using Fastlane to upload flavoured builds in App Distribution and Play Console.<br />- Technologies: <b>Kotlin</b>, <b>Jetpack Compose</b>, <b>OneSignal</b>, <b>RazorPay</b><br />- 10k+ downloads on Play Store<br />- 4.8 rating on Play Store<br />- 98% crash-free users<br />- <a href='https://play.google.com/store/apps/details?id=com.vahvah.student' style='color:#384347'>https://play.google.com/store/apps/details?id=com.vahvah.student</a>",
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
        
        "Part of the development team at Hanx, a trivia quiz game for Apple Arcade<br />- Technologies: <b>Unity 3D</b>, <b>GameSparks</b><br />- <a href='https://apps.apple.com/in/app/hanx101-trivia/id1576564975' style='color:#384347'>https://apps.apple.com/in/app/hanx101-trivia/id1576564975</a>",
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
