import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import CarView from '../views/Car.vue'
import ContactView from '../views/Contact.vue'
import NotFoundView from '../views/404.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL)
    , routes: [
        {
            path: "/"
            , name: "Home"
            , component: HomeView
        }
        , {
            path: "/home"
            , redirect: "/"
        }
        , {
            path: "/about"
            , name: "About"
            , component: AboutView
        }
        , {
            path: "/cars/:id"
            , name: "car"
            , component: CarView
            , children: [
                {
                    path: "contact"
                    , component: ContactView
                }
            ]
        }
        , {
            path: "/:catchall(.*)*"
            , name: "Not Found"
            , component: NotFoundView
        }
    ]
})

export default router