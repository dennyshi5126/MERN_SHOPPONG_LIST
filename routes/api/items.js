const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');

// @route GET /app/items
// @desc Get All items
// @access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1})
    .then(items => res.json(items));
});

// @route POST /app/items
// @desc Create a new item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
       name: req.body.name 
    });
    
    newItem.save()
    .then(item => res.json(item));
});

// @route DELETE /app/items/:id
// @desc Delete an item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({message: err}));
});

module.exports = router;