// eslint-disable-next-line @typescript-eslint/no-unused-vars

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

import { ScrollToTop } from '@pixel-design/scroll-to-top';

import { ArrowUp } from '@pixel-design/icon';

export function App() {
  return (
    <div>
      <NxWelcome title="docs" />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
          <li>
            <Link to="/scrollToTop">ScrollToTop</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
              <ScrollToTop />
            </div>
          }
        />
        <Route path="/icon" element={<ArrowUp />} />
        <Route
          path="/scrollToTop"
          element={
            <div className="bg-red-300">
              <ScrollToTop />
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
