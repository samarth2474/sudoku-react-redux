import { NUMBERS,  SQUARE } from 'typings'

interface IInput {
    square: SQUARE
    value: NUMBERS
}
/**
 * A function that returns true if the square contains the value
 * @param input an Object with 3X3 square and value 
 */
function isInSquare({square,value}:IInput): boolean {
    return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare