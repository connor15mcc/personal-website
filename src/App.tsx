import 'css-resetter';
import './App.css';

import Experience from './pages/Experience/Experience';
import Home from './pages/Home/Home';
import Template from './pages/Template/Template';

function App() {
  return (
    <Template>
      <Home></Home>
      <Experience></Experience>
      <p>Example text goes here</p>
    </Template>
  );
}

export default App;
