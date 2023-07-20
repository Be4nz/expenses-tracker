import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HistoryIcon from "@mui/icons-material/History";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const NavData = [
  {
    id: 1,
    text: "Home",
    icon: <LibraryBooksIcon fontSize="large" />,
    link: "/current",
  },
  {
    id: 2,
    text: "History",
    icon: <HistoryIcon fontSize="large" />,
    link: "/history",
  },
  {
    id: 3,
    text: "All income",
    icon: <ArrowUpwardIcon fontSize="large" />,
    link: "/income",
  },
  {
    id: 4,
    text: "All expense",
    icon: <ArrowDownwardIcon fontSize="large" />,
    link: "/expense",
  },
];
