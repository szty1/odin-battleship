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

  const loadPage = (size) => {
    setCSSVariables(size);
    renderPageSkeleton();
    renderHeader();
    renderMain();
    renderFooter();
  }

  const setCSSVariables = (size) => {
    document.documentElement.style.setProperty('--grid-width', size[0]);
    document.documentElement.style.setProperty('--grid-height', size[1]);
  }

  const renderPageSkeleton = () => {
    const content = document.querySelector('.content');
    content.innerHTML = `
    <div class="header"></div>
    <div class="main"></div>
    <div class="footer"></div>
    `;
  }

  const renderHeader = () => {
    const header = document.querySelector('.header');
    header.innerHTML = `
      <h2>BATTLESHIP</h2>
      <h3>WITH A TWIST</h3>
    `;
  }

  const renderMain = () => {
    const main = document.querySelector('.main');
    main.innerHTML = `
      <div class="boards">
        <div class="side" id="player">
          <h3>YOUR BOARD</h3>
          <div class="board player">
          </div>
          <div class="ships player"></div>
        </div>
        <div class="side" id="computer">
          <h3>ENEMY'S BOARD</h3>
          <div class="board computer">
          </div>
          <div class="ships computer"></div>
        </div>
      </div>
      <div class="instructions">
        <h2></h2>
      </div>
      <div class="message">
        <h2></h2>
      </div>
      <div class="newgame hide">
        <input type="button" value="Start a New Game">
      </div>
      `;
  }

  const renderFooter = () => {
    const footer = document.querySelector('.footer');
    footer.innerHTML = `
    <span>BATTLESHIP by szty1 for Odin Project</span>
    `;
  }

  const renderBoard = (player, gameEnded = false) => {
    const board = document.querySelector(`.board.${player.getName()}`);
    let grid = "";
    player.getBoard().getBoard().forEach((row, i) => {
      row.forEach((slot, j) => {
        if (player.isComputer() && !gameEnded) {
          if (slot.state === 'miss' || slot.state === 'hit' || slot.state === 'sunk') {
            grid += `<div class="cell ${slot.state}"></div>`;
          } else {
            grid += `<a href="#" class="cellBtn" data-id="${i},${j}"></a>`;
          }
        } else {
          grid += `<div class="cell ${slot.state}"></div>`;
        }
      }); 
    });
    board.innerHTML = grid;

    const shipsContainer = document.querySelector(`.ships.${player.getName()}`);
    let ships = "";
    player.getBoard().getShips().forEach(ship => {
      ships += `<div class="smallship ${ship.isSunk() ? 'sunk' : ''}">${ship.getSize()}</div>`;
    })
    shipsContainer.innerHTML = ships;
  }

  const renderShipPlacementBoard = (player) => {
    showMsg("PLACE YOUR SHIP!", ".instructions");
    showMsg("RIGHT CLICK TO CHANGE SHAPE");
    const board = document.querySelector(`.board.player`);
    let grid = "";
    player.getBoard().getBoard().forEach((row, i) => {
      row.forEach((slot, j) => {
        grid += `<a href="#" class="cellBtn  ${slot.state}" data-id="${i},${j}"></a>`;
      }); 
    });
    board.innerHTML = grid;

    const shipsContainer = document.querySelector(`.ships.player`);
    let ships = "";
    player.getBoard().getShips().forEach(ship => {
      ships += `<div class="smallship ${ship.isSunk() ? 'sunk' : ''}">${ship.getSize()}</div>`;
    })
    shipsContainer.innerHTML = ships;
  }

  const highlight = (currentplayer) => {
    if (currentplayer.isComputer()) {
      document.querySelector('#player').classList.add('highlighted');
      document.querySelector('#computer').classList.remove('highlighted');
      showMsg("", ".instructions");
    } else {
      document.querySelector('#player').classList.remove('highlighted');
      document.querySelector('#computer').classList.add('highlighted');
      showMsg("MAKE YOUR MOVE!", ".instructions");
    }
  }

  const showMsg = (msg, div = ".message") => {
    const instructions = document.querySelector(`${div} h2`);
    instructions.innerHTML = msg;
  }

  const showWinner = (winner) => {
    highlight(winner);
    if (winner.getName() === 'player') {
      showMsg("YOU'VE WON!", ".instructions");
      showMsg("NICE GAME!");
    }
    else {
      showMsg("YOU'VE LOST!", ".instructions");
      showMsg("BETTER LUCK NEXT TIME!");
    }
  }

  const showNewGameBtn = () => {
    document.querySelector('.newgame').classList.remove("hide");
  }
  
  return { logBoard, loadPage, renderBoard, renderShipPlacementBoard, highlight, showWinner, showMsg, showNewGameBtn }
  
}

export default Display;




