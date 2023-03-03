// // userModel
// const userModel = new Schema.mongoose({
//     fname : {
//         type : String,
            requied : true
//     },
//     lname : {
//         type : String
//     },
//     pincode : {
//         type : Number
//     },
//     isDeleted : {
//         type : Boolean,
//         default : false
//     }
// })


// //mongodb documnet
// // {
// //   _id = ObjectId('24 letters mixed Id (combiantion of alpha-numeric')
// //   lname : Mohan,
// //   fname : Das,
// //   pincode : 203010,
// //   isDeleted : false   
// // }
router.delete('/user/:userId')

const userId =req.params.id
// user 12345@798    isValid()  
const {isValidObjectId} = require('mongoose')
if(!(isValidObjectId(req.params.id)))return res.statu(400).send({status:false, msg:'please provide valid mongodb id'})

// cahce memory ()  60 30 25 seconds   redis database cahing
// update(depreciate), updateOne, updateMany

//updateOne
   // //   _id = ObjectId('24 letters mixed Id (combiantion of alpha-numeric')
    // //   lname : Mohan,
    // //   fname : Das,
    // //   pincode : 203010,
    // //   isDeleted : true   
    // // }

// null
// //updateMany
// {
//     matchedCount : 0,
//     matchedFound : 0,
//     upserId : ,
//     acknowledgement
// }


let falgDelete = await userModel.findOneAndUpdate({_id:req.params.id}, {$set:{isDeleted : true}}, {new:true}) //1 min

// await -> synchronised  line by line
// _id : '24521aafdaf54555'
// // {
    // result
    
    // //   _id = ObjectId('24 letters mixed Id (combiantion of alpha-numeric')
    // //   lname : Mohan,
    // //   fname : Das,
    // //   pincode : 203010,
    // //   isDeleted : true   
    // // }
    
    
    
    
    
    const atuhorModel = new Schema.mongoose({
        fname : {
            type : String
        },
        userId :{
            type : String
        },
        lname : {
            type : String
        },
        pincode : {
            type : Number
        },
        isDeleted : {
            type : Boolean,
            default : false
        }
    })
    module.exports = mongoose.model("User", userModel)
    
    const bookModel = new Schema.mongoose({
        name : {
            type : String
        },
        ISBN : {
            type : String
        },
        authorId : {
            type : mongoose.Schema.Types.ObjectId,
            refer : "User"
        },
        isDeleted : {
            type : Boolean,
            default : false
        }
    })
    module.exports = mongoose.model("Book", userModel)

// let find = await userModel.find({$or :[{price:{$eq:100}},{pincode:{$eq:203001}},{price:{$eq:4000}}]})
// let find = await userModel.find({$or :[{price:{$eq:100}},{pincode:{$eq:203001}},{price:{$eq:4000}}]})


//   $inc:2
//$in ------> shorthand

let fd = await userModel.find({price: $in[100,500,400]})
let fdd = await userModel.find({price: $nin[100,500,400]})

// npm i moment 
const moment = require('moment')
let time = moment().format('YYYY-MM-HH')   //2022-12-20
// let time2 = moment().format('YYYY-MM-HH', 'hh:mm:ss a')
// console.log(time)
// console.log(time2)

let falgDeleted = await userModel.findOneAndUpdate({_id:req.params.id}, {$set:{isDeleted : true, deletedAt:time2}}, {new:true}) //1 min
t
let t = new Date()
let year = t.getFullYear()
let month = t.getMonth()
let date = t.getDate()
console.log(year+"-"+month+"-"+date)
 



