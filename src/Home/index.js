import React from "react";
import InteractiveCard from "./Wallet";
import EntryCards from "./Entries/EntryCards";

function Home() {
  return (
    <div>
      <InteractiveCard />
      <EntryCards />
    </div>
  );
}

export default Home;
