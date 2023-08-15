const { connect } = require('getstream')
const bcrypt = require('bcrypt')
const StreamChat = require('stream-chat')
const crypto = require('crypto') 


const signup =(req,res)=> {
    try{
        const {fullName, username, password, phoneNumber} = req.body
        const userId = crypto
    }catch(error){
        console.log(error)

        res.status(500).json({message: errror})

    }
}
const login =(req, res) => {
    try{

    }catch(error){
        console.log(error)

        res.status(500).json({message: errror})

    }
}

module.exports = {signup, login}