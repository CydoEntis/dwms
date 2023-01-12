import { type } from 'os';
import React from 'react';
import image from "../../assets/ball.jpg"

type Props = {
    src: string,
    title: string,
    games: number,
    groups: number,
    rating: number,
}

const Feedcard = ({ src, title, games, groups, rating }: Props) => {
    return (
        <div className="block p-4 rounded-lg shadow-lg bg-white w-full flex ">
            <div className="left flex justify-center items-center w-fit justify-left " >
                <img src={src} alt={title} className=" h-full w-full rounded-full h-24 w-24 object-fill mr-6" />
            </div>
            <div className="pl-4 w-full" >
                <h3 className='text-xl font-bold mb-4'>{title}</h3>
                <p className='text-base mb-3'>{games} upcoming games</p>
                <p className='text-base mb-0'><strong>{groups}</strong> games available</p>
                <p className="text-right text-sm">Course rating: <strong>{rating}</strong> stars</p>
            </div>
        </div>
    );
};

export default Feedcard;