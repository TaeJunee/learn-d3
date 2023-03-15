import React from 'react'
import ReactDOM from 'react-dom'
import { Face } from './Face';
import { range } from 'd3';

const WIDTH = 160;
const HEIGHT = 160;

const array = range(6 * 3)

const App = () => {
  return (
    array.map((_, index) => (
      <Face
        key={index}
        width={WIDTH}
        height={HEIGHT}
        centerX={WIDTH / 2}
        centerY={HEIGHT / 2}
        strokeWidth={6 + Math.random() * 3}
        eyeOffsetX={20 + Math.random() * 9}
        eyeOffsetY={20 + Math.random() * 15}
        eyeRadius={5 + Math.random() * 10}
        mouthWidth={7 + Math.random() * 9}
        mouthRadius={30 + Math.random() * 9}
      />
    ))
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)