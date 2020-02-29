import React from 'react';
import { Card } from 'react-bootstrap';
/**
 * Render method of video component
 */
export default ({ videoUrl = '', videoName, videoType = 'video/mp4' }) => (
    <Card className='w-100'>
        <Card.Body>
            <Card.Title>{videoName}</Card.Title>
            <video key={videoUrl} className="video" controls autoPlay>
                <source src={videoUrl} type={videoType} />
            </video>
        </Card.Body>
    </Card>
)