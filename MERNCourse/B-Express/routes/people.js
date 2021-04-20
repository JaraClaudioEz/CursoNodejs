const express = require('express');
const router = express.Router(); //To let Router handle all routing instead of app

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

/*
router.get('/', getPeople)
router.post('/', createPerson)
router.post('/postman', createPersonPostman)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)
*/

//Alternative, same functionality
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router