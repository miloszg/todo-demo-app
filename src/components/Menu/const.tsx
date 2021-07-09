import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

export const categories = [
  {
    id: "Links",
    children: [
      {
        id: "Linkedin",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/miłosz-gustawski/",
      },
      {
        id: "Github",
        icon: <GitHubIcon />,
        link: "https://github.com/miloszg",
      },
      {
        id: "CV",
        icon: <AssignmentIndIcon />,
        link: "https://drive.google.com/file/d/1fOii_4evt9MTnLCWrRDu5q50jlgcdtxa/view?usp=sharing",
      },
    ],
  },
];
