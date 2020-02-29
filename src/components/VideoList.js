import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
/**
 * Render method of video list component
 */
export default ({ videoUrlList = [], selectedVideo = {}, selectVideo = () => { } }) => (
    <Card className='w-100'>
        <Card.Body>
            <ListGroup variant='flush' className='w-100'>
                {videoUrlList && videoUrlList.length > 0 && videoUrlList.map(({
                    videoUrl, videoName
                }, index) => (
                        <ListGroup.Item key={index} onClick={() =>
                            selectVideo({
                                videoUrl, videoName, index
                            })
                        } variant={selectedVideo.index === index ? 'primary' : ''}>{videoName}</ListGroup.Item>
                    ))}
            </ListGroup>
        </Card.Body>
    </Card>
) 