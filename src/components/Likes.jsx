import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite'
import { Box } from "@mui/material";

export const Likes = ({ heart, handleLikeClick, like }) => {
  return (
        <Box 
            className="likeds2 ovo-regular"
            onClick={handleLikeClick}
            sx={{ cursor: 'pointer' }}
        >
            <Checkbox
                className='checkHeart'
                icon={<FavoriteBorder className='borderHeart' sx={{ fontSize: 32, color: 'white' }} />}
                checkedIcon={<Favorite className='heartIcon' sx={{ fontSize: 32, color: 'red' }} />}
                checked={heart}
            />
            <p className="ovo-regular fontLike"
                style={{
                    fontSize: '22px',
                    color: 'white',
                    margin: '0px'
                }}
            >
                <span className='colorLiked'>{like} Likes</span>
            </p>
        </Box>
  )
}
export default Likes;