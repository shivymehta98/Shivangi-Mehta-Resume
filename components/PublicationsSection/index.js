import React from "react";
import css from "./PublicationsSection.module.scss";

import PublicationItem from "../PublicationItem";

const PublicationsSection = () => {
  let publications = [
    {
           description: "Shivangi Mehta, Chandresh Parekh, Dharati Dholariya. (2021). Big Data Analytics and Protection against Sensitive Data Exposure for Web Security. ICETET Conference."
    },
    {
      description: "S. Mehta, et.al, \"Threat Prediction using Ensemble Learning Algorithm to provide End-Point Security.\" \"International Conference on Electronics and Renewable Systems (ICEARS), Tuticorin, India, 2022, pp. 1427-1434, doi: 10.1109/ICEARS53579.2022.9751963.\" "
},
{
  description: "M Darji, N Parmar, Y Darji, S Mehta. \"A Smart Home Automation System Based on Internet of Things (IoT) Using Arduino. \" \"Futuristic Trends in Networks and Computing Technologies: Proceedings of Fourth International Conference on FTNCT 2021. Singapore: Springer Nature Singapore, 2022.\" "
},
{
  description: "D. Soni, D. Shah, S. Ramolia, H. Joshi and S. Mehta. \"A Novel Approach for PE Malware Detection using Random Forest Algorithm and Prevention, \" \"International Conference on Electronics and Renewable Systems (ICEARS), Tuticorin, India, 2023, pp. 1570.\" "
},
{
  description: "Mehta, Shivangi and Gadhavi, Lataben J and Joshi, Harshil. \"Anomaly Detection to Prevent Sensitive Data Exposure Using GMM Clustering Model. \" \"Proceedings of World Conference on Artificial Intelligence: Advances and Applications. Singapore: Springer Nature Singapore, 2023.\" "
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
