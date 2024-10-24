import React from 'react';

const SkilCard = ({ item }) => {
    const { imgSrc, label, desc } = item;

    return (
        <div className='flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 hover:ring-zinc-600 transition-colors group'>
            {/* Add hover:ring to ensure something visible happens on hover */}
            <div className='bg-zinc-700/50 rounded-lg  overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
                <img src={imgSrc} alt={label} width={32} height={32} />
            </div>
            <div>
                <h2>{label}</h2>
                <p className='text-zinc-400 text-sm'>{desc}</p>
            </div>
        </div>
    );
};

export default SkilCard;
