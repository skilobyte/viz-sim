import Header from "./components/Header";
import PinBoard from "./components/boards/PinBoard";
import { ThemeProvider } from "./components/themes/ThemeProvider";
import MultiBoardPage from "./visualizations/MultiBoardPage";
import RaftWithMessages from "./visualizations/RaftWithMessages";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
      <ThemeProvider>
    <PinBoard title="Raft Cluster">
    </PinBoard>
  </ThemeProvider>
    
    <RaftWithMessages>
    </RaftWithMessages>
      </main>
    </div>
  );
}


export default App;
