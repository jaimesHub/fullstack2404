const teams = [
    { name: 'Team A', points: 30, goalDifference: 10 },
    { name: 'Team B', points: 30, goalDifference: 15 },
    { name: 'Team C', points: 25, goalDifference: 5 },
    { name: 'Team D', points: 30, goalDifference: 10 },
    { name: 'Team E', points: 25, goalDifference: 5 }
  ];
  
function compareTeams(team1, team2) {
    // comparing by scores
    if (team1.points > team2.points) return -1;
    if (team1.points < team2.points) return 1;
  
    // comparing by GDs
    if (team1.goalDifference > team2.goalDifference) return -1;
    if (team1.goalDifference < team2.goalDifference) return 1;
  
    // comparing by names
    if (team1.name < team2.name) return -1;
    if (team1.name > team2.name) return 1;
  
    return 0;
}

teams.sort(compareTeams);
  
// Show result
console.log("Ranking:");
let index = 0;
for(const team of teams) {
  console.log(`${++index}. ${team.name} - Points: ${team.points}, GD: ${team.goalDifference}`);
}
  