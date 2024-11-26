import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Reacttab.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import useAlljobs from "../../../hooks/useAlljobs";
import AlljobsCards from "../AlljobsCards/AlljobsCards";
const Reacttab = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [alljobs] = useAlljobs();
  console.log(alljobs);
  const fulltime = alljobs.filter((job) => job.category === "Fulltime");
  const parttime = alljobs.filter((job) => job.category === "parttime");
  const hybrid = alljobs.filter((job) => job.category === "hybrid");
  return (
    <div className="mb-12 mt-[7rem] md:mt-7 lg:mx-auto max-w-6xl overflow-hidden mx-7">
      <h2 className="text-[#ff4848] text-center text-2xl md:text-4xl font-semibold mt-4 mb-8 ">
        Found {alljobs.length} jobs
      </h2>
      <hr className="mb-2 h-1 w-[10%] mx-auto bg-[#ff4848]" />
      <Tabs className="line">
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab>Onsite Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid Job</Tab>
        </TabList>

        <TabPanel>
          <AlljobsCards alljobs={alljobs}></AlljobsCards>
        </TabPanel>
        <TabPanel>
          <AlljobsCards alljobs={fulltime}></AlljobsCards>
        </TabPanel>
        <TabPanel>
          <AlljobsCards alljobs={parttime}></AlljobsCards>
        </TabPanel>
        <TabPanel>
          <AlljobsCards alljobs={hybrid}></AlljobsCards>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Reacttab;
