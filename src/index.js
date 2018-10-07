function isvaild(i, j, matrix, num) {
	return checkRow(i, matrix, num) &&
				 checkColumn(j, matrix, num) &&
         checkSquare(i, j, matrix, num);
}

function checkRow(i, matrix, number) {
  for (let k = 0; k < matrix[i].length; k++) {
    if (matrix[i][k] == number)
      return false;
  }
  return true;
}

function checkColumn(j, matrix, number) {
	for (let k = 0; k < matrix.length; k++) {
    if (matrix[k][j] == number)
      return false;
  }
  return true;
}

function checkSquare(i, j, matrix, number) {
	let ii = Math.floor(i / 3), jj = Math.floor(j / 3);
  for (let k = 3*ii; k < 3*ii + 3; k++) {
    for (let l = 3*jj; l < 3*jj + 3; l++) {
      if (matrix[k][l] == number)
        return false;
    }
  }
  return true;
}

module.exports = function solveSudoku(matrix) {
  let flag = 0;
  function dfs(matrix, index)  {
    if (index > 80)
    {
      flag = 1;
      return;
    }
    let i = Math.floor(index / 9), j = index % 9;
    if (matrix[i][j] !== 0)
      return dfs(matrix, index + 1);
    for (let v = 1; v <= 9; v++)
    {
      if (isvaild(i, j, matrix, v))
      {
        matrix[i][j] = v;
        dfs(matrix, index + 1);
      }
    }
    if (flag === 0)
      matrix[i][j] = 0;
  }
  dfs(matrix, 0)
  return matrix
}
