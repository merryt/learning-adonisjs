import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DateService from '../Services/DateService'
import { inject } from '@adonisjs/fold';


// this file was created with `node ace make:controller Post --resource`

@inject()
export default class PostsController {

  constructor(public dateService: DateService){
    // this can be useful because we can provide services to our service
    this.dateService = new DateService("MM/dd/yyyy")
  }

  public async index({}: HttpContextContract) {
    return 'get all posts'
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
      const dateTime = DateService.toDateTime() 

      const formattedDate = this.dateService.toDate(dateTime)

      return `create a post on: ${formattedDate}`
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
