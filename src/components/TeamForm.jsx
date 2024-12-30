import React, { useState } from "react";

const TeamForm = ({ data, setData }) => {
  const [team, setTeam] = useState({ orgId: "", name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = data.map((org) =>
      org.id === parseInt(team.orgId)
        ? { ...org, teams: [...org.teams, { id: Date.now(), name: team.name, members: [] }] }
        : org
    );
    setData(updatedData);
    setTeam({ orgId: "", name: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Team</h2>
      <select
        value={team.orgId}
        onChange={(e) => setTeam({ ...team, orgId: e.target.value })}
        required
      >
        <option value="">Select Organization</option>
        {data.map((org) => (
          <option key={org.id} value={org.id}>
            {org.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Team Name"
        value={team.name}
        onChange={(e) => setTeam({ ...team, name: e.target.value })}
        required
      />
      <button type="submit">Add Team</button>
    </form>
  );
};

export default TeamForm;
