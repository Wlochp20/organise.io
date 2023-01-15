export interface RegisterInterface {
    username : string,
    password : string
    email : string,
}
export interface RegisterResInterface{
    message : 'you are logged in' | 'password incorrect' | 'username incorrect';
}