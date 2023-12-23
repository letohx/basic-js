const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = matrix.map(row => [...row]);

  resultMatrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      let bombCount = 0;

      if (col) {
        resultMatrix[rowIndex][colIndex] = 1;
      } else {
        if (matrix[rowIndex][colIndex - 1]) bombCount++;
        if (matrix[rowIndex][colIndex + 1]) bombCount++;
        if (rowIndex < matrix.length - 1 && matrix[rowIndex + 1][colIndex]) bombCount++;
        if (rowIndex < matrix.length - 1 && matrix[rowIndex + 1][colIndex + 1]) bombCount++;
        if (rowIndex < matrix.length - 1 && matrix[rowIndex + 1][colIndex - 1]) bombCount++;
        if (rowIndex > 0 && matrix[rowIndex - 1][colIndex - 1]) bombCount++;
        if (rowIndex > 0 && matrix[rowIndex - 1][colIndex + 1]) bombCount++;
        if (rowIndex > 0 && matrix[rowIndex - 1][colIndex]) bombCount++;

        resultMatrix[rowIndex][colIndex] = bombCount;
      }
    })
  })
  return resultMatrix;
}

module.exports = {
  minesweeper
};
