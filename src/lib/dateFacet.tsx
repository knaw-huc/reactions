import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface DateFacetProps {
  className: string;
  onChange: (newDate: Date | null | (Date | null)[]) => void;
  defaultActiveStartDate: Date;
  defaultValue: Date;
  minDate: Date;
  maxDate: Date;
}

const DateFacet = (props: DateFacetProps) => {
  return (
    <div>
      <Calendar
        className={props.className}
        onChange={props.onChange}
        defaultActiveStartDate={props.defaultActiveStartDate}
        defaultValue={props.defaultValue}
        minDate={props.minDate}
        maxDate={props.maxDate}
      />
    </div>
  );
};

export default DateFacet;
