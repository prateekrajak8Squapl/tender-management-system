const signUpDao =require ('../dao/signUp.dao')

const addUser = async (data)=>{
    try{
        const userName = data.user_name;
        const email = data.email;
        const phoneNumber = data.phone_number;
        const password = data.password;
        const value=[
            userName,
            email,
            phoneNumber,
            password
        ]
        const result = await signUpDao.add(value);
        return result;
    }
    catch(err){
            console.log(err,"error in sign up service");
            throw err;
        }
}

module.exports = {
    addUser
}