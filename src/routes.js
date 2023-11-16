/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const Joi = require('joi');

const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
    options: {
      description: 'Get all books and filter them based on query parameters',
      notes: 'Query parameters: ?name={string}&reading={0|1}&finished={0|1}',
      tags: ['api'],
      validate: {
        query: Joi.object({
          name: Joi.string(),
          reading: Joi.number().valid(0, 1),
          finished: Joi.number().valid(0, 1),
        }),
      },
    },
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
