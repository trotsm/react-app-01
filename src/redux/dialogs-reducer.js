const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messageItem = {
                dialogMessage: state.newMessage
            };
            state.messagesData.push(messageItem);
            state.newMessage = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessage = action.text;
            return state;
        default: return state;
    }
};

export default dialogsReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text});