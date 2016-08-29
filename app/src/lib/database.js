import { remote } from 'electron'
import path from 'path'
import { connect } from 'camo'

const uri = 'nedb://' + path.join(remote.app.getPath('userData'), 'gardenDB')
const database = {
  init (cb) {
    connect(uri).then(db => {
      database.collections = db._collections
      database.path = db._path
      database.url = db._url
      cb()
    })
  },
  collections: {}, path: '', url: ''
}

connect(uri).then(db => {
  database.collections = db._collections
  database.path = db._path
  database.url = db._url
})

export default database
