import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            textAlign: 'left',
            flexGrow: 1,
        },
    })
)

const NavBar = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className={classes.root}>
            <AppBar position='static' color='secondary'>
                <Toolbar>
                    <IconButton
                        onClick={handleClick}
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id='simple-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>GitHub</MenuItem>
                        <MenuItem onClick={handleClose}>LinkedIn</MenuItem>
                    </Menu>
                    <Typography variant='h6' className={classes.title}>
                        TS_
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
