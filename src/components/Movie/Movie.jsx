import React from 'react'
import { Typography, Grid, Grow, Toolkit, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Movie = ({ movie, i }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://www.fillmurray.com/200/300'
            }
          />
          <Typography className={classes.title} variant='h5'>
            {movie.title}
          </Typography>

          {/* <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip> */}
        </Link>
      </Grow>
    </Grid>
  )
}

export default Movie
// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Box, Grid, Grow, Rating, Tooltip } from '@mui/material'
// import { Img, Links, Title } from './styles'

// const Movie = ({ movie, i }) => {
//   const navigate = useNavigate()

//   return (
//     <Grid item xs={12} sm={6} md={4} lg={3} xl={2} p={'10px'}>
//       <Grow in key={i} timeout={(i + 1) * 250}>
//         <Links onClick={() => navigate(`/movie/${movie.id}`)}>
//           <Box sx={{ overflow: 'hidden', borderRadius: '5px', height: 300 }}>
//             <Img
//               src={
//                 movie.poster_path
//                   ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//                   : 'https://fillmurray.com/200/300'
//               }
//               alt={movie.title}
//               className='img'
//             />
//           </Box>
//           <Title className='title' variant='h5'>
//             {movie.title}
//           </Title>
//           <Tooltip disableTouchListener title={`${movie.vote_average / 2} / 5`}>
//             <div>
//               <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
//             </div>
//           </Tooltip>
//         </Links>
//       </Grow>
//     </Grid>
//   )
// }

// export default Movie
