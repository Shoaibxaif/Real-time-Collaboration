import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import EditorPage from "./Components/EditorPage";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor/:roomid" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
