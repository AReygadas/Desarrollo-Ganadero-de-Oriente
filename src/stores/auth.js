import { defineStore} from 'pinia';

export const useAuthStore = defineStore('auth',{
    state:()=> ({
        isAuth:true,
        sideStatus:true
    }),

    actions:{
        changeAuth(value){
            this.isAuth = value;
        },
        changeSide(){
            this.sideStatus = !this.sideStatus;
        }
    }
});