const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.API_KEY2;

router.get('/city/id=:id', async (req, res) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/group?id=${req.params.id}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(url);

    res.status(200).json(response.data.list);
  } catch (error) {
    res.status(error.response.status).json({ msg: error.message });
  }
});

router.get('/city/lat=:lat&lon=:lon', async (req, res) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.params.lat}&lon=${req.params.lon}&
    exclude=minutely&units=metric&appid=${API_KEY}`;
    const response = await axios.get(url);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ msg: error.message });
  }
});

module.exports = router;
