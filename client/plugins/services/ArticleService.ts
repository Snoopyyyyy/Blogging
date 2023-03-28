// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from "@nuxtjs/axios";
import Article from "../models/Article";

export default class ArticleService {
    axios: NuxtAxiosInstance

    constructor($axios: NuxtAxiosInstance) {
        this.axios = $axios;
    }

    getAll(): Promise<Article[]> {
        return this.axios.$get<Article[]>('/articles/getArticle');
    }

    getById(id: number): Promise<Article> {
        return this.axios.$get<Article>(`/articles/get/single/article/${id}`);
    }

    create(article: Article): Promise<Article> {
        return this.axios.$post<Article>(`/articles/createArticle`, JSON.stringify(article))
    }

    update(id: string, article: Article): Promise<Article> {
        return this.axios.$put<Article>(`/update/single/article/${id}`, JSON.stringify(article))
    }

    delete(id: string): Promise<Article> {
        return this.axios.$delete<Article>(`/delete/single/article/${id}`)
    }
}