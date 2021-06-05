import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button, Link, Divider } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { IRepository } from '../state/actions'

interface Props {
    data: IRepository[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
           
            margin: '25px',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
        span: {
            display: 'block',
            width: '100%',
            margin: '5px',
        },
    })
)

const RepositoryItem = ({ data }: Props) => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const [items, setItems] = useState<IRepository[]>([])

    const handleChange =
        (panel: string) =>
        (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }

    useEffect(() => {
        if (data.length) {
            setItems(data.splice(0, 10))
        }
    }, [data])

    function showMoreHandler() {
        setItems([...items, ...data.splice(0, 10)])
    }

    return (
        <>
            <div className={classes.root}>
                {items.map((item, i) => (
                    <Accordion
                        key={i}
                        expanded={expanded === `panel${i + 1}`}
                        onChange={handleChange(`panel${i + 1}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${i + 1}bh-content`}
                            id={`panel${i + 1}bh-header`}
                        >
                            <Typography className={classes.heading}>
                                {item.name}
                            </Typography>
                            <Typography className={classes.secondaryHeading}>
                                {item.description}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                variant='button'
                                className={classes.span}
                            >
                                {item.links.npm ? (
                                    <>
                                        <Link
                                            className={classes.span}
                                            href={item.links.npm}
                                        >
                                            NPM
                                        </Link>{' '}
                                        <Divider />
                                    </>
                                ) : null}

                                {item.links.repository ? (
                                    <>
                                        {' '}
                                        <Link
                                            className={classes.span}
                                            href={item.links.repository}
                                        >
                                            GitHub
                                        </Link>{' '}
                                        <Divider />
                                    </>
                                ) : null}

                                {item.links.homepage ? (
                                    <Link
                                        className={classes.span}
                                        href={item.links.homepage}
                                    >
                                        Homepage
                                    </Link>
                                ) : null}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>

            {data.length > 0 && (
                <Button color='primary' onClick={showMoreHandler}>
                    More
                </Button>
            )}
        </>
    )
}

export default RepositoryItem
