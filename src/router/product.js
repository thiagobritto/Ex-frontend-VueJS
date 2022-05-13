const lazyLoad = (view) => {
  return () => import(`@/pages/${view}.vue`)
}

const routes = [
  {
    path: '/product/add',
    name: 'ProductAdd',
    component: lazyLoad('product/Add'),
    meta: { layout: 'default' }
  },
  {
    path: '/product/manage',
    name: 'ProductManage',
    component: lazyLoad('product/Manage'),
    meta: { layout: 'default' }
  }
]

export default routes
