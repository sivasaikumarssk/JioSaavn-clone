import { Library } from "../components/Library";
import { HiThere } from "../components/Hithere";
import { TopCharts } from "../components/TopCharts";
import { NewReleases } from "../components/NewReleases";
import { Discover } from "../components/Discover";

export const HomePageEle = () => {
  return (
    <>
      <div className="starting-div">
        <Library />
        <HiThere />
      </div>

      <TopCharts />
      <NewReleases />
      <Discover />
    </>
  );
};
