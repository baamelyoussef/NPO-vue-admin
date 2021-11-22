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
import generalinfo from "@/pages/generalinfo.vue";
import financialproc from "@/pages/financialproc";
import projectdetails from '@/pages/projectdetails.vue';
import engagementscope from '@/pages/engagementscope.vue';
import monitorevaluate from '@/pages/monitorevaluate.vue';
import fundingdetails from '@/pages/fundingdetails.vue';
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
        path: "/general-info",
        name: "generalinfo",
        component: generalinfo,
      },
      {
        path: "/project-details",
        name: "projectdetails",
        component: projectdetails,
      },
      {
        path: "/engage-scope",
        name: "engagementscope",
        component: engagementscope,
      },
      {
        path: "/m-v",
        name: "monitorevaluate",
        component: monitorevaluate,
      },
      {
        path: "/funding-details",
        name: "fundingdetails",
        component: fundingdetails,
      },
      {
        path: "/financial-proc",
        name: "financial-proc",
        component: financialproc,
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
