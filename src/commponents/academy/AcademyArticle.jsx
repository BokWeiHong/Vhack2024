import React, { useState } from 'react';
import './style/Academy.css'; 

import thumbnail1 from '../../images/image1.jpeg'; 
import thumbnail2 from '../../images/image2.jpeg'; 
import thumbnail3 from '../../images/image3.jpeg'; 

const AcademyArticle = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const investmentVideos = [
        { id: 1, title: "How To Start Trading Stocks As A Complete Beginner", videoUrl: "https://www.youtube.com/watch?v=p7HKvqRI_Bo", thumbnail: thumbnail1 },
        { id: 2, title: "Investing Basics: Mutual Funds", videoUrl: "https://www.youtube.com/watch?v=JUtes-k-VX4&t=37s", thumbnail: thumbnail2 },
        { id: 3, title: "What Is The Best Strategy For Investing In Real Estate?", videoUrl: "https://www.youtube.com/watch?v=n_U7uPWSKrE", thumbnail: thumbnail3 },
        // Add more videos as needed
    ];


    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    
    const handleCloseModal = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="academy">
            <h1>Investment Academy</h1>
            <p>Learn about investment through our selection of educational videos:</p>
            <div className="video-grid">
                {investmentVideos.map(video => (
                    <div key={video.id} className="video-item" onClick={() => handleVideoSelect(video)}>
                        <img src={video.thumbnail} alt={video.title} />
                        <h3>{video.title}</h3>
                    </div>
                ))}
            </div>
            {selectedVideo && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <iframe
                            width="560"
                            height="315"
                            src={selectedVideo.videoUrl}
                            title={selectedVideo.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AcademyArticle;
