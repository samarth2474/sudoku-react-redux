import checkGrid from './'

describe ('checkGrid',()=>{
    it ('returns false when grid is not complete', ()=>{
        expect(
            checkGrid([
                [0, 4, 2, 6, 5, 1, 3, 9, 7],
                [5, 3, 7, 2, 8, 9, 6, 4, 1],
                [6, 9, 1, 7, 3, 4, 5, 2, 8],
                [1, 6, 3, 8, 4, 5, 9, 7, 2],
                [7, 5, 8, 1, 9, 2, 5, 6, 3],
                [9, 2, 4, 3, 7, 6, 1, 8, 5],
                [4, 7, 6, 5, 1, 8, 2, 3, 9],
                [2, 8, 5, 9, 6, 3, 7, 1, 4],
                [3, 1, 9, 3, 1, 7, 8, 5, 6]
            ])
        ).toBeFalsy()
        expect(
            checkGrid([
                [8, 4, 2, 6, 5, 1, 3, 9, 7],
                [5, 3, 7, 2, 8, 9, 6, 4, 1],
                [6, 9, 1, 7, 3, 4, 5, 2, 8],
                [1, 6, 3, 8, 4, 5, 9, 7, 2],
                [7, 5, 8, 1, 0, 2, 5, 6, 3],
                [9, 2, 4, 3, 7, 6, 1, 8, 5],
                [4, 7, 6, 5, 1, 8, 2, 3, 9],
                [2, 8, 5, 9, 6, 3, 7, 1, 4],
                [3, 1, 9, 3, 1, 7, 8, 5, 6]
            ])
        ).toBeFalsy()
        expect(
            checkGrid([
                [8, 4, 2, 6, 5, 1, 3, 9, 7],
                [5, 3, 7, 2, 8, 9, 6, 4, 1],
                [6, 9, 1, 7, 3, 4, 5, 2, 8],
                [1, 6, 3, 8, 4, 5, 9, 7, 2],
                [7, 5, 8, 1, 9, 2, 5, 6, 3],
                [9, 2, 4, 3, 7, 6, 1, 8, 5],
                [4, 7, 6, 5, 1, 8, 2, 3, 9],
                [2, 8, 5, 9, 6, 3, 7, 1, 4],
                [3, 1, 9, 3, 1, 7, 8, 5, 0]
            ])
        ).toBeFalsy()
    })
    it ('returns true when the grid is complete',()=>{
        expect(
            checkGrid([
                [8, 4, 2, 6, 5, 1, 3, 9, 7],
                [5, 3, 7, 2, 8, 9, 6, 4, 1],
                [6, 9, 1, 7, 3, 4, 5, 2, 8],
                [1, 6, 3, 8, 4, 5, 9, 7, 2],
                [7, 5, 8, 1, 9, 2, 5, 6, 3],
                [9, 2, 4, 3, 7, 6, 1, 8, 5],
                [4, 7, 6, 5, 1, 8, 2, 3, 9],
                [2, 8, 5, 9, 6, 3, 7, 1, 4],
                [3, 1, 9, 3, 1, 7, 8, 5, 6]
            ])
        ).toBeTruthy()
    })
})