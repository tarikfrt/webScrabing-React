import axios from "axios"


export default class ArticleService{
    getArticles(){
        return axios.get("http://localhost:6060/api/articles/getAll")
    }
    addArticle(){
        return axios.post("http://localhost:6060/api/articles/add/Url")
    }

}