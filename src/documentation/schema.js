export default {
    Users: {
      type: 'object',
  
      properties: {
        id: {
          type: 'uuid',
          description: 'The auto-generated id ',
        },
        firstName: {
          type: 'string',
          description: 'first name',
        },
        lastName: {
            type: 'string',
            description: 'last name',
          },
          Nationality: {
            type: 'string',
            description: 'nationality',
          },
          email: {
            type: 'string',
            description: 'email address',
          },
        password: {
          type: 'string',
          description: 'fill password',
        },
        phoneNumber: {
          type: 'string',
          description: 'user phone number',
        },
      },
    }
  };