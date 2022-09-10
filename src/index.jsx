import 'regenerator-runtime/runtime';
import 'core-js/stable';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '@/plugins/tailwind.css';

class MazeCol {
  constructor(top, right, bottom, left) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }
}

const App = () => {
  const [maze] = useState([
    [
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(1, 1, 0, 0),
      new MazeCol(1, 1, 0, 1),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(1, 1, 0, 0),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 1, 0, 0),
    ],
    [
      new MazeCol(0, 1, 0, 1),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 0, 0, 1),
      new MazeCol(0, 0, 0, 0),
      new MazeCol(1, 1, 0, 0),
      new MazeCol(0, 0, 1, 1),
      new MazeCol(0, 1, 0, 0),
      new MazeCol(0, 1, 0, 1),
    ],
    [
      new MazeCol(0, 1, 0, 1),
      new MazeCol(0, 1, 1, 1),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 1, 0, 1),
      new MazeCol(0, 1, 0, 1),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 1, 1, 1),
    ],
    [
      new MazeCol(0, 0, 1, 1),
      new MazeCol(1, 1, 0, 0),
      new MazeCol(0, 1, 0, 1),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 1, 0, 1),
      new MazeCol(0, 0, 1, 1),
      new MazeCol(1, 0, 0, 0),
      new MazeCol(1, 1, 0, 0),
    ],
    [
      new MazeCol(1, 0, 0, 1),
      new MazeCol(0, 0, 1, 0),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 1, 0, 1),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(0, 0, 1, 0),
      new MazeCol(1, 1, 0, 0),
      new MazeCol(0, 1, 0, 1),
      new MazeCol(0, 1, 0, 1),
    ],
    [
      new MazeCol(0, 1, 1, 0),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 0, 0, 0),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 0, 1, 1),
      new MazeCol(1, 1, 0, 0),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(0, 0, 1, 0),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 1, 1, 1),
    ],
    [
      new MazeCol(1, 0, 0, 1),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 0, 1, 1),
      new MazeCol(1, 1, 1, 0),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 0, 0, 1),
      new MazeCol(1, 1, 1, 0),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 0, 1, 0),
    ],
    [
      new MazeCol(0, 1, 0, 1),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(1, 0, 1, 1),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(1, 1, 0, 0),
    ],
    [
      new MazeCol(0, 1, 1, 1),
      new MazeCol(0, 1, 0, 1),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 1, 1, 0),
      new MazeCol(1, 0, 0, 1),
      new MazeCol(1, 1, 0, 0),
      new MazeCol(1, 1, 0, 1),
      new MazeCol(0, 0, 1, 1),
      new MazeCol(1, 1, 0, 0),
      new MazeCol(0, 1, 0, 1),
    ],
    [
      new MazeCol(1, 0, 1, 1),
      new MazeCol(0, 0, 1, 0),
      new MazeCol(0, 0, 1, 0),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(0, 1, 1, 0),
      new MazeCol(0, 0, 1, 1),
      new MazeCol(0, 0, 1, 0),
      new MazeCol(1, 0, 1, 0),
      new MazeCol(0, 0, 1, 0),
      new MazeCol(0 ,1, 1, 0),
    ]
  ]);
  const getMazeWallBorder = (mazeCol) => {
    let mazeWallBorder = '';
    if (!mazeCol.top) mazeWallBorder += 'border-t-transparent ';
    if (!mazeCol.right) mazeWallBorder += 'border-r-transparent ';
    if (!mazeCol.bottom) mazeWallBorder += 'border-b-transparent ';
    if (!mazeCol.left) mazeWallBorder += 'border-l-transparent ';
    return mazeWallBorder;
  };

  const [mazeInfo] = useState({
    end: { x: 9, y: 6 }
  });
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 5 });
  const [isCharacterCollision, setIsCharacterCollision] = useState(false);
  const renderMazeInfo = (rowIndex, colIndex) => {
    const getPositionIsMatch = ({ x, y }) => (
      x === colIndex && y === rowIndex
    )
    if (getPositionIsMatch(characterPosition)) {
      if (isCharacterCollision) return '😵';
      return '🤑';
    }
    if (getPositionIsMatch(mazeInfo.end)) {
      return '💰';
    }
  }
  const checkCharacterMoveable = ({ keyCode }) => {
    let result = false;
    switch (keyCode) {
      case 38:
        result = getIsCharacterCollision(characterPosition, 'top');
        break;
      case 39:
        result = getIsCharacterCollision(characterPosition, 'right');
        break;
      case 40:
        result = getIsCharacterCollision(characterPosition, 'bottom');
        break;
      case 37:
        result = getIsCharacterCollision(characterPosition, 'left');
        break;
      default:
    }
    return !result;
  }

  const moveCharacter = ({ keyCode }) => {
    const offset = { x: 0, y: 0 };
    let moveDirection = null;
    switch (keyCode) {
      case 38:
        moveDirection = 'top';
        offset.y -= 1;
        break;
      case 39:
        moveDirection = 'right';
        offset.x += 1;
        break;
      case 40:
        moveDirection = 'bottom';
        offset.y += 1;
        break;
      case 37:
        moveDirection = 'left';
        offset.x -= 1;
        break;
      default:
    }
    const { x, y } = characterPosition;
    if (!maze[y][x][moveDirection]) {
      setCharacterPosition({
        x: x + offset.x,
        y: y + offset.y
      });
    }
    setIsCharacterCollision(maze[y][x][moveDirection]);
  }

  useEffect(() => {
    window.addEventListener('keydown', moveCharacter);
    return () => {
      window.removeEventListener('keydown', moveCharacter);
    }
  }, [characterPosition]);

  return (
    <div className="w-full h-full bg-amber-100 py-8 flex flex-col items-center">
      <h1 className="text-sky-700 text-6xl my-12 text-center">MAZE</h1>
      <div className="w-80 h-80">
        {
          maze.map((row, rowIndex) => (
            <div className="w-full h-8 flex flex-row -mt-0.5">
              {
                row.map((col, colIndex) => (
                  <div
                    className={`
                      w-8
                      h-8
                      text-center
                      flex-1
                      border-solid
                      border-sky-700
                      border-2
                      -ml-0.5
                      ${getMazeWallBorder(col)}
                    `}
                  >
                    { renderMazeInfo(rowIndex, colIndex) }
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
