import React from 'react';

import { ErrorText } from '../UI';

function RequestError() {
  return <ErrorText className="text-center mt-5">Failed to Load!</ErrorText>;
}

export default RequestError;
