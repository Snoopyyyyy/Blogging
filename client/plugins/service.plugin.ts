import { Plugin } from '@nuxt/types';
import ArticleService from "./services/ArticleService"
import UserService from "./services/UserService"

declare module '@nuxt/types' {
    interface Context {
        $services: {
            articles: ArticleService,
            users: UserService
        }
    }
}

const services: Plugin = ({ $axios }, inject) => {
    const services = {
        articles: new ArticleService($axios),
        users: new UserService($axios)
    }
    
    inject('services', services)
}

export default services