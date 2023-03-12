import React from "react";
import css from "./PublicationItem.module.scss";

const PublicationItem = (props) => {
  const { publication } = props;
  return (
    <div className={css.body}>
      <p className={css.subSectionTitle}>{publication.title}</p>
      <p className={css.companyNameText}>{publication.companyName}</p>

      <div className={css.urlSection}>
        <img className={css.urlIcon} src={"/link-black.png"} />
        <a href={publication.url} className={css.infoText}>
          {publication.url}
        </a>
      </div>

      <div className={css.detailsSection}>
        <p className={css.descriptionText}>{publication.description}</p>
      </div>

      <div className={css.subSectionSeparator} />
    </div>
  );
};

export default PublicationItem;
