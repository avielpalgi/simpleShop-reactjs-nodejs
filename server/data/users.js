
import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Aviel Palgi',
        email:'avielpalgi@example.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Haim Moshe',
        email:'haim@example.com',
        password:bcrypt.hashSync('123456',10)
    }
]

export default users;