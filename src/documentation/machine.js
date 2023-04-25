export default {
    "/api/rvm/machines/newMachine" : {
        post: {
          tags: ["Machine"],
          description: "machine registeration",
          security: [],
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Machines",
                },
                example: {
                  "Location": "kigali",
                  "zone": "downtown",
                  "operatorId": "1",
                  "status": "active",
                  "gps_longitude": "22.45555",
                  "gps_latitude": "22.45555"
                },
              },
            },
            required: true,
          },
          responses: {
            201: {
              description: "new machine registered successfully",
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
      "/api/rvm/machines/all" : {
        get: {
          tags: ["Machine"],
          description: "all registered machines",
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