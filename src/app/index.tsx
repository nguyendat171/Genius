/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';

const Router = React.lazy(() => import('./Router'));

export const App = () => {
  return (
    <React.Suspense fallback={null}>
      <Router />
    </React.Suspense>
  );
};
