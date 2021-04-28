import usersService from "./users-service";
const {useParams, useHistory} =window.ReactRouterDOM;
const {useState, useEffect} =React;
const {Link} = window.ReactRouterDOM;

const UserEditor =() => {
    const [user, setUser]=useState({})
    const {userId}=useParams()
    const history=useHistory()


    useEffect(() => {
        if(userId !== "new") {
            findUserById(userId)
        }
    }, []);

    const createUser = (user) =>
        usersService.createUser(user)
            .then(() => history.goBack())

    const updateUser = (id, newUser) =>
        usersService.updateUser(userId, newUser)
            .then(() => history.goBack())

    const findUserById = (id) => {
        usersService.findUserById(id).then((data) => {
            setUser(data)
        })
    }

    const deleteUser = (id) =>
        usersService.deleteUser(id)
            .then(() => history.goBack())

    return (
        <div>

            <h2>User Editor</h2> <br />
            <h5>Note:
                <br />Update - Don't change ID
                <br />Delete - You can only delete a user without any order associated with it
                <br /><br />
            </h5>

            <talbe>
                <tr>
                    <th>ID</th> <td> <input value={user.id}/> </td>
                </tr>

                <tr>
                    <th>First Name</th> <td>  <input
                    onChange={(e) =>
                        setUser(user =>
                            ({...user, firstname: e.target.value}))}
                    value={user.firstname}/>
                </td>
                </tr>

                <tr>
                    <th>Last Name</th> <td>   <input
                    onChange={(e) =>
                        setUser(user =>
                            ({...user, lastname: e.target.value}))}
                    value={user.lastname}/>
                </td>
                </tr>

                <tr>
                    <th>User Name</th> <td>   <input
                    onChange={(e) =>
                        setUser(user =>
                            ({...user, username: e.target.value}))}
                    value={user.username}/>
                </td>
                </tr>

                <tr>
                    <th>Password</th> <td>  <input
                    onChange={(e) =>
                        setUser(user =>
                            ({...user, password: e.target.value}))}
                    value={user.password}/>
                </td>
                </tr>

                <tr>
                    <th>Email</th> <td>  <input
                    onChange={(e) =>
                        setUser(user =>
                            ({...user, email: e.target.value}))}
                    value={user.email}/>
                </td>
                </tr>

                <tr>
                    <th>Date Of Birth</th> <td>  <input
                    onChange={(e) =>
                        setUser(user =>
                            ({...user, dateofbirth: e.target.value}))}
                    value={user.dateofbirth}/>
                </td>
                </tr>


                <tr>
                    <th>Phone Number</th> <td>  <input
                    onChange={(e) =>
                        setUser(user =>
                            ({...user, phonenumber: e.target.value}))}
                    value={user.phonenumber}/>
                </td>
                </tr>
            </talbe>


           <br /><br /> <Link to="/users">Back to User List</Link>&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;<Link to={`/orders/user/${user.id}`}>Go To User Orders</Link>&nbsp;&nbsp;
            <br /> <br />
            <button
                onClick={() => deleteUser(user.id)}>
                Delete
            </button>
&nbsp;
            <button
                onClick={() => createUser(user)}>
                Create
            </button>

            &nbsp;<button
            onClick={() => updateUser(user.id, user)}>
            Update
            </button>


        </div>

    )
}


export default UserEditor;