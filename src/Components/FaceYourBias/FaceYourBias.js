import React, { useState } from 'react';

function FaceYourBias() {
    const leaningScores = {
        left: parseInt(localStorage.getItem('left')),
        neutral: parseInt(localStorage.getItem('neutral')),
        right: parseInt(localStorage.getItem('right')),
    };
    const sortedMagnitudes = Object.keys(leaningScores).sort((a, b) => {
        // sorts in decreasing magnitude: first element will be highest
        if (Math.abs(leaningScores[a]) > Math.abs(leaningScores[b])) {
            return -1;
        } else if (Math.abs(leaningScores[a]) < Math.abs(leaningScores[b])) {
            return 1;
        }
        return 0;
    });
}

export default FaceYourBias;
