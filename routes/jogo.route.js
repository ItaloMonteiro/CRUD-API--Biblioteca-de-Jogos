const express = require('express');
const app = express();
const jogoRoutes = express.Router();

let Jogo = require('../model/Jogo');

// api to add industry
jogoRoutes.route('/add').post(function (req, res) {
    let jogo = new Jogo(req.body);
    jogo.save()
        .then(jogo => {
            res.status(200).json({ 'status': 'success', 'mssg': 'game added successfully' });
        })
        .catch(err => {
            res.status(409).send({ 'status': 'failure', 'mssg': 'unable to save to database' });
        });
});

// api to get industrys
jogoRoutes.route('/').get(function (req, res) {
    Jogo.find(function (err, jogos) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'jogos': jogos });
        }
    });
});

// api to get industry
jogoRoutes.route('/jogo/:id').get(function (req, res) {
    let id = req.params.id;
    Jogo.findById(id, function (err, jogos) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'jogos': jogos });
        }
    });
});

// api to update route
jogoRoutes.route('/update/:id').put(function (req, res) {
    Jogo.findById(req.params.id, function (err, jogos) {
        if (!jogo) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Unable to find data' });
        } else {
            jogo.name = req.body.name;
            jogo.type = req.body.type;
            jogo.platform = req.body.platform;

            industry.save().then(business => {
                res.status(200).json({ 'status': 'success', 'mssg': 'Update complete' });
            })
        }
    });
});

// api for delete
jogoRoutes.route('/delete/:id').delete(function (req, res) {
    Jogo.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'mssg': 'Delete successfully' });
        }
    });
});

module.exports = jogoRoutes;