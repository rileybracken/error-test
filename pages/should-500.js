import React from 'react';
import Error from './_error';
import fetch from 'isomorphic-unfetch'

export default class Shoud500 extends React.Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const {
      status,
      statusText,
    } = await fetch(`${baseUrl}/api/should-500`);
    const statusCode = status > 200 ? status : false;

    return { statusCode, statusText };
  }

  render() {
    if (this.props.statusCode) {
      return <Error errorOrigin="should-500.js" { ...this.props } />
    }

    return (
      <div>
        <h1>Should never get to here</h1>
        <pre>{ JSON.stringify(this.props, null, 2) }</pre>
      </div>
    )
  }
}
