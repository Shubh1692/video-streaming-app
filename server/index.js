(function () {
    const express = require('express'),
        path = require('path'),
        app = express(),
        routes = require('./route');
    app.use(express.static(path.join(__dirname, "../build")));
    /**
     * This is used for set all video routes
     */
    app.use('/video/', routes);
    /**
     * This is used for set react app if try to unknown route
     */
    app.get('*', function (req, res) {
        console.log('__dirname', __dirname)
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });
    /**
     * This is used listen app server on port
     */
    app.listen(process.env.PORT || 3001, function () {
        console.log(`App is running on port ${process.env.PORT || 3001}`);
    });
}())