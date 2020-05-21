import React, { FC } from 'react'
import { Container } from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { IReducer, selectBlock } from 'reducers'
import { N, INDEX } from 'typings'


interface IProps {
    colIndex: INDEX
    rowIndex: INDEX

}
interface IState {
    isActive: boolean
    isPuzzle: boolean
    value: N
}
const Block: FC<IProps> =({colIndex,rowIndex})=> {
    const state = useSelector<IReducer,IState>(({challengeGrid, workingGrid, selectedBlock}) =>({
        isActive: selectedBlock 
        ? selectedBlock[0] === rowIndex && selectedBlock[1] ===colIndex
        : false,
        isPuzzle: challengeGrid && challengeGrid[rowIndex][colIndex]===0? true:false,
        value:workingGrid?workingGrid[rowIndex][colIndex]: 0
    
    }))
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    function handleClick() {
        if(!state.isActive) dispatch(selectBlock([rowIndex,colIndex]))
    }
    return (
        <Container 
        active= {state.isActive} 
        dat-cy= {`block-${rowIndex}-${colIndex}`} 
        onClick ={handleClick}
        puzzle ={state.isPuzzle} 
        >
            {state.value===0 ? '':state.value}
        </Container>
    )


}

export default Block