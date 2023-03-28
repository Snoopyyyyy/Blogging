// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from "@nuxtjs/axios";
import User from "../models/User";

export default class UserService {
    axios: NuxtAxiosInstance

    constructor($axios: NuxtAxiosInstance) {
        this.axios = $axios;
    }

    login(username: string, password: string): Promise<boolean> {
        return this.axios.$put<boolean>('/auth/login', JSON.stringify({ username, password }));
    }

    register(user: User): Promise<User> {
        return this.axios.$post<User>('/auth/register', JSON.stringify(user));
    }
}