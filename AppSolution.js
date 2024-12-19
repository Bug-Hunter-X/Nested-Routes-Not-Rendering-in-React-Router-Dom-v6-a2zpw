import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <Link to="/home/about">About</Link>
      </nav>
      <Outlet/>
    </>
  );
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;