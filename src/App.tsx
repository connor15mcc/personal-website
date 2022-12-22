import 'css-resetter';
import './App.css';

import Resume from './pages/Experience/Resume';
import Home from './pages/Home/Home';
import Template from './pages/Template/Template';

function App() {
  return (
    <Template>
      <Home></Home>
      <Resume></Resume>
    </Template>
  );
}

export default App;
