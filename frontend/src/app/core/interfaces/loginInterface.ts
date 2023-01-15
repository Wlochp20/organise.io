export interface LoginInterface {
    username : string,
    password : string
}
export interface LoginResInterface{
    message : 'user added' | 'user already exist'
}