import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
   
} from '@material-ui/core'



const NavBar = () => {
    
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                ></IconButton>
                <Typography variant='h6' color='secondary'>Search NPM packages</Typography>
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
