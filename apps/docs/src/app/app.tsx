import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/utils">Utils</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/core">Core</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/core"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/" element={<>test</>} />
      </Routes>
    </div>
  );
}

export default App;
