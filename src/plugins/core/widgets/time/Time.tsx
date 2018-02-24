import * as React from 'react';
import Analogue from './Analogue';
import Digital from './Digital';
import DateContainer from './DateContainer';

interface Props {
  hour12: boolean;
  mode: string;
  date: boolean;
}

interface State {
  time: Date;
}

class Time extends React.PureComponent<Props, State> {
  static defaultProps = {
    mode: 'digital',
    hour12: false,
    date: false
  };
  state: State = {
    time: new Date(),
  };
  private interval: number;

  componentWillMount() {
    this.interval = window.setInterval(() => this.setState({ time: new Date() }), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    if (this.props.mode === 'analogue') {
      return <Analogue time={this.state.time} />;
    }

    return (
      <div>
        <Digital time={this.state.time} hour12={this.props.hour12} />
        {this.props.date === true &&
          <DateContainer date={this.state.time} />
        }
      </div>
    );
  }
}

export default Time;
