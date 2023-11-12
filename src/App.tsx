import '@/styles/global.scss';
import { Component, createSignal } from 'solid-js';
import { Router, Route, Routes } from "@solidjs/router";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Course from './pages/Courses/Course/Course';

const App: Component = () => {

  const [counter, setCounter] = createSignal(0);


  return (
    <div class="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/courses/:id" component={Course} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;
