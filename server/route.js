(function () {
    const { Router } = require('express'),
    fs = require('fs'),
        router = Router();
    /**
     * This route used for stream selected video
     * @param filename Selected video file name
     */
    router.get('/:filename', function (req, res) {
        const path = `videos/${req.params.filename}`,
            stat = fs.statSync(path),
            fileSize = stat.size,
            range = req.headers.range;
        // Get range of video in bytes 
        if (range) {
            // Crete chunk of video file using range of video and sent to frontend to play video
            const parts = range.replace(/bytes=/, '').split('-'),
                start = parseInt(parts[0], 10),
                end = parts[1]
                    ? parseInt(parts[1], 10)
                    : fileSize - 1,
                chunkSize = (end - start) + 1,
                file = fs.createReadStream(path, { start, end }),
                head = {
                    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                    'Accept-Ranges': 'bytes',
                    'Content-Length': chunkSize,
                    'Content-Type': 'video/mp4',
                };
            res.writeHead(206, head)
            file.pipe(res)
        } else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
            }
            res.writeHead(200, head)
            fs.createReadStream(path).pipe(res)
        }
    });
    module.exports = router;
}())