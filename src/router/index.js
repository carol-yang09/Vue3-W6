import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    // name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/Products.vue'),
      },
    ],
  },
  {
    path: '/admin',
    // name: 'DashboardLayout',
    component: () => import('../views/DashboardLayout.vue'),
    children: [
      {
        path: 'productsmanage',
        name: 'ProductsManage',
        component: () => import('../views/admin/ProductsManage.vue'),
      },
      {
        path: 'ordersmanage',
        name: 'ordersManage',
        component: () => import('../views/admin/OrdersManage.vue'),
      },
    ],
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  // 重新導向
  {
    path: '/newPage/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes,
});

export default router;
