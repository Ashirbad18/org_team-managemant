import React from "react";

const HierarchyDisplay = ({ data }) => (
  <div className="container mx-auto">  
    <h2 className="text-2xl font-bold mb-8 text-center">Hierarchy</h2>  
    {data.map((org) => (  
      <div key={org.id}>  
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">{org.name}</h3>  
        {org.teams.map((team) => (  
          <div key={team.id} className="ml-5">  
            <h4 className="text-lg font-medium text-blue-600 mb-1">{team.name}</h4>  
            <ul className="list-none pl-0">  
              {team.members.map((member) => (  
                <li key={member.id} className="text-base text-gray-700 mb-1 hover:text-red-500 cursor-pointer transition-colors duration-200">  
                  {member.name}  
                </li>  
              ))}  
            </ul>  
          </div>  
        ))}  
      </div>  
    ))}  
</div>
);

export default HierarchyDisplay;
