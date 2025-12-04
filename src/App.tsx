import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"


function App() {
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden">
        <aside className="w-16 bg-gray-800 text-white flex-shrink-0 z-20 relative">
          <Sidebar />
        </aside>
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-16 bg-white text-black flex items-center px-4 flex-shrink-0 z-10 relative">
            <Header />
          </header>
        </div>
      </div>
    </>
  )
}

export default App
