const { login } = require ('../controllers/login')
const { getCharById } = require ('../controllers/getCharById.js')
const { postFav, deleteFav } = require ('../controllers/handleFavorites')

const router = require ('express').Router();

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
});

// OTRA FORMA: router.gete('/character/:id', getCharById)

router.get('/login', (req, res) => {
    login(req, res); 
});

//OTRA FORMA: router.get('/login', login) [Nota] se pasa la función en vez del callback (ya se sabe que es por ahí donde se pasa la request y la response)

router.post('/fav', (req, res) => {
    postFav(req, res);
});

router.delete ('/fav/:id', (req, res) => {
    deleteFav(req, res); 
});


module.exports = router;