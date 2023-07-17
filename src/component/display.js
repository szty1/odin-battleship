import '../styles/style.css';

const Display = () => {

  // prints the board to console (for testing purposes)
  const printBoard = (board) => {
    board.forEach(row => {
      let rowdata = [];
      row.forEach(slot => {
        rowdata.push(slot.state);
      });
      console.log(rowdata.join(' | '));
    })
  }

  return { printBoard }
  
}

export default Display;




