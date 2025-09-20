import Header from "./components/Header";
import PegBoard from "./components/boards/PegBoard";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <PegBoard/>
      </main>
    </div>
  );
}


export default App;
