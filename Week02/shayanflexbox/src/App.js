import "./App.css";

function App() {
  return (
    <>
      <header className="p-4 bg-[red] border-4 border-black mt-2">
        <h1 className="text-[23px] font-bold text-center ">
          Welcome To header
        </h1>
      </header>

      <main className="flex flex-row flex-wrap w-[100vw] border-2 border-black mt-3 ">
        <section className="p-4 bg-[#f7f7] border-2 border-black flex-[1] h-[50vh] flex justify-center items-center font-bold text-[20px] min-w-[400px]">
          Nav
        </section>
        <section className="p-4 bg-[#236] border-2 border-black flex-[3] h-[50vh] flex justify-center items-center font-bold text-[20px] min-w-[400px]">
          Body
        </section>
        <section className="p-4 bg-[#6557] border-2 border-black flex-[1] h-[50vh] flex justify-center items-center font-bold text-[20px] min-w-[400px]">
          Aside
        </section>
      </main>

      <section className="w-[100vw] bg-[orange] border-2 border-black mt-3 h-[144px] ">
        <h1 className="text-[23px] font-bold text-center mt-9">About Me </h1>
      </section>

      <footer className="w-[100vw] bg-[aqua] border-2 border-black mt-2 h-[94px] ">
        <h1 className="text-[23px] font-bold text-center mt-6">Footer</h1>
      </footer>
    </>
  );
}

export default App;
