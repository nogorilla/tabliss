import * as React from 'react';
import { Settings } from '../../../interfaces';

interface Props {
  mode: string;
  hour12: boolean;
  date: boolean;
  onChange: (settings: Settings) => void;
}

class TimeSettings extends React.PureComponent<Props> {
  static defaultProps = {
    mode: 'digital',
    hour12: false,
    date: false
  };

  render() {
    return (
      <div className="TimeSettings">
        <label>
          <input
            type="radio"
            checked={this.props.mode === 'analogue'}
            onChange={() => this.props.onChange({ mode: 'analogue' })}
          />
          {' '}
          Analogue
        </label>

        <label>
          <input
            type="radio"
            checked={this.props.mode === 'digital' && this.props.hour12}
            onChange={() => this.props.onChange({
              mode: 'digital',
              hour12: true,
            })}
          />
          {' '}
          12-hour digital
        </label>

        <label>
          <input
            type="radio"
            checked={this.props.mode === 'digital' && ! this.props.hour12}
            onChange={() => this.props.onChange({
              mode: 'digital',
              hour12: false,
            })}
          />
          {' '}
          24-hour digital
        </label>
        <label>
          <input
            type="checkbox"
            checked={this.props.date}
            onChange={event => this.props.onChange({
              date: event.target.checked,
            })}
          />
          {' '}
          Show date
        </label>
      </div>
    );
  }
}

export default TimeSettings;
