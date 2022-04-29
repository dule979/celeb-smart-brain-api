const Clarifai = require("clarifai");

const app = new Clarifai.App({
    // apiKey: "5860a94cb6304564a5add95d829d041f",
    apiKey: "658c24f3c1af41da82d8cf789066d613"
});

const handleImageApi = (req, res) => {
    app.models
      // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .predict(Clarifai.CELEBRITY_MODEL, req.body.input)
      .then(data => res.json(data))
      .catch(err => res.status(400).json('unable to connect with API'));
}

const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => res.json(entries[0].entries))
    .catch(err => res.status(400).json('unable to retrive entries'));
}

module.exports = {
    handleImage,
    handleImageApi
};