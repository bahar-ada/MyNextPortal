import React from "react";
import {DatePicker} from "@nextui-org/react";
import {today, isWeekend, getLocalTimeZone} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";
import {now, parseAbsoluteToLocal} from "@internationalized/date";
import {I18nProvider} from "@react-aria/i18n";

export default function MyDatePicker(props) {
  let now = today(getLocalTimeZone());
  let [date, setDate] = React.useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));

  let disabledRanges = [
    [now, now.add({days: 5})],
    [now.add({days: 14}), now.add({days: 16})],
    [now.add({days: 23}), now.add({days: 24})],
  ];

  let {locale} = useLocale();
  console.log('locale :>> ', locale);

  let isDateUnavailable = (date) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0,
    );

  return (
    <div className="flex flex-col gap-4">
    <I18nProvider locale="fa-IR">
      <DatePicker
        showMonthAndYearPickers
        variant="bordered"
        className="max-w-md"
        label="Appointment date"
        value={date}
        onChange={setDate}
      />
    </I18nProvider>
  </div>
  );
}



