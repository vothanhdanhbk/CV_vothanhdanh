import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actGetAccountsRequire = () => {
    return dispatch => {
        return callApi('users', 'GET', null).then(res => {
            dispatch(actGetAccounts(res.data));
        });
    };
}

export const actGetAccounts = (data) => {
    return {
        type: Types.GET_USERNAME,
        data
    }
}
//
export const actCreateAccountRequire = (user) => {
    return dispatch => {
        return callApi('users', 'POST', {
            name: user.Name,
            username: user.UserName,
            password: user.PassWord,
            userid: user.userid
        }).then(res => { 
            if(res.status !== 201) console.log('Please connect Internet !!!')
        });
       
    };
}
//
export const actFetchCommentRequire = (data) => {
    return dispatch => {
        return callApi('comments', 'POST', {
            name: data.name,
            comment: data.comment,
            userid: data.userid,
            select: data.select
        }).then(res => {
            dispatch(actGetCommentsRequire());
        });
       
    };
}

export const actGetCommentsRequire = () => {
    return dispatch => {
        return callApi('comments', 'GET', null).then(res => {
            dispatch(actAddcommentsStore(res.data));
        });
    };
}

export const actAddcommentsStore = (data) => {
    return {
        type: Types.GET_COMMENT,
        data
    }
}
//update status
export const actUpdateStatusRequest = (comment,select) => {
    return dispatch => {
        return callApi(`comments/${comment.id}`, 'PUT', {
            select:select
        }).then(res => {
            // if(res.status !== 201) console.log('Please connect Internet !!!')
        });
    }
}
// edit comment
export const actUpdateEditCommentRequest = (comment) => {
    return dispatch => {
        return callApi(`comments/${comment.id}`, 'PUT', {
            name:comment.name,
            comment:comment.comment,
            userid:comment.userid,
            select:comment.select

        }).then(res => {
            // if(res.status !== 201) console.log('Please connect Internet !!!')
        });
    }
}
//delete comment
export const actDeleteCommentRequest = (comment) => {
    return dispatch => {
        return callApi(`comments/${comment.id}`, 'DELETE', null).then(res =>{
            // if(res.status !== 201) console.log('Please connect Internet !!!')
        })
    }
}
//Fetch Rating
export const actFetchRatingRequire = (user,rating,date) => {
    return dispatch => {
        return callApi('ratings', 'POST', {
            rating:rating,
            userid:user.userid,
            date:date,
            name:user.name
        }).then(res => {
            dispatch(actGetRatingsRequire())
        });
       
    };
}
// Get ratings
export const actGetRatingsRequire = () => {
    return dispatch => {
        return callApi('ratings', 'GET', null).then(res => {
            dispatch(actGetRatings(res.data));
        });
    };
}

export const actGetRatings = (data) => {
    return {
        type: Types.FETCH_RATING,
        data
    }
}
// update rating
export const actUpdateRatingRequest = (id,rating,date) => {
    return dispatch => {
        return callApi(`ratings/${id}`, 'PUT', {
            rating:rating,
            date:date
        }).then(res => {
            dispatch(actGetRatingsRequire())
        });
    }
}
//Fetch Message
export const actFetchMessageRequire = (states) => {
    return dispatch => {
        return callApi('messages', 'POST', {
            txtName: states.txtName,
            txtEmail: states.txtEmail,
            txtPhone: states.txtPhone,
            txtMsg: states.txtMsg
        }).then(res => {
         
        });
       
    };
}