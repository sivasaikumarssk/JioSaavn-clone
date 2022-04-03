import {GET_SONG} from "./action"



export const reducer = (store="arijit",{type,payload}) => {
    switch(type) {
        case GET_SONG:
            return {store:payload}
    }
}