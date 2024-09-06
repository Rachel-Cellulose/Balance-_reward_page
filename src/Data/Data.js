import {
  UilUser,
  UilDashboard,
  UilMoneyWithdrawal,
  UilHistory,
  UilExchangeAlt,
  UilSignOutAlt,
  UilSetting,
  UilUsdSquare,
} from "@iconscout/react-unicons";

export const SidebarData = [
  {
    icon: UilUser,
    heading: "Profile",
  },
  {
    icon: UilDashboard,
    heading: "Dashboard",
  },
  {
    icon: UilMoneyWithdrawal,
    heading: "Reward",
  },
  {
    icon: UilHistory,
    heading: "History",
  },
  {
    icon: UilExchangeAlt,
    heading: "Cashout",
  },

  {
    icon: UilSetting,
    heading: "Setting",
  },
  {
    icon: UilSignOutAlt,
    heading: "SignOut",
  },
];

export const DashboardData = [
  {
    title: "Current Balance",
    color: {
      backGround: "linear-gradient(180deg, #2261E4 0%, #89D4F4 100%)",
      // boxShadow: "12px 12px 2px 1px #f0c8f9",
    },
    barValue: 70,
    value: "69,075",
    png: UilUsdSquare,
    series: [
      {
        name: "Current Balance",
        data: [3, 34, 58, 61, 72, 89, 100],
      },
    ],
  },

  {
    title: "Total Discount",
    color: {
      backGround: "linear-gradient(180deg, #4B79A1 0%, #284F81 100%)",
      boxShadow: "4px 1px 6px 1px #4b79a1",
    },
    barValue: 20,
    value: "29,000",
    png: UilUsdSquare,
    series: [
      {
        name: "Total Discount",
        data: [31, 40, 28, 51, 42, 109, 140],
      },
    ],
  },
  {
    title: "Total Cashback",
    color: {
      
      backGround: "linear-gradient(180deg, #149DFE 0%, #122DED 100%)",
      boxShadow: "2px 1px 4px 1px #122ffd",
    },
    barValue: 5,
    value: "20,050",
    png: UilUsdSquare,
    series: [
      {
        name: "Total Cashback",
        data: [1, 14, 28, 45, 62, 89, 100],
      },
    ],
  },
];
