export interface allPlans {
    name: string;
    numberOfPerks: number;	
}

export const allPlans: allPlans[] = [
    {name: "introPlan", 
    numberOfPerks: 1},
    {name: "standardPlan", 
    numberOfPerks: 3},
    {name: "masterPlan", 
    numberOfPerks: 5},
    {name: "partnerPlan", 
    numberOfPerks: 6},
]