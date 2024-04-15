import axios from "axios"
import { API_BASE_URL } from "../../config/api"
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.actionType"

export const loginUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    try {
        const {data}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData.data);

        if (data.jwt) {
            localStorage.setItem("jwt",data.jwt);

        }
        console.log("Login success", data);
        dispatch({type:LOGIN_SUCCESS, payload:data.jwt});

    } catch (error) {
        console.log("-----------", error);
        dispatch({type:LOGIN_FAILURE, payload:error});
    }
};




export const registerUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    try {
        const {data}=await axios.post(`${API_BASE_URL}/signup`,loginData.data);

        if (data.jwt) {
            localStorage.setItem("jwt",data.jwt);
        }
        console.log("register----", data);

        dispatch({type:LOGIN_SUCCESS, payload:data.jwt});

    } catch (error) {
        console.log("-----------", error);
        dispatch({type:LOGIN_FAILURE, payload:error});
    }
};


export const getProfileAction=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_PROFILE_REQUEST});
    try {
        const {data}=await axios.get(`${API_BASE_URL}/auth/users/profile`,
        {
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });

        
        console.log("profile----", data);

        dispatch({type:GET_PROFILE_SUCCESS, payload:data});

    } catch (error) {
        console.log("-----------", error);
        dispatch({type:GET_PROFILE_FAILURE, payload:error});
    }
};