import Nomor1 from "./pages/no1";
import Nomor2 from "./pages/no2";
import Nomor3 from "./pages/no3";
import Nomor4 from "./pages/no4";
import Nomor5 from "./pages/no5";
import Nomor6 from "./pages/no6";
import Nomor7 from "./pages/no7";
import Nomor8 from "./pages/no8";
import Nomor9 from "./pages/no9";
import Nomor10 from "./pages/no10";
import Navbar from "./components/Navbar";
import ButtonBar from "./components/ButtonBar";
import Footers from "./components/Footer";
import Rumus from "./pages/Rumus";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white  transition duration-500">
      <Navbar />
      <div className="pt-16">
        <ButtonBar />
        <div className="container mx-auto p-4">
          <Nomor1 />
          <Nomor2 />
          <Nomor3 />
          <Nomor4 />
          <Nomor5 />
          <Nomor6 />
          <Nomor7 />
          <Nomor8 />
          <Nomor9 />
          <Nomor10 />
          <Rumus/>
          <Footers />
        </div>
      </div>
    </div>
  );
}
