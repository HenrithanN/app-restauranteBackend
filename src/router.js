const express = require('express');
const router = express.Router();
const UsuarioRouter = require('./routers/UsuarioRouter');
const LoginRouter = require('./routers/LoginRouter');
const RestauranteRouter = require('./routers/RestauranteRouter');
const ProdutoRouter = require('./routers/ProdutoRouter');

router.use('/usuario', UsuarioRouter);
router.use('/login', LoginRouter);
router.use('/restaurante', RestauranteRouter);
router.use('/produto', ProdutoRouter);

module.exports = router;