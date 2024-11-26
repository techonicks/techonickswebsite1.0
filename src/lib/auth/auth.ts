export const isLoggedIn  = (token:string | undefined) : boolean =>{
    if(token) return true;
    else return false;
}

export const isAuthenticated = (token:string | undefined) : boolean =>{
    if(token) return true;
    else return false;
}
