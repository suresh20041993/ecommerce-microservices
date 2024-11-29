const Category = require('../models/Category');

// Create a new product
const createCategory = async (req, res) => {
    try {
        console.log("req.body",req.body);
        const category = new Category(req.body);
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        console.log("error",error);
        res.status(400).send(error);
    }
};

// Get all Category
const getCategory = async (req, res) => {
    try {
        const Category = await Category.find({});
        res.status(200).send(Category);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a product by ID
const getCategoryById = async (req, res) => {
    try {
        const Category = await Category.findById(req.params.id);
        if (!Category) {
            return res.status(404).send();
        }
        res.status(200).send(Category);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a Category by ID
const updateCategoryById = async (req, res) => {
    try {
        const Category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!Category) {
            return res.status(404).send();
        }
        res.status(200).send(Category);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a product by ID
const deleteCategoryById = async (req, res) => {
    try {
        const Category = await Category.findByIdAndDelete(req.params.id);
        if (!Category) {
            return res.status(404).send();
        }
        res.status(200).send(Category);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createCategory,
    getCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
};
