import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         { store => {
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             }
//             return  <Dialogs updateNewMessageBody={onNewMessageChange}
//                      sendMessage={onSendMessageClick}
//                      dialogsPage={store.getState().dialogsPage}/>
//         }
//     }
//     </StoreContext.Consumer>
// }
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;