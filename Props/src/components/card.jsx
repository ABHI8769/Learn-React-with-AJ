import React, { useState } from 'react'

function card({username,btntext='View Profile →',descript,img}) {
    
    const [showDescription, setShowDescription] = useState(false);
    const handleButtonClick = () => {
        setShowDescription(true);
    };

    return (
        <>
            <div class="relative h-[400px] w-[300px] rounded-md">
            <img
                src={img}
                alt="AirMax Pro"
                class="z-0 h-full w-full rounded-md object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-left">
                <h1 class="text-lg font-semibold text-white">{username}</h1>
                <p className = "description" class="mt-3 text-sm text-gray-600">
                    {showDescription ? descript : ""}
                </p>
                <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
                    onClick={handleButtonClick}
                >
                {btntext}
                </button>
                
            </div>
            </div>
        </>
    );
}

export default card

