import {rewritePass} from '../../../utils/API'


export const updatePassword = ({pass, token}) => {
    return dispatch => {
        rewritePass({pass, token})
        .then(res => console.log(res))
        .catch(e=>{
            console.log(e)
        })
    }
}