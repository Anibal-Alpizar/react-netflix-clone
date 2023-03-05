import React from 'react';

function CardProfile(props) {
    return (
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img src={props.image} alt="Profile" className="object-cover w-full h-48" />
            <div className="py-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{props.name}</h3>
                <span className="text-sm text-gray-700 dark:text-gray-400">{props.job}</span>
            </div>
        </div>
    );
}

export default CardProfile;
