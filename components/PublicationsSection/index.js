import React from "react";
import css from "./PublicationsSection.module.scss";

import PublicationItem from "../PublicationItem";

const PublicationsSection = () => {
  let publications = [
    {
      description: "P. Bhansali, P. Shukla, M. Purohit and S. Mehta. \"Gesture Recognition and Interpretation through Wearable Sensors and Recurrent Neural Networks\", 2024 MIT Art, Design and Technology School of Computing International Conference (MITADTSoCiCon), Pune, India, 2024, pp. 1-6, doi: 10.1109/MITADTSoCiCon60330.2024.10575132.\" "
    },
    {
      description: "S. Mehta and L. J. Gadhavi. \"Anticipating Threats through Malware Detection Approaches to safeguard Data Privacy and Security: An In-Depth Study\",  2024 3rd International Conference for Innovation in Technology (INOCON), Bangalore, India, 2024, pp. 1-8, doi: 10.1109/INOCON60754.2024.10511971.\" "
    },
    {
      description: "Rathod, P., Sakhiya, R., Shah, R., Mehta, S. (2023). \" Meta-Analysis of Popular Encryption and Hashing Algorithms\", Lecture Notes in Networks and Systems, vol 754. Springer, Singapore. https://doi.org/10.1007/978-981-99-4932-8_17.\" "
    },
    {
      description: "Mehta, Shivangi and Gadhavi, Lataben J and Joshi, Harshil. \"Anomaly Detection to Prevent Sensitive Data Exposure Using GMM Clustering Model\", Proceedings of World Conference on Artificial Intelligence: Advances and Applications. Singapore: Springer Nature Singapore, 2023.\" "
    },
    {
      description: "D. Soni, D. Shah, S. Ramolia, H. Joshi and S. Mehta. \"A Novel Approach for PE Malware Detection using Random Forest Algorithm and Prevention\", International Conference on Electronics and Renewable Systems (ICEARS), Tuticorin, India, 2023, pp. 1570.\" "
    },
    {
      description: "M Darji, N Parmar, Y Darji, S Mehta. \"A Smart Home Automation System Based on Internet of Things (IoT) Using Arduino\", Futuristic Trends in Networks and Computing Technologies: Proceedings of Fourth International Conference on FTNCT 2021. Singapore: Springer Nature Singapore, 2022.\" "
    },
    {
      description: "S. Mehta, et.al, \"Threat Prediction using Ensemble Learning Algorithm to provide End-Point Security\", International Conference on Electronics and Renewable Systems (ICEARS), Tuticorin, India, 2022, pp. 1427-1434, doi: 10.1109/ICEARS53579.2022.9751963.\" "
},
{
  description: "Shivangi Mehta, Chandresh Parekh, Dharati Dholariya. (2021). Big Data Analytics and Protection against Sensitive Data Exposure for Web Security. ICETET Conference."
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
