function makeRoute (name, path) {
  if (path == null) path = '/' + name.toLowerCase()
  let component = require('views/' + name + 'View')
  return { path, name, component }
}

export default [
  makeRoute('Title', '/'),
  {
    path: '/layout',
    component: require('layouts/default'),
    children: [
      makeRoute('Home'),
      makeRoute('Foo'),
      makeRoute('Bar')
    ]
  },
  { path: '*', redirect: '/home' }
]
