



const delayActionMiddleware = (store)=>(next)=>async(action)=>{
    if(action.type === "todos/added"){
        console.log("I am delaying your action");
        setTimeout(()=>{
            next(action);
        },2000);

        return;
    }

    return next(action);
}

const fetchASyncTodosMiddleware = (store)=>(next)=>async(action)=>{
    if(typeof action === "function"){
       return action(store.dispatch,store.getState);
        
    }
    return next(action);

}


module.exports = {
    delayActionMiddleware,
    fetchASyncTodosMiddleware
}