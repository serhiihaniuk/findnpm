import React from 'react'
import NavBar from './NavBar'
import RepositoriesList from './RepositoriesList'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({
    root: {
       backgroundColor: theme.palette.background.default,
       minHeight: '100vh',
       paddingBottom: '100px'
    }
}))

const Layout = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <NavBar />
            <Container maxWidth='md'>
                <RepositoriesList />
                
            </Container>
        </div>
    )
}

export default Layout
