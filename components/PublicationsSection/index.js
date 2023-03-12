import React from "react";
import css from "./PublicationsSection.module.scss";

import PublicationItem from "../PublicationItem";

const PublicationsSection = () => {
  let publications = [
    {
      title: "Continuous Delivery of Android app",
      companyName: "Medium",
      url: "http://bit.ly/3GiH9LS",
      description: "In this blog I explain how to create Continuous Delivery of an Android app to App Distribution and Play Console via GitHub Actions using Fastlane."
    },
  ];

  return (
    <div className={css.body}>
      <p className={css.sectionTitle}>PUBLICATIONS</p>

      {publications.map((publication, index) => {
        return (
          <div key={index} className={css.publicationsSection}>
            <PublicationItem publication={publication} />
          </div>
        );
      })}
    </div>
  );
};

export default PublicationsSection;
