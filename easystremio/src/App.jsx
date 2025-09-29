import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <SideBar />
      <main className="flex-1 flex flex-col">
        <TopBar />
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;