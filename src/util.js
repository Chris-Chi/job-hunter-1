/**
 * Created by xianm on 2018-03-06.
 */
/**
 * return the route address according to the user information
 */
export function getRedirectPath({type, avatar}){
    let url = type === 'boss'? 'boss' : 'talent'
    return !avatar ? url + 'info' : url
}
