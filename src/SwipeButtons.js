import React from 'react'
import ReplayButton from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButtons from '@material-ui/core/IconButton'
import './SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButtons>
                <ReplayButton
                fontSize="large" className="swipeButtons_repeat" />
            </IconButtons>
            <IconButtons>
                <CloseIcon
                fontSize="large" className="swipeButtons_left"/>
            </IconButtons>
            <IconButtons>
                <StarRateIcon
                fontSize="large" className="swipeButtons_star"/>
            </IconButtons>
            <IconButtons>
                <FavoriteIcon
                fontSize="large" className="swipeButtons_right"/>
            </IconButtons>
            <IconButtons>
                <FlashOnIcon
                fontSize="large" className="swipeButtons_lightning"/>
            </IconButtons>
        </div>
    )
}

export default SwipeButtons
