export default {
  Users: {
    type: "object",

    properties: {
      id: {
        type: "uuid",
        description: "The auto-generated id ",
      },
      firstName: {
        type: "string",
        description: "first name",
      },
      lastName: {
        type: "string",
        description: "last name",
      },
      Nationality: {
        type: "string",
        description: "nationality",
      },
      email: {
        type: "string",
        description: "email address",
      },
      password: {
        type: "string",
        description: "fill password",
      },
      phoneNumber: {
        type: "string",
        description: "user phone number",
      },
    },
  },
  Operators: {
    type: "object",
    properties: {
      id: {
        type: "integer",
        description: "The auto-generated id ",
      },
      firstName: {
        type: "string",
        description: "first name",
      },
      lastName: {
        type: "string",
        description: "last name",
      },
      NationalID: {
        type: "integer",
        description: "national identifier",
      },
      phoneNumber: {
        type: "string",
        description: "user phone number",
      },
    },
  },
  Machines: {
    type: "object",
    properties: {
      id: {
        type: "integer",
        description: "The auto-generated id ",
      },
      location: {
        type: "string",
        description: "kigali",
      },
      zone: {
        type: "string",
        description: "downtown",
      },
      status:{
        type: "string",
        description: "last name",
      },
      operatorid: {
        type: "integer",
        description: "operatorId",
      },
      gps_langitude: {
        type: "integer",
        description: "longitude detected from gps device",
      },
      gps_latitude: {
        type: "integer",
        description: "latitude detected from gps device",
      },
    },
  },
};
