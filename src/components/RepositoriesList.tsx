import { useState, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { makeStyles } from '@material-ui/core/styles'
import {
    TextField,
    Button,
    CircularProgress,
    Snackbar,
} from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import SendIcon from '@material-ui/icons/Send'
import RepositoryItem from './RepositoryItem'

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles(theme => ({
    root: {
        '& > div': {
            margin: 0,
            width: '55ch',
        },
        '&': {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    btn: {
        padding: '5px 0 0 0',
    },
    SearchForm: {
        margin: '50px 0',
    },
}))

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    const { searchRepositories } = useActions()
    const [open, setOpen] = useState(false)
    const { data, error, loading } = useTypedSelector(
        state => state.repositories
    )
    const { found } = useTypedSelector(state => state.alert)
    const classes = useStyles()
    const formSubmitHandler = (event: any) => {
        event.preventDefault()
        searchRepositories(term)
        setTerm('')
    }
    useEffect(() => {
        if (!found) setOpen(true)
    }, [found])
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value)
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity='info'>
                    Nothing was found
                </Alert>
            </Snackbar>

            <div className={classes.SearchForm}>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete='off'
                    onSubmit={e => {
                        e.preventDefault()
                        formSubmitHandler(e)
                    }}
                >
                    <TextField
                        id='standard-basic'
                        label='Search NPM packages
'
                        onChange={inputChangeHandler}
                        value={term}
                    />
                    <Button
                        color='primary'
                        onClick={formSubmitHandler}
                        className={classes.btn}
                    >
                        {' '}
                        <SendIcon color='primary' />
                    </Button>
                </form>
            </div>
            {loading && <CircularProgress />}
            {error && <div>{error}</div>}
            {!loading && !error && <RepositoryItem data={data} />}
        </>
    )
}

export default RepositoriesList
