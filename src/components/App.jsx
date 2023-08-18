import Home from "./Home";
import Genre from "./Genre"
import UpcomingMovies from "./UpcomingMovies";
import ContactUs from "./ContactForm";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="App">
      <Home />
      <Genre />
      <UpcomingMovies />
      <ContactUs />
      <AboutUs />
    </div>
  );
}

export default App;
