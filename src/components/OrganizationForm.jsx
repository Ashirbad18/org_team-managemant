import React, { useState } from "react";

const OrganizationForm = ({ data, setData }) => {
  const [org, setOrg] = useState({ name: "", email: "", location: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { ...org, id: Date.now(), teams: [] }]);
    setOrg({ name: "", email: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 >Add Organization</h2>
      <input
        type="text"
        placeholder="Name"
        value={org.name}
        onChange={(e) => setOrg({ ...org, name: e.target.value })}
        required
      />
      <input 
        type="email"
        placeholder="Email"
        value={org.email}
        onChange={(e) => setOrg({ ...org, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={org.location}
        onChange={(e) => setOrg({ ...org, location: e.target.value })}
        required
      />
      <button type="submit">Add Organization</button>
    </form>
  );
};

export default OrganizationForm;
