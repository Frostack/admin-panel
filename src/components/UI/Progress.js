import React from 'react';

import { Outer, Inner } from './';

function Progress({ current, height, color }) {
  return (
    <Outer height={height}>
      <Inner current={current} height={height} color={color} />
    </Outer>
  );
}

export default Progress;
