

// import Partner from "./components/partner";

import Hero from "./components/hero";
import Service3 from "./components/service3";
// import Why from "./components/why";
import Service from "./components/service";
import Blogs from "./components/blog";
// import Card from "./components/card";
import Time from "./components/time";
import CaseStudies from "./components/case";
// import State from "./components/state";
// import WorkProcess from "./components/t";
import FeaturesPage from "./components/feature";
import Slogan from "./components/slogan";
import Service2 from "./components/service2";
import Why from "./components/why";

const HomePage = () => {
  return (
    <main>
      <Hero/>
      <CaseStudies />
      <Slogan />
      {/* <State /> */}
      {/* <WorkProcess /> */}
      <Service />
      <Service2 />
      <Service3 />
      <FeaturesPage />
      <Time />
      {/* <Card /> */}
      <Why />
      <Blogs />
      {/* <Partner /> */}
    </main>
  );
};

export default HomePage;
