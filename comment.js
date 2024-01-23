// Create web server with express
// Create router for comment
// Create controller for comment
// Create model for comment
// Create view for comment
// Create database for comment
// Create API for comment

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create router
router.get('/', commentController.index);
router.get('/create', commentController.create);
router.post('/store', commentController.store);
router.get('/:id/edit', commentController.edit);
router.put('/:id', commentController.update);
router.delete('/:id', commentController.destroy);

// Export router
module.exports = router;