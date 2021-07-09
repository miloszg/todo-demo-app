import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';

export const categories = [
    {
      id: 'Links',
      children: [
        { id: 'Linkedin', icon: <PeopleIcon /> },
        { id: 'Github', icon: <DnsRoundedIcon /> },
        { id: 'CV', icon: <PermMediaOutlinedIcon /> },
      ],
    },
  ];