<template>
    <div class="form-container">
        <form class="form" @submit.prevent="handleSubmit">
            <div class="form-field">
                <label for="username">
                    <svg class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
                    </svg>
                </label>
                <input v-model="user.username" type="text" placeholder="Username" name="username" required/>
            </div>

            <div class="form-field">
                <label for="password">
                    <svg class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock"></use>
                    </svg>
                </label>
                <input v-model="user.password" type="password" placeholder="Password" name="password" required/>
            </div>

            <div class="form-field">
                <label for="password-checker">
                    <svg class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock"></use>
                    </svg>
                </label>
                <input v-model="password" type="password" placeholder="Password" name="password-checker" required/>
            </div>

            <div class="form-field">
                <select v-model="user.role" required>
                    <option disabled selected value="">Select your role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>    
            </div>

            <div class="form-field">
                <input type="submit" value="Sign in" />
            </div>
        </form>

        <p v-if="error" class="text-center text-error">
            {{ error }}
        </p>

        <p class="text-center">
            Already member? <a href="/auth/login">Sign in now</a>
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import User from '~/plugins/models/User';

export default Vue.extend({
    name: 'RegisterPage',
    data() {
        const user = new User()
        user.role = ""
        return {
            error: "",
            password: "",
            user
        }
    },
    methods: {
        handleSubmit: async function() {
            try {
                if(this.user.password !== this.password) throw new Error("password not matching");
                await this?.$services.users.register(this.user);
                this.$router.push('/auth/login')
            }catch(e: any) {
                this.error = e.message;
                this.user.password = "";
                this.password = "";
            }
        }
    }
})
</script>

<style>
    a {
        color: #eee;
        outline: 0;
        text-decoration: underline;
    }

    .form-container {
        margin-right: auto;
        margin-left: auto;
        max-width: 20rem;
        width: 90%;
    }

    .icon {
        display: inline-block;
        fill: #606468;
        font-size: 16px;
        font-size: 1rem;
        height: 1em;
        vertical-align: middle;
        width: 1em;
    }

    
</style>