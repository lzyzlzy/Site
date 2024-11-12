import './App.css';

function App() {
  return (
    <div className="App" >
      <div className='flex p-8 flex-col md:flex-row'>
        <div className='flex-none font-mono antialiased'>
          <h1 className="text-3xl font-bold underline">
            Zhenyu.Liu
          </h1>
          <div className='text-sm mt-1 text-gray-900'>
            <p>
              Software Engineer
            </p>
            <p>
              Street Photographer
            </p>
            <p>Home Barista</p>
          </div>
          <div className='mt-3 font-medium'>
            <p className='hover:font-bold'><a href='.'>About</a></p>
          </div>
          <div className='mt-3 underline'>
              <p className='hover:font-bold'>
              <a href='https://github.com/lzyzlzy'>Github</a>
            </p>
            <p className='hover:font-bold'>
              <a href='https://www.instagram.com/andrewliu30/'>Instagram</a>
            </p>
            <p className='hover:font-bold'>
              <a href='https://www.xiaohongshu.com/user/profile/5d785fe10000000001002fac'>Red</a>
            </p>
          </div>
        </div>
        <div className='grow ml-9'>
          <h1>Loading...</h1>
        </div>
      </div>
    </div>

  );
}

export default App;
