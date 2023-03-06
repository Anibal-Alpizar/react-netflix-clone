import React from 'react';
import CardProfile from './CardProfile';

function Body() {
    return (
        <div className="flex flex-col h-screen">
            <div className="-mt-20 flex-grow bg-gradient-to-b from-black to-gray-900 flex flex-col justify-center items-center" style={{ background: "#111111" }}>
                <h1 className="text-white text-5xl font-bold tracking-widest mb-11 text-center sm:text-left" style={{ color: "rgb(254, 254, 254)" }}>Who's Watching?</h1>
                <div className="flex flex-col items-center pt-4">
                    <CardProfile name="Jane Doe" image="https://randomuser.me/api/portraits/men/34.jpg" className="mt-8" />
                    <div className="mt-4 border-white border-2">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
