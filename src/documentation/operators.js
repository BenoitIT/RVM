export default {
    "/api/rvm/machines/newOperator" : {
        post: {
          tags: ["Machine"],
          description: "operator registeration",
          security: [],
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Operators",
                },
                example: {
                  "firstName": "david",
                  "lastName": "mugabo",
                  "nationalID": "1233837839336389",
                  "phoneNumber": "1234567890"
                },
              },
            },
            required: true,
          },
          responses: {
            201: {
              description: "new operator registered successfully",
            },
            409: {
              description: {message: "existance"},
            },
            400: {
              description: "Bad Request, both fields are required",
            }
          },
        },
      },
    }