// code your solution here
function superbowlWin(record){
    const winner = record.find(record => record.result === "W")
    if(winner){
        return winner.year
    }
}