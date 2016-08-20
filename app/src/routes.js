function makeRoute (name, path) {
  if (path == null) path = '/' + name.toLowerCase()
  return {
    path, name, component: require('views/' + name + 'View')
  }
}
makeRoute

export default [
  makeRoute('Title', '/'),
  {
    path: '/layout',
    component: require('layout/Layout'),
    children: [
      makeRoute('Home')
    ]
  },
  { path: '*', redirect: '/home' }
]
