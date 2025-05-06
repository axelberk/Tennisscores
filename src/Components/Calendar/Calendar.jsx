import "./Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Calendar = () => {
  return (
    <div className="Calendar">
      <button className="calendar-arrow">
        <ArrowLeftIcon />
      </button>
      <DatePicker />

      <button className="calendar-arrow">
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Calendar;
