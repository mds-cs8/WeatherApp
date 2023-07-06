import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Weather from "./components/Weather";
import { Fade } from "react-awesome-reveal";
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme with new layer styles
// const theme = extendTheme({
//   textStyles: {
//     h2: {
//       // you can also use responsive styles
//       fontSize: ["48px", "72px"],
//       fontWeight: "bold",
//       lineHeight: "110%",
//       letterSpacing: "-2%",
//       FontFace: {
//         family: "Tajawal",
//         source: "../public/fonts/Tajawal-Bold.ttf",
//       },
//     },
//     h3: {
//       fontSize: ["36px", "48px"],
//       fontWeight: "semibold",
//       lineHeight: "110%",
//       letterSpacing: "-1%",
//     },
//   },
// });

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
