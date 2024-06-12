import conf from '../conf.js'
import {Client , Account , ID , Databases , Storage , Query} from "appwrite";

export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featureImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async updatePost(slug , {title,content,featureImage,status,userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status 
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost(){
        try {
            return await this.databases.getDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPosts(queries = [
        Query.equal("status","active")
    ]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    //File Upload Service
    async uploadFile({file}){
        try {
           return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
           ) 
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    //Delete File

    async deletFile(fileid){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileid
            )
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    //File PreView

    getFilePreview(fileid){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileid
        )
    }

}

const service = new Service();

export default service;