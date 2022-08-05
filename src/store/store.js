import { reactive } from "vue";

const store = reactive({
    username:"fernando.altamirano",
    updateUsername (username) {
        this.username = username
    }
})

export default store