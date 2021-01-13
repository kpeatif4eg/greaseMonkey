import {rewritePass} from '../../../utils/API'


export const updatePassword = ({pass, token}) => {
    return dispatch => {
        rewritePass({pass, token});
    }
}