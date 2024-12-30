import React, { useState } from "react";
import OrganizationForm from "./components/OrganizationForm";
import TeamForm from "./components/TeamForm";
import MemberForm from "./components/MemberForm";
import HierarchyDisplay from "./components/HierarchyDisplay";

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <h1>Organization and Team Management</h1>
      <OrganizationForm data={data} setData={setData} />
      <TeamForm data={data} setData={setData} />
      <MemberForm data={data} setData={setData} />
      <HierarchyDisplay data={data} />
    </div>
  );
};

export default App;
