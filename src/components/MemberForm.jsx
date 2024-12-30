import React, { useState } from "react";  

const MemberForm = ({ data, setData }) => {  
  const [member, setMember] = useState({ teamId: "", name: "", image: null });  

  const handleImageChange = (e) => {  
    const file = e.target.files[0]; // Get the selected file  
    if (file) {  
      setMember({ ...member, image: file }); // Update member state with the file  
    }  
  };  
  
  const handleSubmit = (e) => {  
    e.preventDefault();  

    const updatedData = data.map((org) => ({  
      ...org,  
      teams: org.teams.map((team) =>  
        team.id === parseInt(member.teamId)  
          ? {  
              ...team,  
              members: [  
                ...team.members,  
                {  
                  id: Date.now(),  
                  name: member.name,  
                  image: member.image ? URL.createObjectURL(member.image) : null // Create a temporary URL for the image  
                }  
              ]  
            }  
          : team  
      ),  
    }));  

    setData(updatedData);  
    // Reset member state after submission  
    setMember({ teamId: "", name: "", image: null });  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <h2>Add Member</h2>  
      <select  
        value={member.teamId}  
        onChange={(e) => setMember({ ...member, teamId: e.target.value })}  
        required  
      >  
        <option value="">Select Team</option>  
        {data.flatMap((org) =>  
          org.teams.map((team) => (  
            <option key={team.id} value={team.id}>  
              {team.name}  
            </option>  
          ))  
        )}  
      </select>  
      <input  
        type="text"  
        placeholder="Member Name"  
        value={member.name}  
        onChange={(e) => setMember({ ...member, name: e.target.value })}  
        required  
      />  
      <input type="file" accept="image/*" onChange={handleImageChange} required />  
      <button type="submit">Add Member</button>  
    </form>  
  );  
};  

export default MemberForm;