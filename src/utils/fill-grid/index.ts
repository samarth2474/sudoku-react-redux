import { GRID, NUMBERS } from 'typings'
import { checkGrid, isInCol,isInRow, shuffle, identifyWorkingSquare, isInSquare } from 'utils'

const gridExample: GRID = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]

const numbers: NUMBERS[] =[1,2,3,4,5,6,7,8,9]

/**
 * a backtracking/recursive function to check all the possible numbers until a solution is found
 * @param grid 9X9 sudoku grid
 */
function fillGrid(grid: any) {
    let row = 0;
    let col = 0;
    for (let i = 0; i < 81; i++) {
        row = Math.floor(i/9);
        col = i % 9

        if (grid[row][col] ===0 ) {
            shuffle(numbers)
            for (let value of numbers) {
                //is it not in the grid row?
                if (!isInRow({grid, row, value})) {
                    //is it not in the grid col?
                    if (!isInCol({grid,col,value})) {
                        //is it not in the grid square?
                        const square = identifyWorkingSquare({col, grid, row})
                        if (!isInSquare({square, value})) {
                            //.. if that is the case then..
                            grid[row][col] = value
                            //check if the grid square is complete and if true then return
                            if (checkGrid(grid)) return true
                            // backrack FullGrid function
                            else if (fillGrid(grid)) return true
                        }
                    }
                    
                }
               
            }
            break
        }
    }

    grid[row][col] = 0;
   
}

export default fillGrid