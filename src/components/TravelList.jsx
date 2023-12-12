/*import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from 'react';

const TravelList = () => {
 
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

 
  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map(listElement => (
          <li key={listElement.id}>
            <img src={listElement.image} alt={listElement.destination} />
            <h3>{listElement.destination}</h3>
            <p>{listElement.description}</p>
            <p>Total Cost: ${listElement.totalCost}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;*/

    /*import travelPlansData from "../assets/travel-plans.json";
    import React, { useState } from 'react';

    const TravelList = () => {
      const [travelPlans, setTravelPlans] = useState(travelPlansData);

      return (
        <div>
          <h2>Travel Plans</h2>
          <ul>
            {travelPlans.map(listElement => (
              <li key={listElement.id}>
                <img src={listElement.image} alt={listElement.destination} />
                <h3>{listElement.destination}</h3>
                <p>{listElement.description}</p>
                <p>Total Cost: ${listElement.totalCost}</p>
                
                
                {listElement.totalCost <= 350 && <p>Label: Great Deal</p>}
                {listElement.totalCost >= 1500 && <p>Label: Premium</p>}
                {listElement.allInclusive && <p>Label: All Inclusive</p>}
              </li>
            ))}
          </ul>
        </div>
      );
    };

    export default TravelList; 

*/

import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from 'react';

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  // Function to handle travel plan removal
  const handleRemoveTravelPlan = (id) => {
    // Filter out the travel plan with the given id
    const updatedTravelPlans = travelPlans.filter(plan => plan.id !== id);
    // Update the state with the filtered travel plans
    setTravelPlans(updatedTravelPlans);
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map(listElement => (
          <li key={listElement.id}>
            <img src={listElement.image} alt={listElement.destination} />
            <h3>{listElement.destination}</h3>
            <p>{listElement.description}</p>
            <p>Total Cost: ${listElement.totalCost}</p>
            
            {listElement.totalCost <= 350 && <p>Label: Great Deal</p>}
            {listElement.totalCost >= 1500 && <p>Label: Premium</p>}
            {listElement.allInclusive && <p>Label: All Inclusive</p>}
          
            <button onClick={() => handleRemoveTravelPlan(listElement.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;

