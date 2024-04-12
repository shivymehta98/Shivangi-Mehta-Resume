import React from "react";
import css from "./AboutMeSection.module.scss";

const AboutMeSection = () => {
  let userDetails = {
    phoneNumber: "+91-8866049994",
    link: "https://www.linkedin.com/in/shivymehta/",
    email: "shivymehta98@gmail.com",
    location: "Ahmedabad, IN",
  };

  return (
    <div className={css.body}>
      <p className={css.name}>Shivangi Mehta</p>
      {/* <p className={css.position}>Assistant Professor</p> */}

      <div className={css.infoSection}>
        <div className={css.infoColumn}>
          <div className={css.infoItem}>
            <img className={css.infoIcon} src={"/phone-call.png"} />
            <a href={`tel:${userDetails.phoneNumber}`} className={css.infoText}>
              {`${userDetails.phoneNumber.replace("-", " ")}`}
            </a>
          </div>

          <div className={css.infoItem}>
            <img className={css.infoIcon} src={"/link.png"} />
            <a href={userDetails.link} className={css.infoText}>
              {userDetails.link}
            </a>
          </div>
        </div>

        <div className={css.infoColumn}>
          <div className={css.infoItem}>
            <img className={css.infoIcon} src={"/at.png"} />
            <a href={`mailto:${userDetails.email}`} className={css.infoText}>
              {userDetails.email}
            </a>
          </div>

          <div className={css.infoItem}>
            <img className={css.infoIcon} src={"/pin.png"} />
            <p className={css.infoText}>{userDetails.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
