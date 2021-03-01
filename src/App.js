import AboutFeature from "./feature/About";
import FooterFeature from "./feature/footer";
import HeaderFeature from "./feature/Header";
import HiremeFeature from "./feature/Hireme";
// import './App.css';
import HomeFeature from "./feature/Home";
import PortfolioFeature from "./feature/Portfolio";
import ServiceFeature from "./feature/Service";

function App() {
  return (
    <div className="App">
      <HeaderFeature />
      <HomeFeature />
      <AboutFeature />
      <ServiceFeature />
      <PortfolioFeature />
      <HiremeFeature />
      <FooterFeature />
    </div>
  );
}

export default App;
