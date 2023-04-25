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

    '/api/rvm/machines/machine/{id}/delete': {
      delete: {
        tags: ['Machine'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'product id',
            required: true,
            type: 'integer',
            example: '31',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          500: {
            description: 'Internal Server Error',
          },
          404: {
            description: 'not found',
          },
          401: {
            description: "Not Authorized",
          },
          403: {
            description: "Forbidden Access",
          },
        },
      },
    },
    '/api/rvm/machines/machine/{id}': {
      get: {
        tags: ['Machine'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'product id',
            required: true,
            type: 'integer',
            example: '31',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          500: {
            description: 'Internal Server Error',
          },
          404: {
            description: 'not found',
          },
          401: {
            description: "Not Authorized",
          },
          403: {
            description: "Forbidden Access",
          },
        },
      },
    },
    '/api/rvm/machines/machine/{id}/update': {
      put: {
        tags: ['Machine'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'product id',
            required: true,
            type: 'integer',
            example: '31',
          },
        ],
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
          200: {
            description: 'OK',
          },
          500: {
            description: 'Internal Server Error',
          },
          404: {
            description: 'not found',
          },
          401: {
            description: "Not Authorized",
          },
          403: {
            description: "Forbidden Access",
          },
        },
      },
    },
    "/api/rvm/machines/locations" : {
      get: {
        tags: ["RVMLocations"],
        description: "all registered machines location",
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
    '/api/rvm/machines/{Location}/zones': {
      get: {
        tags: ['RVMLocations'],
        parameters: [
          {
            name: 'Location',
            in: 'path',
            description: 'location name',
            required: true,
            type: 'string',
            example: 'Kigali',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          500: {
            description: 'Internal Server Error',
          },
          404: {
            description: 'not found',
          },
          401: {
            description: "Not Authorized",
          },
          403: {
            description: "Forbidden Access",
          },
        },
      },
    },
    }