import ProfileCard from "./components/ProfileCard";
import StatsCard from "./components/StatsCard";
import Meetings from "./components/Meetings";
import AnalyticsGraph from "./components/AnalyticsGraph";
import DevelopedAreas from "./components/DevelopedAreas";
import Navbar from "./components/Navbar";
import TrackerCard from "./components/TrackerCard";
import StopWatchIcon from "./assets/stopwatch.svg";
import CheckIcon from "./assets/check.svg";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col space-y-6 border-r border-gray-300">
          <Navbar />

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0">
            <div className="w-full md:w-1/3 flex flex-col">
              <ProfileCard />
            </div>

            <div className="w-full md:w-2/3 flex flex-col space-y-6">
              <div className="w-full md:w-2/3 flex flex-col space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <StatsCard
                    title="Prioritized Tasks"
                    percentage={83}
                    color="from-pink-400 to-orange-400"
                    icon={<img src={StopWatchIcon} alt="check icon" />}
                  />
                  <StatsCard
                    title="Additional Tasks"
                    percentage={56}
                    color="from-blue-400 to-teal-400"
                    icon={<img src={CheckIcon} alt="Stopwatch icon" />}
                  />
                </div>
              </div>

              <TrackerCard />
            </div>
          </div>

          <AnalyticsGraph />
        </div>

        <div className="md:col-span-1 flex flex-col space-y-6">
          <Meetings />
          <DevelopedAreas />
        </div>
      </div>
    </div>
  );
};

export default App;
