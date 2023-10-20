const reducer =(state='in', action)=>{
    if(action.type==='select'){
        return state=action.payload
    }else{
        return state
    }
}
export default reducer