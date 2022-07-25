import React from 'react'
import { styled } from './stitches.config'
import { keyframes } from '@stitches/react'
const rotate360 = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
})


const Spinner = styled('div', {

    animation: `${rotate360} 1s linear infinite`,
    transform: 'translateZ(0)',

    borderTop: '2px solid grey',
    borderRight: '2px solid grey',
    borderBottom: '2px solid grey',
    borderLeft: '4px solid blue',

    background: 'transparent',
    width: '126px',
    height: '126px',
    borderRadius: '50%',

    variants: {
        display: {
            true: {
                display: 'block',
                transition: 'display 2s'
                
            },
            false: {
                display: 'none'
            }
        },
        size: {
            s: {
                height: '24px',
                width: '24px'
            }
        }
    }
})

export default Spinner