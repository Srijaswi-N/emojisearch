import React from 'react'
import './EmojiSearch.css';
import { useState } from 'react';
const emojiData=[
    {
    id:1,
    symbol:"😁",
    name:"smile"
    },
    {
        id:1,
        symbol:"😡",
        name:"anger"
     },
     {
            id:1,
            symbol:"🥺",
            name:"emotional"
    },
    {
                id:1,
                symbol:"🤪",
                name:"stuck out tongue winking eye"
    },
    {
        id:1,
        symbol:"",
        name:""
    },
    {
        id:1,
        symbol:"😀",
        name:"grinning"
        },
        {
            id:1,
            symbol:"",
            name:""
            },
            {
                id:1,
                symbol:"😅",
                name:"sweat smile"
                },
                {
                    id:1,
                    symbol:"🤣",
                    name:"joy"
                    }
                    

];

function EmojiSearch() {
    const [searchEmoji,setSearchEmoji]=useState("");
    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji = emojiData.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
    });
  return (
    <div>
        <div className='Main'>
        <h1>React Emoji App</h1>
        <input type='text' placeholder='search for emoji...' value={searchEmoji} onChange={handleChange}></input>
        <div>
        {showEmoji.map((emoji)=>emoji.symbol)}
        </div>
        </div>
    </div>
  )
}

export default EmojiSearch