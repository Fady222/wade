import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/04_templates/tHomePage.vue")
    },
    {
      path: "/td/:id",
      name: "thingDescription",
      component: () => import("@/components/04_templates/tThingDescription.vue")
    },
    {
      path: "/folder/:id",
      name: "folder",
      component: () => import("@/components/04_templates/tFolder.vue")
    },
    {
      path: "/mashup/:id",
      name: "mashup",
      component: () => import("@/components/04_templates/tMashup.vue")
    },
    {
      path: "/:type/:id/:tab",
      name: "deployment",
      component: () => {
        import("@/components/04_templates/tDeployment.vue");
        import("@/components/03_organisms/oMonitoring.vue");
        import("@/components/03_organisms/oVerification.vue");
      }
    },
    {
      path: "/:type/:id/:tab",
      name: "config",
      component: () => import("@/components/03_organisms/oConfig.vue")
    },
    {
      path: "/:type/:id/:tab",
      name: "virtual",
      component: () => {
        import("@/components/03_organisms/oVirtual.vue");
        import("@/components/03_organisms/oVirtualThing.vue");
      }
    }
  ]
});
