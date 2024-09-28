// app.js
const express = require('express');
const mongoose = require('mongoose');
const webseries = require('./model'); // Import the model
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://23010101401:0qksHsX9X4NA58Bb@lab-demo.gpwzh.mongodb.net/newWebseries')
.then(() => {
    console.log('Connected to MongoDB');

    app.get('/movie', async (req, res) => {
    try {
        const data = await webseries.find();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch movies" });
    }
});


    app.get('/movie/:id', async (req, res) => {
        const data = await webseries.findOne({ id: Number(req.params.id) }); // Convert to Number
        res.send(data);
    });

    app.post('/movie', async (req, res) => {
        const { name, avatar, ott, noOfEps, noOfSea, rating, mainImage, mainInfo, trailer, id } = req.body;
        const newMovie = new webseries({ name, avatar, ott, noOfEps, noOfSea, rating, mainImage, mainInfo, trailer, id });
        await newMovie.save();
        res.send('Movie Added');
    });

    app.delete('/movie/:id', async (req, res) => {
        const ans = await webseries.deleteOne({ id: Number(req.params.id) }); // Convert to Number
        res.send(ans);
    });

    app.put('/movie/:id', async (req, res) => {
        try {
            const ans = await webseries.findOne({ id: Number(req.params.id) }); // Convert to Number
            if (!ans) {
                return res.status(404).send({ error: "Movie not found" });
            }
            // Update properties
            if (req.body.name !== undefined) ans.name = req.body.name;
            if (req.body.avatar !== undefined) ans.avatar = req.body.avatar;
            if (req.body.ott !== undefined) ans.ott = req.body.ott;
            if (req.body.noOfEps !== undefined) ans.noOfEps = req.body.noOfEps;
            if (req.body.noOfSea !== undefined) ans.noOfSea = req.body.noOfSea;
            if (req.body.mainImage !== undefined) ans.mainImage = req.body.mainImage;
            if (req.body.mainInfo !== undefined) ans.mainInfo = req.body.mainInfo;
            if (req.body.rating !== undefined) ans.rating = req.body.rating;
            if (req.body.trailer !== undefined) ans.trailer = req.body.trailer;
            if (req.body.id !== undefined) ans.id = req.body.id; // Update id if provided
            await ans.save();
            res.send(ans);
        } catch (error) {
            res.status(500).send({ error: "An error occurred" });
        }
    });

    app.listen(3005, () => {
        console.log('Server is running on port 3005');
    });
})
.catch(err => {
    console.error('Connection error', err);
});
