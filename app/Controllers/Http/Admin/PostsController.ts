import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async index({}: HttpContextContract) {
    return "test"
  }

  public async create({}: HttpContextContract) {
    return "test"
  }

  public async store({}: HttpContextContract) {
    return "test"
  }

  public async show({}: HttpContextContract) {
    return "test"
  }

  public async edit({}: HttpContextContract) {
    return "test"
  }

  public async update({}: HttpContextContract) {
    return "test"
  }

  public async destroy({}: HttpContextContract) {
    return "test"
  }
}
