const express = require('express');
const port = process.env.PORT || 3000;
const App = express();
App.use(express.json());

const users = [
    {
        id:1,
        name:"Hasnain",
        fullName:"Muhammad Hasnain",
        email:'hasnainilyas@gmail.com',
        age:19,
    },
    {
        id:2,
        name:"Adnan",
        fullName:"Muhammad Adnan",
        email:'adnan@gmail.com',
        age:23,
    },
    {
        id:3,
        name:"Zeeshan",
        fullName:"Muhammad Zeeshan",
        email:'shan@gmail.com',
        age:22,
    }

]
//    ========= GET API ==========
App.get('/users',(req,res)=>{
res.send(users)
});

//    ========= POST API ==========


App.post('/user', (req,res)=>{
users.push({id: users.length + 1 , ...req.body})
res.send({message:"User Added Successfully"})
console.log('req======>',req.body)
})

//    ========= DELETE API ==========

App.delete('/user/:id', (req,res)=> {
    const index = users.findIndex(i => i.id === Number(req.params.id));
    if(index !== -1){

        users.splice(index, 1);
    }
res.send({message:"User Deleted Successfully"})
    

})

//    ========= UPDATE API ==========

// App.put('/user/:id', (req,res)=> {
//     const index = users.findIndex(i => i.id === Number(req.params.id));
//     if(index !== -1){

//         users.splice(index, 1, {id:Number(req.params.id),...req.body});
//     }
// res.send({message:"User Updated Successfully"})
    

// })

App.put('/user/:id', (req, res) => {
    // Find the index of the user with the specified id
    const index = users.findIndex(i => i.id === Number(req.params.id));

    // If the user exists (index !== -1), update the user data with the provided request body
    if (index !== -1) {
        users.splice(index, 1, {id: Number(req.params.id), ...req.body});
    }

    // Send a response indicating that the user has been updated successfully
    res.send({message: "User Updated Successfully"});
});














App.listen(port, ()=> {
    console.log(`The server on running on //https:localhost${port}/users`)
})