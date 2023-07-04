import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Weather from "./components/Weather";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Fade>
          <Weather />
        </Fade>
      </div>
    </ChakraProvider>
  );
}

export default App;
