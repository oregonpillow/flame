const express = require('express');
const router = express.Router();

const {
  getQueries,
  addQuery,
  deleteQuery,
  updateQuery,
} = require('../controllers/queries/');

router.route('/').post(addQuery).get(getQueries);
router.route('/:prefix').delete(deleteQuery).put(updateQuery);

module.exports = router;
