import * as user from '../user'
describe ('user handler',() =>{
    it('should create a user',async() =>{
        const req = {body:{username :'hello',password: 'hi'}}
        const res = {json({token}){
            expect(token).toBeTruthy()
        }}
        const newUser = await user.createNewUser(req,res,( )=>{})
    })
})