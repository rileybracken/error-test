import React from 'react';
import Error from './_error';
import fetch from 'isomorphic-unfetch';

import Back from '../components/Back';

export default class Page extends React.Component {
  static async getInitialProps({ query }) {
    const res = await fetch(`https://api.github.com/orgs/${query.slug}`);
    const statusCode = res.status > 200 ? res.status : false;
    const { public_repos, name } = await res.json();

    return { statusCode, query, public_repos, name };
  }

  render() {
    if (this.props.statusCode) {
      return <Error errorOrigin="organization.js" { ...this.props } />
    }

    return (
      <div>
        <Back />
        <h1>{ this.props.name } number of public repos: { this.props.public_repos }</h1>
        <pre>{ JSON.stringify(this.props, null, 2) }</pre>
      </div>
    )
  }
}
