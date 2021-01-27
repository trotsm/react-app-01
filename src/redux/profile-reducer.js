const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let postItem = {
                postMessage: state.newPostText,
                likesCount: 0
            };
            state.postsData.unshift(postItem);
            state.newPostText = '';
            return state;
        case UPDATE_TEXT:
            state.newPostText = action.text;
            return state;
        default: return state;
    }
};

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateTextActionCreator = (text) => ({type: UPDATE_TEXT, text: text});