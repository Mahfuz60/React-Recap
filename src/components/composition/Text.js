import React from 'react'

export default function Text({addEmoji}) {
    const text='I am JavaScript Programming language Lover.'
    return (
        <div>
            {addEmoji? addEmoji(text,'💜' ) :text}
            
        </div>
    )
}
