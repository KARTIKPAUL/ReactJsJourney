import conf from '../conf.js'
import {Client , Account , ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.account = new Client(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //Call Another Method 
                return this.login({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCuurentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Appwrite Services Error ', error);
        }
        return null;
    }

    async logOut(){
        try {
            await this.account.deleteSessions('current');
        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthService();

export default authService;

