const express = require('express');
const postagensController = require('../controllers/postagens')
const router = express.Router();

router.get('/', async (req, res) => {
  const postagens = await postagensController.get();
  res.send(postagens);
});

router.post('/', (req, res) => {
  await postagensController.create(req.body);
  res.send('Adicionado com sucesso');
});

// get postagem por ID
// update postagem por ID
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  await postagensController.update(id, req.body);
  res.send('Alterado com sucesso.')
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await postagensController.delete(id);
  res.send('Alterado com sucesso.');
});
// delete postagem por ID

module.exports = router;