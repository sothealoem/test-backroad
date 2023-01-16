import React from "react";

const SocialLink = ({ id, href, icon }) => {
  return (
    <li key={id}>
      <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
