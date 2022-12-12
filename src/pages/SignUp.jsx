import React from 'react'
import '../Style/Style.scss'

function SignUp() {

    
    return (
        <div><div className="container">
            <div className="box">
                <span className="title">Sign Up</span>
                <form>
                    <div className="userName">
                        <label htmlFor="Email">Enter Email</label>
                        <input id="Email" type="text" placeholder="Email" />
                    </div>
                    <div className="password">
                        <label htmlFor="UserName">Enter User Name</label>
                        <input id="UserName" type="Password" placeholder="User Name" />
                    </div>
                    <div className="password">
                        <label htmlFor="Password">Enter Password</label>
                        <div className='passwordShowHide'>
                            <input id="Password" type="Password" placeholder="Password" /> <img src="./images/passwordShowHide.png" alt="" width="5%" height="5%" />
                        </div>
                    </div>
                    <label className='avatar' htmlFor='avatar' ><img className='AvatarPIC' src="./images/user.png" alt="" /> Upload A Profile PIC</label>
                    <input type="file" id='avatar' style={{ display: "none" }} />
                    <button type="submit">Submit</button>
                    <span>
                        Already Have An Account? <a href="/login">Click Here</a>
                    </span>
                </form>
            </div>
        </div></div>
    )
}

export default SignUp