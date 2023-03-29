<template>
    <div class="form-container">
        <form class="form" @submit.prevent="handleSubmit">
            <div class="form-field">
                <label for="username">
                    <svg class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
                    </svg>
                </label>
                <input v-model="username" type="text" placeholder="Username" name="username" required/>
            </div>

            <div class="form-field">
                <label for="password">
                    <svg class="icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock"></use>
                    </svg>
                </label>
                <input v-model="password" type="password" placeholder="Password" name="password" required/>
            </div>

            <div class="form-field">
                <input type="submit" value="Sign in" />
            </div>
        </form>

        <p v-if="error" class="text-center text-error">
            {{ error }}
        </p>

        <p class="text-center">
            Not a member? <a href="/auth/register">Sign up now</a>
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'LoginPage',
    data() {
        return {
            error: "",
            username: "",
            password: ""
        }
    },
    methods: {
        handleSubmit: async function() {
            try {
                const isSign = await this?.$services.users.login(this.username, this.password);
                if(isSign) {
                    sessionStorage.setItem('session', JSON.stringify({ username: this.username, password: this.password }));
                    this.$router.push('/article')
                }
            }catch(e: any) {
                this.error = e.message;
                this.username = "";
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