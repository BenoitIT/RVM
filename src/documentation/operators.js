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
      "/api/rvm/machines/list-operators" : {
        get: {
          tags: ["Machine"],
          description: "all registered operators",
          security: [],
          parameters: [],
          requestBody: {},
          responses: {
            200: {
              description: "successfully",
            },
            204: {
              description: "No Content related to the ID provided",
            },
            401: {
              description: "User Not Authorized",
            },
            404: {
              description: "Product doesn't exist!",
            },
            500: {
              description: "Internal Server Error",
            },
          },
        },
      },
    }