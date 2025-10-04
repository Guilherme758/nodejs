const express = require('express');
const router = express.Router();
const { validaDadosEndereco } = require('../middlewares/enderecoMiddleware');
const controller = require('../controllers/enderecoController')

router.get('/', controller.listarTodos);

router.get('/novo', controller.exibirFormularioCadastro);

router.post('/add', validaDadosEndereco, controller.criarNovoEndereco);

router.get('/editar/:id', controller.listarDadosEndereco);

router.post('/editar/:id', validaDadosEndereco, controller.atualizarDadosEndereco);

router.post('/deletar/:id', controller.deletarEndereco);

module.exports = router;
