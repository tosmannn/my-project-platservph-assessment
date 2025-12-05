import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import SubNavigation from "./components/sub-navigation/SubNavigation"


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

          <main className="flex-1 overflow-auto p-4 bg-gray-50">
            <div className="flex">
              <SubNavigation />
              <h1 className="text-2xl font-bold">Main Page</h1>
             
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
