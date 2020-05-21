import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {GlobalStyles, theme} from './styles'
import { Content, Title, Card, Grid, Numbers, NewButton } from './components'
import { configureStore, register } from './core'

const {store, persistor} = configureStore()

ReactDOM.render(
<>
    <ThemeProvider theme = {theme}>
        <GlobalStyles />
        <Provider store ={store}>
            <PersistGate loading= {null} persistor ={persistor}>
                <Content data-cy="content">
                    <Title data-cy="title">Sudoku</Title>
                    <Card data-cy= "card">
                        <NewButton />
                        <Grid />
                        <Numbers />
                    </Card>
                </Content>
            </PersistGate>
        </Provider>
    </ThemeProvider> 
</>,
document.getElementById('root'))

register()