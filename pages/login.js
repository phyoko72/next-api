const Login = () => {

    return ( 
        <>
            <h1>Login Page</h1>
            <form action="">
                <input type="text" name="username" placeholder="Enter Username" id="" /><br /><br />
                <input type="password" name="password" id="" placeholder="Enter Password" /><br /><br />
                <button>Login</button>
            </form>
        </>
     );
}
 
export default Login;

Login.getLayout = function pageLayout(page){
    return (
        <>
            {page}
        </>
    )
}