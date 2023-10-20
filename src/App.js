import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NewsBar from "./Components/NewsBar";


function App() {
  return (
    <>
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<NewsBar key={1} category="general"></NewsBar>}></Route>
        <Route path="/business" element={<NewsBar key={2}category="business"></NewsBar>}></Route>
        <Route path="/entertainment" element={<NewsBar key={3} category="entertainment"></NewsBar>}></Route>
        <Route path="/general" element={<NewsBar key={4} category="general"></NewsBar>}></Route>
        <Route path="/health" element={<NewsBar key={5} category="health"></NewsBar>}></Route>
        <Route path="/science" element={<NewsBar key={6} category="science"></NewsBar>}></Route>
        <Route path="/sports" element={<NewsBar key={7} category="sports"></NewsBar>}></Route>
        <Route path="/technology" element={<NewsBar key={8} category="technology"></NewsBar>}></Route>
      </Routes>
      
    </Router>
  </>
  );
}

export default App;
