export default {
    "/api/rvm/users/resetcode" : {
        post: {
          tags: ["Password resetting"],
          description: "User password reset",
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
                },
              },
            },
            required: true,
          },
          responses: {
            200: {
              description: "reset code recieved successfully",
            },
            400: {
              description: "Bad Request, both fields are required",
            }
          },
        },
      },
      "/api/rvm/users/verifycode" : {
        post: {
          tags: ["Password resetting"],
          description: "verify codes sent to reset",
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
                 resetCode: "RVM2342"
                },
              },
            },
            required: true,
          },
          responses: {
            200: {
              description: "success",
            },
            400: {
              description: "Bad Request, both fields are required",
            }
          },
        },
      },
      "/api/rvm/users/reset" : {
        post: {
          tags: ["Password resetting"],
          description: "verify codes sent to reset",
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
                 newPassword: "RVM2342"
                },
              },
            },
            required: true,
          },
          responses: {
            200: {
              description: "success, password reset successful",
            },
            400: {
              description: "Bad Request, both fields are required",
            }
          },
        },
      },
    }

    