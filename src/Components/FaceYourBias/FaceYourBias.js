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

    const likedDisliked = (num, direction) => {
        if (num < 0) {
            return `You disliked ${Math.abs(num)} more ${direction}-leaning articles than you liked.`;
        } else if (num > 0) {
            return `You liked ${Math.abs(num)} more ${direction}-leaning articles than you liked.`;
        } else {
            return `You were perfectly balanced for ${direction}-leaning articles!.`;
        }
    };
    return (
        <div>
            <h1>{likedDisliked(parseInt(localStorage.getItem('left')), 'left')}</h1>{' '}
            <h1>{likedDisliked(parseInt(localStorage.getItem('neutral')), 'neutral')}</h1>{' '}
            <h1>{likedDisliked(parseInt(localStorage.getItem('right')), 'right')}</h1>{' '}
        </div>
    );
}

export default FaceYourBias;
