import React from 'react'

import UserIcon from '../../assets/svg-components/user.icon'

import './image-upload.styles.scss'

const ImageUpload = () => {
    const uploadedImage = React.useRef(null),
          imageUploader = React.useRef(null);

    const handleImageUpload = event => {
        const [file] = event.target.files

        if (file) {
            const reader = new FileReader(),
                  { current } = uploadedImage;

            current.file = file

            reader.onload = (e) => {
                current.src = e.target.result
            }

            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="image-upload_container">
            <input 
                style={{ display: 'none' }}
                ref={imageUploader} 
                type="file" 
                accept="image/*" 
                multiple="false" 
                onChange={handleImageUpload}
            />

            <div className="profile-pic_wrapper" onClick={() => imageUploader.current.click()}>
                <UserIcon />
                <img ref={uploadedImage} />
                <span className="visually-hidden">Click to update your profile picture</span>
            </div>
        </div>
    )
}

export default ImageUpload