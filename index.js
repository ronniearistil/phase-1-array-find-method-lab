// code your solution here
function superbowlWin(records) {
    const win = records.find(game => game.result === 'W');
    return win ? win.year : undefined;
  }  