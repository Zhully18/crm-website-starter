import { FaCentos } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { IoIosAlbums } from "react-icons/io";
import { MdMarkEmailRead, MdLeaderboard } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export const services = [
    {
        icon: <FaCentos />,
        head : 'Contact Management',
        desc : 'Organize your contacts and manage your relationships more effectively.',
        action : 'Get Started',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head: 'Sales Automation',
        desc: 'Automate your sales process to save time and increase efficiency.',
        action : 'Get Started',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head: 'Email Marketing',
        desc: 'Create and send targeted email campaigns to engage your audience.',
        action : 'Get Started',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head: ' Analytics & Reporting',
        desc: 'Gain insights into your performance with our advanced analytics tools.',
        action : 'Get Started',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head: 'Social Media Marketing',
        desc: 'Integrate your social media platforms with our CRM Software ',
        action : 'Get Started',
        link : <GrLinkNext />,
    },
    {
        icon: <FaCentos />,
        head : 'Project Management',
        desc: 'Create, Manage , Assign and Track project among team on the platform',
        action : 'Get Started',
        link : <GrLinkNext />,
    }
];

export const details = [
  {
    icon: <IoCall />,
    head : 'Enhanced Contacts Management',
    desc : 'You can create connections, log sales activities, add notes, create tasks, qualify leads, view deals, and more with our multipurpose digital contact book.',
  },
  {
    icon : <IoIosAlbums />,
    head: 'Sales Automation',
    desc: ' Our CRM helps with automation helps you be more productive by handling routine tasks for you.'
  },
  {
    icon: <MdMarkEmailRead />,
    head: 'Email Marketing',
    desc: 'You can write beautiful copies with our powerful editor, equipped with a ton of formatting options, and add important attachments.'
  },
  {
    icon: <MdLeaderboard />,
    head : 'Leads Generation',
    desc: 'For small businesses, a good website can serve as a goldmine for new and repeat business opportunities.'
  }
];

export const price = [
    {
      plan: "Basic",
      price: "20",
      ptext: "per user, per month",
      list: [
        {
          icon: <IoCheckmarkSharp />,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <IoCheckmarkSharp />,
          text: "Sales Forecasting",
        },
        {
          icon: <IoCheckmarkSharp />,
          text: "Email Notification",
        },
        { change: "color", icon: <FaTimes />, text: "Email Templates" },
        { change: "color", icon: <FaTimes />, text: "Role Based Heirarchy" },
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "50",
      ptext: "per user, per month",
      list: [
        {
          icon: <IoCheckmarkSharp />,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <IoCheckmarkSharp />,
          text: "Role Based Hierarchy",
        },
        {
          icon: <IoCheckmarkSharp />,
          text: "Multiple Organization",
        },
        {
          icon: <IoCheckmarkSharp />,
          text: "Mass Email",
        },
        {
          change: "color",
          icon: <FaTimes />,
          text: "Social Profile Integration",
        },
      ],
    },
    {
      plan: "Platinum",
      price: "100",
      ptext: "2 user, per month",
      list: [
        {
          icon:<IoCheckmarkSharp />,
          text: "CRM for Google Ads",
        },
        {
          icon: <IoCheckmarkSharp />,
          text: "AI Sales Forcasting",
        },
        {
          icon: <IoCheckmarkSharp />,
          text: "Custom Report and Dashboard",
        },
        {
          icon: <IoCheckmarkSharp />,
          text: "Personal Help Support",
        },
        {
          icon: <IoCheckmarkSharp />,
          text: "Homepage Customization",
        },
      ],
    },
  ]