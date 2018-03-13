import React from 'react';

import Back from '../components/Back';

export default ({ errorOrigin, ...rest }) => (
  <div>
    <Back />
    <h1>{ `from ${errorOrigin || '_error.js'}` }</h1>
    <pre>{ JSON.stringify(rest, null, 2) }</pre>
  </div>
);
