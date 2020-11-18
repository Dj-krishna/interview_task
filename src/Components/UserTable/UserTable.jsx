import React from 'react'

const UserTable = (props) => {
    return (
        <div>
            <table>
                <UserHeader />
                {
                    props.userData.map(user => {
                        return <UserData userProfile={user} />
                    })
                }
            </table>
        </div>
    )
}

const UserHeader = () => {
    return (<tr>
        <th>Id</th>
        <th>Employee Name</th>
        <th>Employee Salary</th>
        <th>Employee Age</th>
        <th>Profile Image</th>
    </tr>)
}

const UserData = (props) => {
    return (<tr>
        <td>{props.userProfile.id}</td>
        <td>{props.userProfile.employee_name}</td>
        <td>{props.userProfile.employee_salary}</td>
        <td>{props.userProfile.employee_age}</td>
        <td>{props.userProfile.employee_image}</td>
        <td><input type="checkbox" checked={props.userProfile.status} /></td>
        {/* <td><button onClick = {()=>{props.onDeleteUser(props.userProfile._id)}}>Delete</button></td> */}
    </tr>)
}

export default UserTable;