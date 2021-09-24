// NPM Packages
import { BrowserRouter } from "react-router-dom";

// Project files
import Header from "./components/Header";
import LoadedLayout from "./components/LoadedLayout";
import Footer from "./components/Footer";
import useFetch from "./hooks/useFetch";
import backupData from "./data/backup.json";

export default function App() {
  // Constants
  const API_URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const { data, status } = useFetch(API_URL, backupData);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {status === 0 && <div>Loading...</div>}
        {status === 1 && <LoadedLayout data={data} />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
