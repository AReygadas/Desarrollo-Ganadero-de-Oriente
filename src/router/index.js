import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/LoginView.vue"),

    },
    {
      path: "/dash",
      name: "dashboard",
      component: () => import("@/views/Dashboard/DashBoard.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/dash2",
      name: "dashboard2",
      component: () => import("@/views/DashBoard2.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/ganado",
      name: "ganado2",
      component: () => import("@/views/Ganado/Ganado.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/gas",
      name: "gastos",
      component: () => import("@/views/Gastos/Gastos.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/alm",
      name: "almacen",
      component: () => import("@/views/Almacen.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/usu",
      name: "usuarios",
      component: () => import("@/views/Usuarios.vue"),
      meta: { 
        requiresAuth: true,
      }
    },
    {
      path: "/conf",
      name: "configuracion",
      component: () => import("@/views/Configuracion.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/dNot",
      name: "notificaciones",
      component: () => import("@/views/Notificaciones.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/Inventarios",
      name: "inventarios",
      component: () => import("@/views/Inventarios/Inventarios.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/ganadoCards",
      name: "ganadoCards",
      component: () => import("@/views/Ganado/GanadoCard.vue"),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/potreros",
      name: "Potreros",
      component: () => import("@/views/Potreros/potreros.vue"),
      meta: {
        requiresAuth: true,
      }
    },

  ],
});

router.beforeEach((to,from) => {
  const store = useAuthStore();
  if(to.name == 'login' && store.isAuth) return false;
  if (to.meta.requiresAuth && !store.isAuth) return "/login";
});
export default router;
