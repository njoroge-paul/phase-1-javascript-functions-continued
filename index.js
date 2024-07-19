// code your solution here
// index.js
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  function wrapAdjective(highlightCharacter) {
    return function(adjective) {
      return `You are ${highlightCharacter}${adjective}${highlightCharacter}!`;
    };
  }
  
  module.exports = { saturdayFun, mondayWork, wrapAdjective };