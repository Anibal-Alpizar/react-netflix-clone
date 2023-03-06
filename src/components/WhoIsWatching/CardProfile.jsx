import React from 'react';

function CardProfile(props) {
    return (
        <div className="max-w-xs mx-auto">
            <img src={props.image} alt="Profile" className="object-cover w-full h-48 rounded-lg shadow-md" />
            <div className="py-3 text-center">
                <h3 className="pt-1 text-lg font-semibold" style={{ color: "rgb(127, 127, 127)", fontSize: "150%" }}>{props.name}</h3>

            </div>
        </div>
    );
}

export default CardProfile;


