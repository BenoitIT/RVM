export default {
    "/api/rvm/users/newAdmin" : {
        post: {
          tags: ["App Auth"],
          description: "User registeration",
          security: [],
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Users",
                },
                example: {
                  firstName: "david",
                  lastname: "mugabo",
                  Nationality:"Rwanda",
                 phoneNumber: "1234567890",
                  email: "example@gmail.com",
                  password: "12345678",
                },
              },
            },
            required: true,
          },
          responses: {
            201: {
              description: "New User was created successfully",
            },
            409: {
              description: {message: "User already exists"},
            },
            400: {
              description: "Bad Request, both fields are required",
            }
          },
        },
      },
    }