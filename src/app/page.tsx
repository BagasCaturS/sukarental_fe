import Image from "next/image";
import NavBar from "./components/navbar";
import Tiles from "./components/tiles";
import Sidebar from "./components/sidebar";
import Chart from "./components/charts/charts";
import GetUsers from "./components/charts/userschart";


export default function Home() {
  return (
    <div className=" flex flex-col mx-4">
      <Tiles></Tiles>
      <div className="w-1/2 flex">

        <div className="flex flex-col items-center mt-4">
          <p>Vehicles count</p>
          <Chart></Chart>
          {/* <GetUsers></GetUsers> */}
        </div>
      </div>
    </div>
  );
}
