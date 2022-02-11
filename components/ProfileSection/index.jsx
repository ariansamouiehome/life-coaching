import React from 'react';

const ProfileSection = ({image}) => {

    return (
        <div className="profile-section">
            <span className="image-wrapper">
                <img src={image} alt="profile image" className="profile-image"/>
            </span>
        </div>
    )
}

export default ProfileSection;