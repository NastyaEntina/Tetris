import React from 'react'
import {StyledStartButton} from './styles/StyledStartButton'

const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callback}>StartGame</StyledStartButton>
)

export default StartButton