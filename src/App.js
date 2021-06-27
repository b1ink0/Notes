import "./App.scss";
import { AuthProvider } from "./context/AuthContext";
import { StateProvider } from "./context/StateContext";
import LogInPage from "./components/note/LogInPage";

function App() {
  return (
    <AuthProvider>
      <StateProvider>
              <LogInPage/>
      </StateProvider>
    </AuthProvider>
  );
}

export default App;
