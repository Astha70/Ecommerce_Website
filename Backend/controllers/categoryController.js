const categoryModal = require("../models/categoryModal");
const slugify = require('slugify');

const createCategoryController = async (req,res) => {
    try{
        const {name} = req.body;
        if(!name){
            return res.status(401).send({
                message:"Name is required"
            })
        }
        const existingCategory = await categoryModal.findOne({name});
        if(existingCategory){
            return res.status(200).send({
                success: true,
                message:"Category already exists"
            })
        }

        const category = await new categoryModal({name,slug:slugify(name)}).save();
        res.status(201).send({
            success:true,
            message: "new category created",
            category,
        });

    }catch(err){
        console.log(err);
        res.status(500).send({
            success: false,
            err,
            message:"Error in category"
        })
    }
};

const updateCategoryController = async (req,res) => {
    try{
        const {name} = req.body;
        const {id} = req.params;
        const category = await categoryModal.findByIdAndUpdate(id,{name,slug:slugify(name)}, {new:true});
        res.status(200).send({
            success:true,
            message: "category updated successfully",
            category,
        });

    }catch(err){
        console.log(err);
        res.status(500).send({
            success: false,
            err,
            message:"Error while updating category"
        })
    }
};

const categoryController = async (req,res) => {
    try{
        const category = await categoryModal.find({});
        res.status(200).send({
            success:true,
            message: "All categories list",
            category,
        });

    }catch(err){
        console.log(err);
        res.status(500).send({
            success: false,
            err,
            message:"Error while getting all category"
        })
    }
};

const singleCategoryController = async (req,res) => {
    try{
        const category = await categoryModal.findOne({slug:req.params.slug});
        res.status(200).send({
            success:true,
            message: "Get a single category successfully",
            category,
        });

    }catch(err){
        console.log(err);
        res.status(500).send({
            success: false,
            err,
            message:"Error while getting a category"
        })
    }
};

const deleteCategoryController = async (req,res) => {
    try{
        const {id} = req.params;
        await categoryModal.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            message: "Category deleted successfully",
        });

    }catch(err){
        console.log(err);
        res.status(500).send({
            success: false,
            err,
            message:"Error while deleting the category"
        })
    }
};


module.exports = {createCategoryController, updateCategoryController, categoryController, singleCategoryController, deleteCategoryController};