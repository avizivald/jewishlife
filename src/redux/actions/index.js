/*
* action types
*/
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
/*
* action creators
*/
export function addItem(data,name) {
    data.id =new Date().valueOf();
    console.log(data);
return { type: ADD_ITEM,  name :name,payload: data }
}
export function removeItem(id,name) {
    console.log(id);
return { type: REMOVE_ITEM, payload :id , name:name}
}