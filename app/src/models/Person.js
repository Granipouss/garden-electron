import { Document } from 'camo'

// References
import Dog from './Dog'

export default class Person extends Document {
  constructor () {
    super()

    this.pet = Dog
    this.name = String
    this.age = String
  }

  static collectionName () {
    return 'people'
  }
}
