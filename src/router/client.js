const lazyLoad = (view) => {
  return () => import(`@/pages/${view}.vue`)
}

const routes = [
  {
    path: '/client/add',
    name: 'ClientAdd',
    component: lazyLoad('client/Add'),
    meta: { layout: 'default' }
  },
  {
    path: '/client/manage',
    name: 'ClientManage',
    component: lazyLoad('client/Manage'),
    meta: { layout: 'default' }
  },
  {
    path: '/client/update',
    name: 'ClientUpdate',
    component: lazyLoad('client/Update'),
    meta: { layout: 'default' }
  },
]

export default routes
