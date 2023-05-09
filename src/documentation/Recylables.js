export default {
  "/api/rvm/recycle/recyclables/add": {
    post: {
      tags: ["Recyclables"],
      description: "recycling operation",
      security: [
        {
            bearerAuth: [],
          },
      ],
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Recyclables",
            },
            example: {
              "Location": "kigali",
              "zone":"zone here",
              "bootleType":"CAN",
              "numberOfRecyclables": 2,
              "rewardPerEach": 30,
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
          description: { message: "existance" },
        },
        400: {
          description: "Bad Request, both fields are required",
        },
      },
    },
  },
  "/api/rvm/recycle/recyclables/list": {
    get: {
      tags: ["Recyclables"],
      description: "recycling operation",
      security: [
        {
          bearerAuth: [],
        },
      ],
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
  "/api/rvm/recycle//recyclables/{id}": {
    delete: {
      tags: ["Recyclables"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Recyclable id",
          required: true,
          type: "integer",
          example: "31",
        },
      ],
      responses: {
        200: {
          description: "OK",
        },
        500: {
          description: "Internal Server Error",
        },
        404: {
          description: "not found",
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
};
