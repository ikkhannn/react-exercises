const initState = {

    users: [],
    posts: [
        {id:1,title:'asdasdasdasdasdasadsas',body:'asdasdasdasasdasd'},
        {id:2,title:'asdasdasdasdasdasadsas',body:'asdasdasdasasdasd'},
        {id:3,title:'asdasdasdasdasdasadsas',body:'asdasdasdasasdasd'}
    ]
}
const rootReducer = (state = initState, action) => {
    if(action.type==='DELETE_POST'){
        let newPosts = state.posts.filter((post)=>{
            return post.id !== action.id
        });

        return {
            ...state,
            posts:newPosts
        } 
    }
    return state;
}
export default rootReducer;
