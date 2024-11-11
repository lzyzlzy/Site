import logo from './miaomiao-removebg.png';
import './App.css';

function App() {
  return (
    <div className="App box-border" >
      <div className='box-content h-full w-full border-4 border-white flex'>
        <div className='basis-1/5'>
          <h1 className="text-3xl font-bold underline">
            Zhenyu.Liu
          </h1>
          <p className='hover:bg-sky-500'>
            Software Engineer
          </p>
          <p>
            Street Photographer
          </p>
          <p className='hover:font-bold underline'>
            <a href='https://github.com/lzyzlzy'>Github</a>
          </p>
          <p className='hover:font-bold underline'>
            <a href='https://www.instagram.com/andrewliu30/'>Instagram</a>
          </p>
        </div>
        <div className='basis-4/5'>
          <h1>Ok</h1>
        </div>
      </div>
    </div>

  );
}

export default App;
