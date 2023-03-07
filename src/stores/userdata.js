import { defineStore} from 'pinia';

export const UserStore = defineStore('us',{
    state:()=> ({
        name:''
    }),

    actions:{
        changeUsName(value){
            this.name = value;
        }
    }
});