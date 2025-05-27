import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      {Object.entries(socialMediaLinks).map(([key, value]) => {
        // Determine the correct icon class for each key
        let iconClass = "";
        switch (key) {
          case "github":
            iconClass = "fab fa-github";
            break;
          case "gitlab":
            iconClass = "fab fa-gitlab";
            break;
          case "linkedin":
            iconClass = "fab fa-linkedin-in";
            break;
          case "gmail":
            iconClass = "fab fa-google";
            break;
          case "twitter":
            iconClass = "fab fa-twitter";
            break;
          case "facebook":
            iconClass = "fab fa-facebook-f";
            break;
            case "instagram":
            iconClass = "fab fa-instagram";
            break;
          default:
            iconClass = "fab fa-globe";
        }
        // For gmail, use mailto
        const href = key === "gmail" ? `mailto:${value}` : value;
        return (
          <a
            key={key}
            href={href}
            className={`icon-button ${key}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={iconClass}></i>
            <span></span>
          </a>
        );
      })}
    </div>
  );
}
