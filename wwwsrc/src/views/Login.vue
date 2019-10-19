<template>
    <div class="login">
        <form v-if="loginForm" @submit.prevent="loginUser">
            <input type="email" v-model="creds.user_email" placeholder="email">
            <input type="password" v-model="creds.user_password" placeholder="password">
            <button type="submit">Login</button>
        </form>
        <form v-else @submit.prevent="register">
            <input type="text" v-model="newUser.username" placeholder="name">
            <input type="email" v-model="newUser.user_email" placeholder="email">
            <input type="password" v-model="newUser.user_password" placeholder="password">
            <button type="submit">Create Account</button>
        </form>
        <div @click="loginForm = !loginForm">
            <p v-if="loginForm">No account Click to Register</p>
            <p v-else>Already have an account click to Login</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                loginForm: true,
                creds: {
                    user_email: "",
                    user_password: ""
                },
                newUser: {
                    user_email: "",
                    user_password: "",
                    user_username: ""
                }
            };
        },
        beforeCreate(){
            if(this.$store.state.user.id){
                this.$router.push({name: "home"})
            }
        },
        methods: {
            register() {
                this.$store.dispatch("register", this.newUser);
            },
            loginUser() {
                this.$store.dispatch("login", this.creds);
            }
        }
    };
</script>