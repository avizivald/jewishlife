import {
    ADD_ITEM,REMOVE_ITEM
} from '../actions'
function manageList(state = { items: {} } ,action) {
    // console.log('state list  ',state);
    switch (action.type) {
        case ADD_ITEM:
            // console.log('state ',state);
            // console.log('action ',action);
            return  {
                    ...state.items,
                    items: {
                      ...state.items, [action.name]: action.payload
                    }
                  }
             
        case REMOVE_ITEM:
            let newobj =Object.assign({}, state.items)
            for (const key in state.items) {
              // console.log(state.items[key].id);
              // console.log(action.payload);
              if(state.items[key].id==action.payload){
                console.log('newobj ',newobj);
                console.log('state.items[key].name ',state.items[key].name);
                console.log('newobj[state.items[key].name] ',newobj[state.items[key].name]);
                delete newobj[state.items[key].name]
                console.log('newobj after ',newobj);
              //  console.log("true",newobj);
              //  console.log('state ',state);
              //  console.log('action ',action);
               return  {
                ...state.items,
                  items: {
                    newobj
                   }
                 }
              }
            }
            
             
            // {
            //         ...state.items,
            //         items: {
            //           ...state.items, [action.name]: action.payload
            //         }
            //       }
             
             
        default:
            return state
    }
}
export default manageList;