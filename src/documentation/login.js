export default {
    "/api/rvm/users/login" : {
        post: {
          tags: ["App Auth"],
          description: "login functionality",
          security: [],
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Users",
                },
                example: {
                 phoneNumber: "1234567890",
                  password: "12345678"
                },
              },
            },
            required: true,
          },
          responses: {
            201: {
              description: "user logged successfully",
            },
            403: {
              description: "incorrect password",
            },
            400: {
              description: "Bad Request, both fields are required",
            }
          },
        },
      },
    }