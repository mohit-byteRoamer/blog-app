import "./App.css";
import BlogListing from "./components/module/blogListing";
import BlogState from "./contexts/blogContext/blogState";
function App() {

  return (
    <BlogState>
      <div className="App">
        <BlogListing />
      </div>
    </BlogState>
  );
}

export default App;
