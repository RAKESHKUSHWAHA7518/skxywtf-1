import React from "react";
import MainSearch from "./MainSearch";
import MarketLeaders from "./MarketLeaders";
import Ad from "./Ad";
import IndexETF from "./IndexETF";
import TopMovers from "./TopMovers";
import TopPicks from "./TopPicks";
import BestPerform from "./BestPerform";
import MostTweets from "./MostTweets";

const Main = () => {
  return (
    <div>
      <MainSearch />
      <MarketLeaders />
      <Ad />
      <IndexETF />
      <TopMovers />
      <TopPicks />
      <MostTweets />
      <BestPerform />
    </div>
  );
};

export default Main;
