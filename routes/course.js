const {Router}= require("express")

const courseRouter=Router();

courseRouter.get('/preview',async function (req,res) {
    res.json({
        message:"course preview"
    })
});

courseRouter.post('/purchase',async function (req,res) {
    res.json({
        message:"purchase a course"
    })
});

module.exports={
    courseRouter:courseRouter
}