import { Document } from 'camo'

export default class Dog extends Document {
  constructor () {
    super()

    this.name = String
    this.breed = String
  }

  static _instantiate () {
    var instance = new this()
    instance.generateSchema()
    return instance
  }
}
