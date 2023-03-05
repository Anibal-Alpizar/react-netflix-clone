import React from 'react';

function Body() {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 h-screen flex justify-center items-center" style={{ background: "#111111" }}>
            <div className="flex flex-col items-center">
                <h1 className="text-white text-center text-3xl font-bold tracking-widest mb-8">Who's Watching?</h1>
                <div className="bg-gray-800 rounded-lg p-8">
                    {/* Aquí irán los perfiles de los usuarios */}
                </div>
                <button className="border border-white text-white py-2 px-4 rounded-lg text-sm font-medium">Manage Profiles</button>

            </div>
        </div>
    );
}

export default Body;
