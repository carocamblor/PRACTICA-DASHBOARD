import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Nav/>
        <PageContent/>
      </div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
