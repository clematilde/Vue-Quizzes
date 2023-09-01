import { createRouter, createWebHistory } from "vue-router"
import QuizesView from "../components/QuizesView.vue"
import QuizView from "../components/QuizView.vue"

const router = createRouter ({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizes",
      component: QuizesView
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizView
    }
  ]
})

export default router
