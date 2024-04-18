import Grafik from "../../components/Graph";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="px-6 py-8">
        <Card />
        <Grafik />
      </div>
      <Footer />
    </div>
  );
}
