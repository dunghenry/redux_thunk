import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRenders from "./PageRenders";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageRenders/>} exact />
          <Route path="/:page" element={<PageRenders/>} exact/>
          <Route path="/:page/:id" element={<PageRenders/>} exact/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App