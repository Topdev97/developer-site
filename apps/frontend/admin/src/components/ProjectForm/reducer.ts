type ReducerState = {
    uploadingForm:boolean,
    error:null | string,
    confirmed:boolean,
    uploadingImages:boolean,
    step: number
}
export const initialState:ReducerState = {
    uploadingForm:false,
    error:null,
    confirmed:false,
    uploadingImages:false,
    step:1
}


type CHANGE_STEP = {
    type:'CHANGE_STEP';
    payload: number
} 

type CREATE_PROJECT = {
    type:'CREATE_PROJECT',
    payload:null
    
}

type ERROR = {
    type:'ERROR',
    payload:string | null

}
type CONFIRM = {
    type:'CONFIRM',
    payload:{

    }
}
type EDIT_PROJECT = {
    type:"EDIT_PROJECT",
    payload:null
}

type CREATE_PROJECT_FINISHED = {
    type:"CREATE_PROJECT_FINISHED",
    payload:null
}

type EDIT_PROJECT_FINISHED = {
    type:"EDIT_PROJECT_FINISHED",
    payload:null
}


type ActionTypes =  CHANGE_STEP | CREATE_PROJECT | CREATE_PROJECT_FINISHED | EDIT_PROJECT | EDIT_PROJECT_FINISHED | ERROR






const reducerObject = (state:ReducerState,payload:any ) => {

    return {
        "CREATE_PROJECT":{
            ...state,
            uploadingForm:true,
            error:null
        },

        "CREATE_PROJECT_FINISHED":{
            ...state,
            uploadingForm:false
        },
        "EDIT_PROJECT":{
            ...state,
            uploadingForm:true,
            error:null
        },


        "EDIT_PROJECT_FINISHED":{
            ...state,
            uploadingForm:false,
            
        },

        "CHANGE_STEP":{
            ...state,
            step:payload
        },
        "ERROR":{
            ...state,
            error:payload
        },

    }
}
export const reducer = (state:ReducerState,action:ActionTypes)=>{
    return reducerObject(state,action.payload)[action.type] || state

    
}