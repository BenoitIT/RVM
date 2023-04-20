export default{
'/api/rvm/users/clients': {
    get: {
      tags: ['RVM clients'],
      description: 'all registered clients',
      parameters: [],
      requestBody: {},
      responses: {
        201: {
          description: 'clients retrived successfully',
        },
        401: {
          description: 'User Not Authorized',
        },
        404: {
          description: "no clients there",
        },
        500: {
          description: 'Internal Server Error',
        },
      },
    },
  },
}