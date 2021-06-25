import * as React from 'react';
import './Links.sass';

class Links extends React.PureComponent {
  render() {
    return (
      <div className="Links">
        <a href="http://reddit.com">reddit</a>
        <a href="https://www.facebook.com">facebook</a>
        <a href="https://mobile.twitter.com">twitter</a>
        <a href="https://www.instagram.com">instagram</a>
        <a href="https://mail.google.com">gmail</a>
        <a href="http://feedly.com">feedly</a>
        <a href="https://github.com">github</a>
        <a href="https://calendar.google.com/calendar/render#main_7">
          calendar
        </a>
        <a href="https://docs.google.com">docs</a>
        <a href="https://sheets.google.com">sheets</a>
        <b>ITx</b>
        <a href="https://github.com/pgdevelopers">github - ITx</a>
        <a href="https://github.com/orgs/procter-gamble/teams/pgssa">pgssa</a>
        <a href="https://github.com/pgdevelopers/50L-Home">50l_home</a>
        <b>Dev</b>
        <a href="http://localhost:3000">localhost:3000</a>
        <a href="http://localhost:4200">localhost:4200</a>
        <a href="http://localhost:8000">localhost:8000</a>
        <a href="http://localhost:8080">localhost:8080</a>
        <a href="http://localhost:9001">localhost:9001</a>
      </div>
    );
  }
}

export default Links;
