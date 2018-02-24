import * as React from 'react';

interface Props {
  date: Date;
}

const DateContainer: React.StatelessComponent<Props> = (props) => {
  return (
    <div className="Date">
      <h1>
        {formattedDay(props)}<br />
        {formattedDate(props)}
      </h1>
    </div>
  );
};

const formattedDay = ({ date }: Props) => {
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
  });
}

const formattedDate = ({ date }: Props) => {
  // Try full browser support
  try {
    return date.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } catch (e) {
    //
  }

  try {
    // Try basic support
    return date.toLocaleTimeString();
  } catch (e) {
    //
  }

  // Can't find a locale
  return date.toLocaleTimeString('en-GB');
};

export default DateContainer;
