// export const isLikedByReqUser = (reqUserId, post) => {
//     for(let user of post.liked){
//         if(reqUserId===user.id){
//             return true
//         }
//     }
//     return false;
// }



export const isLikedByReqUser = (reqUserId, post) => {
    // Check if post and post.liked are defined
    if (post && post.liked) {
        // Loop through the liked array
        for (let user of post.liked) {
            if (reqUserId === user.id) {
                return true;
            }
        }
    }
    return false;
}
