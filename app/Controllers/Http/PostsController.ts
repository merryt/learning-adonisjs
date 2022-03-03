import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


// this file was created with `node ace make:controller Post --resource`


export default class PostsController {
  public async index({}: HttpContextContract) {
    return 'get all posts'
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
      return 'create a post'
  }

  public async show({params}: HttpContextContract) {
      return `get post with id of ${params.id}`
  }

  public async edit({}: HttpContextContract) {}

  public async update({params}: HttpContextContract) {
      return `update post with id of ${params.id}`
  }
  public async destroy({params}: HttpContextContract) {
    return `delete post with id of ${params.id}`
  }
}
