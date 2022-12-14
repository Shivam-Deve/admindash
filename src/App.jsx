import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List'
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import './style/dark.scss'
import Sidebar from './components/sidebar/Sidebar';
import { productInputs, userInputs } from './formSource';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List title="Add New User" />} />
              <Route path=":userId" element={<Single />} />
              <Route path="New" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<List title="Add New Product" />} />
              <Route path=":productId" element={<Single />} />
              <Route path="New" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
