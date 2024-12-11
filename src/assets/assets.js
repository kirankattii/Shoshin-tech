import chartBox_icon from './chartBox_icon.png';
import arrowDown_icon from './ArrowDown_icon.png'
import darkPing_icon from './ping_light.png'
import lightPing_icon from './darkPing_icon.png'
import dashboard_icon from './dashboard_icon.png'
import department_icon from './department_icon.png'
import employee_icon from './employee_icon.png'
import graph1 from './graph1.png'
import graph2 from './graph2.png'
import settings_icon from './ic_settings.png'
import logo_icon from './logo_Icon.png'
import logo from './logo.png'
import notification_icon from './notification_icon.png'
import optionmenu_icon from './optionMenu_icon.png'
import profile_icon from './profile_icon.png'
import recuirtment_icon from './Recruitment_icon.png'
import schedule_icon from './schedule_icon.png'
import serach_icon from './search_icon.png'
import support_icon from './support_icon.png'
import { color } from 'framer-motion';
import { section } from 'framer-motion/client';


export const assets = {
  chartBox_icon,
  arrowDown_icon,
  darkPing_icon,
  lightPing_icon,
  dashboard_icon,
  department_icon,
  employee_icon,
  graph1,
  graph2,
  settings_icon,
  logo_icon,
  logo,
  notification_icon,
  optionmenu_icon,
  profile_icon,
  recuirtment_icon,
  schedule_icon,
  serach_icon,
  support_icon,
}


export const menuData = [
  {
    section: "Main menu",
    items: [
      { icon: "Grid", label: "Dashboard", path: "/dashboard", active: true },
      { icon: "UserPlus", label: "Recruitment", path: "/recruitment", active: false },
      { icon: "Calendar", label: "Schedule", path: "/schedule", active: false },
      { icon: "Users", label: "Employee", path: "/employee", active: false },
      { icon: "Building", label: "Department", path: "/department", active: false }
    ]
  },
  {
    section: "Other",
    items: [
      { icon: "Headphones", label: "Support", path: "/support", active: false },
      { icon: "Settings", label: "Settings", path: "/settings", active: false }
    ]
  }
];


export const dashboard_stats = [
  {
    title: "Available Position",
    no: "24",
    desc: "4 Urgently needed",
    color: "#FFEFE7",
    textcolor: "#FF5151"
  },
  {
    title: "Job Open",
    no: "10",
    desc: "4 Active hiring",
    color: "#E8F0FB",
    textcolor: "#3786F1"

  },
  {
    title: "New Employees",
    no: "24",
    desc: "4 Department",
    color: "#FDEBF9",
    textcolor: "#EE61CF"
  }
]

export const graphStats = [
  {
    title: "Total Employees",
    total: 216,
    men: "120 Men",
    women: "96 Women",
    percent: 2,
    img: graph1
  },
  {
    title: "Total Employees",
    total: 16,
    men: "6 Men",
    women: "10 Women",
    percent: 5,
    img: graph2
  }
]

export const announcement = [
  {
    title: "Outing schedule for every departement",
    date: "5 Minutes ago"
  },
  {
    title: "Meeting HR Department",
    date: "Yesterday, 12: 30 PM"
  },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    date: "Yesterday, 09: 15 AM"
  }
]

export const upcomingSchedule = [
  {
    section: "Priority",
    items: [
      {
        name: "Review candidate applications",
        date: "Today - 11.30 AM"
      }
    ]
  },
  {
    section: "Other",
    items: [
      {
        name: "Interview with candidates",
        date: "Today - 10.30 AM"
      },
      {
        name: "Short meeting with product designer from IT Departement",
        date: "Today - 09.15 AM"
      }
    ]
  }
] 