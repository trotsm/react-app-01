let state = {
    dialogPage: {
        dialogsData: [
            {name: 'Oleh', id: '' + 1},
            {name: 'Ivan', id: '' + 2},
            {name: 'Stepan', id: '' + 3},
            {name: 'Olha', id: '' + 4},
            {name: 'Kateryna', id: '' + 5}
        ],
        messagesData: [
            {message: 'Hello, how are you?'},
            {message: 'Call me back, please!'},
            {message: 'Where are you from?'},
            {message: 'Hello world'},
            {message: 'I am waiting for you'}
        ]
    },
    profilePage: {
        postsData: [
            {message: 'This is first post', likesCount: 1},
            {message: 'This is 2 post', likesCount: 12},
            {message: 'This is 3 post', likesCount: 43},
            {message: 'This is 4 post', likesCount: 11}
        ]
    },
    topFriends: {
        friendsData: [
            {name: 'Rachel', image: 'https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w700.jpg'},
            {name: 'Monica', image: 'https://static.wikia.nocookie.net/friends/images/f/f6/1675c88baf466d3aa35435018dc4ead1.jpg'},
            {name: 'Phoebe', image: 'https://media1.popsugar-assets.com/files/thumbor/Jag4QheIiSRDyPige1c7d6J7X68/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/07/25/859/n/1922398/1bb1be5259779df9303e84.02388163_edit_img_image_43785815_1500923262/i/Phoebe-Buffay-Quotes-From-Friends.jpg'}
        ]
    }
};


export default state;