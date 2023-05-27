export default {
  "/api/rvm/recycle//rewards/add": {
    post: {
      tags: ["Rewards"],
      description: "reward definition",
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
              $ref: "#/components/schemas/Rewards",
            },
            example: {
              bottleType: "platsi",
              rewardPerEach: 30,
            },
          },
        },
        required: true,
      },
      responses: {
        201: {
          description: "new rewords registered successfully",
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
  "/api/rvm/recycle/rewards/list": {
    get: {
      tags: ["Rewards"],
      description: "rewards list",
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
  "/api/rvm/recycle/rewards/list/{bottleType}": {
    get: {
      tags: ["Rewards"],
      security: [],
      parameters: [
        {
          name: "bottleType",
          in: "path",
          description: "bottleType",
          required: true,
          type: "string",
          example: "can",
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
  "/api/rvm/recycle/rewards/update/{bottleType}": {
    patch: {
      tags: ["Rewards"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "bottleType",
          in: "path",
          description: "bottleType",
          required: true,
          type: "string",
          example: "can",
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Rewards",
            },
            example: {
              rewardPerEach: 20,
            },
          },
        },
        required: true,
      },
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
  "/api/rvm/getpaid/getpaid": {
    post: {
      tags: ["Rewards"],
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
              $ref: "#/components/schemas/Balances",
            },
            example: {
              transferredAmount: 30,
            },
          },
        },
        required: true,
      },
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
  "/api/rvm/getpaid/mybalance": {
    get: {
      tags: ["Rewards"],
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [],
      requestBody: {},
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
