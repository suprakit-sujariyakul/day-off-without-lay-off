import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export default function Calendar() {
  dayjs.extend(localeData);
  dayjs.extend(customParseFormat);
  const monthsInYearArr = dayjs.months();
  const daysInWeekArr = dayjs.weekdaysMin();
  const selectedYear: number = 2023;

  function CreateMonth({ key, month }: { key: number; month: string }) {
    return (
      <div key={key}>
        <div className='mb-2 text-center'>{month}</div>
        <div className='grid grid-cols-7 grid-rows-5 gap-2 text-center'>
          {daysInWeekArr.map((day, key) => (
            <span key={key}>{day}</span>
          ))}
          <CreateDay
            year={selectedYear}
            month={month}
          />
        </div>
      </div>
    );
  }

  function CreateDay({ year, month }: { year: number; month: string }) {
    const startDayOfWeek = dayjs(`${year}, ${month}`, 'YYYY MMMM').day();
    const emptyStringArr = [...Array(startDayOfWeek).keys()].map((i) => ' ');
    console.log(startDayOfWeek);

    const numberOfDayInMonth = dayjs(
      `${year}, ${month}`,
      'YYYY MMMM'
    ).daysInMonth();
    const daysInMonthArr = [...Array(numberOfDayInMonth).keys()].map(
      (i) => i + 1
    );

    return (
      <>
        {emptyStringArr.map((empty) => (
          <span key={empty}>{empty}</span>
        ))}
        {daysInMonthArr.map((day) => (
          <button key={day}>{day}</button>
        ))}
      </>
    );
  }

  return (
    <div className='grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
      {monthsInYearArr.map((month) => {
        const key = dayjs(month, 'MMMM').month();
        return (
          <CreateMonth
            key={key}
            month={month}
          />
        );
      })}
    </div>
  );
}
