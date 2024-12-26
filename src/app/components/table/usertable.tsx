import ActionTable from "../micro/actiontable"
import Fail from "../micro/fail"
import Success from "../micro/success"


export default function UserTable() {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Acount Verified</th>
                        <th className="flex justify-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <Fail></Fail>
                        </td>
                        <ActionTable></ActionTable>
                    </tr>
                    {/* row 2 */}
                    <tr className="">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>User</td>
                        <td>Inactive</td>
                        <td>
                            <Success></Success>
                        </td>
                        <ActionTable></ActionTable>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <Fail></Fail>
                        </td>
                        <ActionTable></ActionTable>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
