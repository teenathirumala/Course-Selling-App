const {Router}=require("express")

const userRouter=Router();


userRouter.post('/user/signup',async function (req,res) {
    res.json({
        message:"signedup"
    })
});


userRouter.post('/user/signin',async function (req,res) {
    res.json({
        message:"signedin"
    })
});


userRouter.get('/user/purchases',async function (req,res) {
    res.json({
        message:"purchases"
    })
});



module.exports={
    userRouter:userRouter
}