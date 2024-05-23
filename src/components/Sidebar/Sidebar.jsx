import React, { useEffect } from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import { useGetGenresQuery } from '../../services/TMDB.js'

import { useDispatch, useSelector } from 'react-redux'

import genreIcons from '../../assets/genres'

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory.js'

import useStyles from './styles'
const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
]

const blueLogo =
  'https://fontmeme.com/permalink/221021/05a11edbcdb03ee52c46894c2258e3b4.png'
const redLogo =
  'https://fontmeme.com/permalink/221021/b44a5b1265e17e23fce4aa53b1fa0307.png'

function Sidebar({ setMobileOpen }) {
  const theme = useTheme()
  const classes = useStyles()
  const dispatch = useDispatch()

  const { data, isFetching } = useGetGenresQuery()
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  )
  useEffect(() => {
    setMobileOpen(false)
  }, [genreIdOrCategoryName])

  return (
    <>
      <Link to='/' className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt='FilmpirePro Logo'
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to='/'>
            <ListItem
              button
              onClick={() => dispatch(selectGenreOrCategory(value))}
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display='flex' justifyContent='center'>
            <CircularProgress size='4rem' />
          </Box>
        ) : (
          data?.genres?.map(({ name, id }) => (
            <Link key={name} className={classes.links} to='/'>
              <ListItem
                button
                onClick={() => dispatch(selectGenreOrCategory(id))}
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImage}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  )
}

export default Sidebar
