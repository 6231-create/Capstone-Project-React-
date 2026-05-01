import { createContext, useContext, useState } from "react";

const TravelPlansContext = createContext(null);

export function TravelPlansProvider({ children }) {
  const [savedPlans, setSavedPlans] = useState([]);

  const savePlan = (plan) => {
    const newPlan = {
      id: Date.now(),
      savedAt: new Date().toLocaleString(),
      ...plan,
    };
    setSavedPlans((prev) => [newPlan, ...prev]);
    return newPlan;
  };

  const deletePlan = (id) => {
    setSavedPlans((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <TravelPlansContext.Provider value={{ savedPlans, savePlan, deletePlan }}>
      {children}
    </TravelPlansContext.Provider>
  );
}

export function useTravelPlans() {
  return useContext(TravelPlansContext);
}
