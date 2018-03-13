import React from 'react';
import Link from 'next/link';


export default () => (
  <div>
    <h1>Github Organizations</h1>
    <hr />
    <ul>
      <li>
        <Link
          href={{ pathname: '/organization', query: { slug: 'zeit' } }}
          as='/organization/zeit'
        >
          <a>Zeit</a>
        </Link>
      </li>

      <li>
        <Link
          href={{ pathname: '/organization', query: { slug: 'an-organization-that-shouldnt-exist' } }}
          as='/organization/an-organization-that-shouldnt-exist'
        >
          <a>An organization that 404's from organization.js (but I think it should come from _error.js)</a>
        </Link>
      </li>
    </ul>

    <h1>Other Links</h1>
    <hr />
    <ul>
      <li>
        <Link href={{ pathname: '/should-500' }}>
          <a>Should 500 from should-500.js (but I think it should be from _error.js)</a>
        </Link>
      </li>

      <li>
        <Link href={{ pathname: '/should-404' }}>
          <a>Should 404 from _error.js</a>
        </Link>
      </li>
    </ul>
  </div>
);
