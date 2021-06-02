export function addUser(newUser) {
    return {
        type:"ADD_USER",
        payload: newUser
    }
}

export function editUser(id, updatedUser) {
    return{
        type:"EDIT_USER",
        payload: { id: id, updatedUserInfo: updatedUser },
    }

}
 export function deleteUser(id) {
     return{
         type: "DELETE_USER",
         payload: id,
     };
 }


export default addUser;