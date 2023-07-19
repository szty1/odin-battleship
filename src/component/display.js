import '../styles/style.css';

const Display = () => {

  // prints the board to console (for testing purposes)
  const logBoard = (board) => {
    board.forEach(row => {
      let rowdata = [];
      row.forEach(slot => {
        rowdata.push(slot.state);
      });
      console.log(rowdata.join(' | '));
    })
  }

  const loadPage = () => {
    loadPageSkeleton();
    loadHeader();
    loadMain();
    loadFooter();
  }

  const loadPageSkeleton = () => {
    const content = document.querySelector('.content');
    content.innerHTML = `
    <div class="header"></div>
    <div class="main"></div>
    <div class="footer"></div>
    `;
  }

  const loadHeader = () => {
    const header = document.querySelector('.header');
    header.innerHTML = `
      <h2>BATTLESHIP</h2>
      <h3>WITH A TWIST</h3>
    `;
  }

  const loadMain = () => {
    const main = document.querySelector('.main');
    main.innerHTML = `
      <div class="boards">
        <div class="side" id="player">
          <h3>YOUR BOARD</h3>
          <div class="board player">
          </div>
        </div>
        <div class="side computer">
          <h3>ENEMY'S BOARD</h3>
          <div class="board computer">
          </div>
        </div>
      </div>
      `;
  }

  const loadFooter = () => {
    const footer = document.querySelector('.footer');
    footer.innerHTML = `
    <span>BATTLESHIP by szty1 for Odin Project</span>
    `;
  }

  const loadBoard = (player) => {
    const board = document.querySelector(`.board.${player.getName()}`);
    let grid = "";
    player.getBoard().getBoard().forEach((row, i) => {
      row.forEach((slot, j) => {
        if (player.isComputer()) {
          grid += `<a href="#" class="cellBtn" data-id="${i},${j}"></a>`;
        } else {
          grid += `<div class="cell ${slot.state}"></div>`;
        }
      }); 
    });
    board.innerHTML = grid;
  }

  return { logBoard, loadPage, loadBoard }
  
}

export default Display;




