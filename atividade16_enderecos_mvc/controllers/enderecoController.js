const Endereco = require('../models/Endereco')

const enderecoController = {
    listarTodos: async (req, res) => {
        const enderecos = await Endereco.findAll({ order: [['id', 'ASC']] });
        console.log('Controller Get all')
        res.render('enderecos', { enderecos });
    },

    exibirFormularioCadastro: (req, res) => {
        console.log('Controller Form cadastro')
        res.render('novo-endereco')
    },

    criarNovoEndereco: async (req, res) => {
    try {
        const { rua, numero, bairro, cidade, estado, cep } = req.body;
        console.log('Controller Create')
        await Endereco.create({ rua, numero, bairro, cidade, estado: estado.toUpperCase(), cep });
        res.redirect('/enderecos');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao criar endereço.');
        }
    },

    listarDadosEndereco: async (req, res) => {
        console.log('Controller List By ID')
        const { id } = req.params;
        const endereco = await Endereco.findByPk(id);
        if (!endereco) return res.status(404).send('Endereço não encontrado.');
        res.render('editar-endereco', { endereco });
    },

    atualizarDadosEndereco: async (req, res) => {
    try {
        console.log('Controller update by id')
        const { id } = req.params;
        const { rua, numero, bairro, cidade, estado, cep } = req.body;
        const endereco = await Endereco.findByPk(id);
        if (!endereco) return res.status(404).send('Endereço não encontrado.');

        await endereco.update({ rua, numero, bairro, cidade, estado: estado.toUpperCase(), cep });
        res.redirect('/enderecos');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar endereço.');
        }
    },

    deletarEndereco: async (req, res) => {
    try {
        console.log("Controller delete by id")
        const { id } = req.params;
        const endereco = await Endereco.findByPk(id);
        if (!endereco) return res.status(404).send('Endereço não encontrado.');
        await endereco.destroy();
        res.redirect('/enderecos');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar endereço.');
        }
    }
}

module.exports = enderecoController