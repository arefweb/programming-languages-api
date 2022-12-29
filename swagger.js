const definitions = require('./schemas.json');

module.exports = {
  openapi: "3.0.3",
  info: {
    version: "1.0.0",
    title: "Programming Languages",
    description: "Programming Languages API representation UI",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT"
    }
  },
  tags: [
    {
      name: "Programming Languages",
      description: "API for programming languages"
    }
  ],
  servers: [
    {
      url: "http://localhost:3060/",
      description: "Development server"
    }
  ],
  components: {
    getProgrammings: definitions.components.getProgrammings,
    postProgrammings: definitions.components.postProgrammings,
  },
  paths: {
    '/api': {
      get: {
        summary: "Returns a list of programming languages",
        description: "Optional extended description in CommonMark or HTML.",
        parameters: [
          {
            name: "page",
            "in": "query",
            required: false,
            description: "pagination",
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "200": {
            description: "A JSON array of user names",
            content: {
              "application/json": {
                schema:{
                  type: "array",
                  items: {
                    $ref: "#/components/getProgrammings"
                  }
                }
              }
            }
          }
        }
      },
      post: {
        summary: "Add a new pet",
        requestBody: {
          description: "add new programming language",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/postProgrammings"
              }
            }
          }
        },
        responses: {
          201: {
            description: "Created"
          }
        }
      }
    },
    '/api/{id}': {
      delete:{
        summary: "deletes language by ID",
        parameters: [{
          'in': "path",
          name: "id",
          required: true,
          schema: {
            type: "number"
          }
        }],
        responses: {
          '204': {
            description: "deleted successfully"
          }
        }
      },
      put: {
        summary: "Change a language",
        parameters: [{
          'in': "path",
          name: "id",
          required: true,
          schema: {
            type: "number"
          }
        }],
        requestBody: {
          description: "Update a programming language",
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/postProgrammings"
              }
            }
          }
        },
        responses: {
          '204': {
            description: "Updated successfully"
          }
        }
      }
    }
  }
}