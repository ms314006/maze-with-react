/* eslint-disable react/no-array-index-key */
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import React, { useState, useEffect, useRef } from 'react';
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
      new MazeCol(0, 1, 1, 0),
    ],
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
    start: { x: 0, y: 5 },
    end: { x: 9, y: 6 },
    cheatPoint: { x: 3, y: 8 },
  });
  const [characterPosition, setCharacterPosition] = useState({ ...mazeInfo.start });
  const [isCharacterCollision, setIsCharacterCollision] = useState(false);
  const [characterCollisionCount, setCharacterCollisionCount] = useState(0);
  const [enabledCheatModal, setEnabledCheatModal] = useState(false);
  const [isFinishedMaze, setIsFinishedMaze] = useState(false);
  const CHARACTER_HP = 10;
  const characterAlreadyDead = characterCollisionCount >= CHARACTER_HP;
  const mainBackgroundColor = characterAlreadyDead ? 'bg-sky-900' : 'bg-amber-100';
  const minorBorderColor = characterAlreadyDead ? 'border-red-500' : 'border-sky-700';
  const minorTextColor = characterAlreadyDead ? 'text-red-500' : 'text-sky-700';
  const renderMazeInfo = (rowIndex, colIndex) => {
    const getPositionIsMatch = ({ x, y }) => (
      x === colIndex && y === rowIndex
    );
    if (getPositionIsMatch(characterPosition)) {
      if (isFinishedMaze) return '🤩';
      if (enabledCheatModal) return '👽';
      if (characterAlreadyDead) return '👻';
      if (isCharacterCollision) return '😵';
      return '🤑';
    }
    if (getPositionIsMatch(mazeInfo.end)) {
      return '💰';
    }

    return '';
  };

  const mazeContainer = useRef(null);
  const shakeMazeContainer = () => {
    mazeContainer.current.classList.add('animate-shake');
    const ANIMATION_TIME = 100;
    setTimeout(() => {
      mazeContainer.current.classList.remove('animate-shake');
    }, ANIMATION_TIME);
  };

  const moveCharacter = ({ keyCode }) => {
    if (isFinishedMaze) return;
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
    if (
      (maze[y][x][moveDirection] && !enabledCheatModal)
      || (x === 0 && moveDirection === 'left')
      || (x === maze[0].length - 1 && moveDirection === 'right')
      || (y === 0 && moveDirection === 'top')
      || (y === maze.length - 1 && moveDirection === 'bottom')
    ) {
      shakeMazeContainer();
      if (x === mazeInfo.cheatPoint.x && y === mazeInfo.cheatPoint.y) {
        setEnabledCheatModal(true);
      }
      setCharacterCollisionCount(
        currentCharacterCollisionCount => (
          currentCharacterCollisionCount + 1
        ),
      );
    } else {
      setCharacterPosition({
        x: x + offset.x,
        y: y + offset.y,
      });
    }
    setIsCharacterCollision(maze[y][x][moveDirection]);
  };

  useEffect(() => {
    window.addEventListener('keydown', moveCharacter);
    const { x: endX, y: endY } = mazeInfo.end;
    if (characterPosition.x === endX && characterPosition.y === endY) {
      setIsFinishedMaze(true);
    }
    return () => {
      window.removeEventListener('keydown', moveCharacter);
    };
  }, [characterPosition, characterCollisionCount, isFinishedMaze]);

  const initMaze = () => {
    setCharacterPosition({ ...mazeInfo.start });
    setIsCharacterCollision(false);
    setIsFinishedMaze(false);
    setEnabledCheatModal(false);
    setCharacterCollisionCount(0);
  };
  useEffect(initMaze, []);
  return (
    <div
      className={`
        w-full
        h-full
        flex
        flex-col
        items-center
        transition-all
        ${mainBackgroundColor}
      `}
    >
      <h1 className={`${minorTextColor} text-6xl my-12 text-center`}>
        MAZE
      </h1>
      <div className="w-80 h-80 relative">
        <div
          ref={mazeContainer}
          className="w-full h-full absolute top-0 left-0 transition-all"
        >
          {
            maze.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="w-full h-8 flex flex-row -mt-0.5"
              >
                {
                  row.map((col, colIndex) => (
                    <div
                      key={colIndex}
                      className={`w-8 h-8 text-center flex-1 border-solid transition-all border-2 -ml-0.5 ${minorBorderColor} ${getMazeWallBorder(col)}`}
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
      {
        isFinishedMaze && (
          <div className="w-full h-full bg-black/50 absolute flex justify-center items-center">
            <div className={`w-72 h-48 ${mainBackgroundColor} rounded-xl border-4 ${minorBorderColor} flex flex-col justify-center items-center`}>
              <h2 className={`${minorTextColor} text-4xl font-bold`}>Finished!</h2>
              <button
                type="button"
                className={`${mainBackgroundColor} rounded border-2 ${minorBorderColor} mt-8 py-2 px-4 ${minorTextColor}`}
                onClick={initMaze}
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
