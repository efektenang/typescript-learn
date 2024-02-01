interface MyUser {
    id: number;
    username: string;
    email: string;
    password: string;
}

function getUserDetail(user: Pick<MyUser, 'username' | 'email'>): string {
    return `Username: ${user.username},
Email: ${user.email}`
}

const userA: MyUser = {
    id: 123,
    username: 'efektenang',
    email: 'efektenang@email.com',
    password: '123445'
}
const userDetail = getUserDetail(userA)

console.log(userDetail)