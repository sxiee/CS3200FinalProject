import usersService from "./users-service"
const {useState, useEffect} =React;
const {Link} = window.ReactRouterDOM;

const UserList =() => {
const [users, setUsers]=useState([])
    useEffect(()=>{
        findAllUsers()
    },[])
    const findAllUsers = () => {
        usersService.findAllUsers().then((data) => {
            setUsers(data)
        })
    }

    return (
        <div>
            <h2>&nbsp;&nbsp;User List</h2>

            <br />
            Click the ID to view and edit user information:
            <table>
                <tr>
                    <th>ID</th><th>First Name</th><th>Last Name</th><th>Username</th>
                    <th>Password</th><th>Email</th><th>Birth Date</th><th>Phone Number</th>
                </tr>
            {
                users.map((user) => {
                    return (<tr>
                        <td>
                        <Link to={`/users/${user.id}`}>
                            {user.id}
                        </Link>
                        </td>
                        <td>{user.firstname}</td><td>{user.lastname}</td>
                        <td>{user.username}</td><td>{user.password}</td>
                        <td>{user.email}</td><td>{user.dateofbirth}</td>
                        <td>{user.phonenumber}</td>
                    </tr>)
                })
            }
            </table>
            <br /><br />
            &nbsp;&nbsp;&nbsp;<Link to="/">Back to Home Page</Link>&nbsp;&nbsp;&nbsp;<Link to="/users/new">Add New User</Link>
            <br /><br />

        </div>

    )
}

export default UserList;