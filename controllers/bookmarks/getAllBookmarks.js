const asyncWrapper = require('../../middleware/asyncWrapper');
const Bookmark = require('../../models/Bookmark');
const { Sequelize } = require('sequelize');

// @desc      Get all bookmarks
// @route     GET /api/bookmarks
// @access    Public
const getAllBookmarks = asyncWrapper(async (req, res, next) => {
  const bookmarks = await Bookmark.findAll({
    order: [[Sequelize.fn('lower', Sequelize.col('name')), 'ASC']],
  });

  res.status(200).json({
    success: true,
    data: bookmarks,
  });
});

module.exports = getAllBookmarks;
