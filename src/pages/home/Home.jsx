import "./home.css";
import Chart from "../../components/chart/Chart";
import WidgestSm from "../../components/widgestSm/WidgestSm";
import WidgestLg from "../../components/widgestLg/WidgestLg";
import  { userData } from "../../dummyData";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
  
    <WidgestSm />
    <WidgestLg />
   
    </div>
    </div>
  )
}
