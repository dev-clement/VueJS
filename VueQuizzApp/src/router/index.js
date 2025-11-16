import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import QuizViews from '../views/Quiz.vue'

const route = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL)
    , routes: [
        {
            path: '/'
            , name: 'Home'
            , component: HomeView
        }
        , {
            path: '/home'
            , redirect: '/'
        }
        , {
            path: '/quiz/:id'
            , name: 'Quiz'
            , component: QuizViews
        }
    ]
})

export default route