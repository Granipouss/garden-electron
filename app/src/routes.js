function makeRoute (name, path) {
  if (path == null) path = '/' + name.toLowerCase()
  return {
    path, name, component: require('components/' + name + 'View')
  }
}
makeRoute

export default [
  {
    path: '/layout',
    component: require('components/Layout/Layout'),
    children: [
      makeRoute('Home')
    ]
  },
  { path: '*', redirect: '/home' }
]
