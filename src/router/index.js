import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/pages/auth/login.vue";
import Dashboard from "@/pages/dashboard.vue";
import home from "@/pages/home.vue";
import organization from "@/pages/organization-info.vue";
import engagement from "@/pages/engagement-info.vue";
import nominated from "@/pages/nominated-personal.vue";
import beneficiary from "@/pages/beneficiary.vue";
import sign from "@/pages/sign.vue";
import beneficiaryd from "@/pages/beneficiaryd.vue";
import organizationd from "@/pages/organization-infod.vue";
import signd from "@/pages/signd.vue";
import profile from "@/pages/profile.vue";
import forgotPass from "@/pages/auth/forgot-pass.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth/login",
    name: "login",
    component: Login,
  },
  {
    path: "/auth/reset-password",
    name: "reset-password",
    component: forgotPass,
  },
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    children: [
      // here we will have all the pages that related to dashboard
      {
        path: "/",
        name: "home",
        component: home,
      },
      {
        path: "/profile",
        name: "profile",
        component: profile,
      },
      {
        path: "/organization-info",
        name: "organization-info",
        component: organization,
      },
      {
        path: "/engagement-info",
        name: "engagement-info",
        component: engagement,
      },
      {
        path: "/nominated-personal",
        name: "nominated-personal",
        component: nominated,
      },

      {
        path: "/beneficiary",
        name: "beneficiary",
        component: beneficiary,
      },
      {
        path: "/beneficiaryd",
        name: "beneficiaryd",
        component: beneficiaryd,
      },
      {
        path: "/organization-infod",
        name: "organization-infod",
        component: organizationd,
      },
      {
        path: "/sign",
        name: "sign",
        component: sign,
      },
      {
        path: "/signd",
        name: "signd",
        component: signd,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
