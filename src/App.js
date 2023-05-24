import './App.css';
import Aside from './components/aside/Aside';
import Body from './components/body/Body';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Aside />
        <Body />
      </div>
    </>
  );
}
export default App