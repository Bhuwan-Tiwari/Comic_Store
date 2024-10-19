'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comics', [
      {
        name: 'Batman: Year One',
        author: 'Frank Miller',
        yearOfPublication: 1987,
        price: 15.99,
        discount: 0,
        numberOfPages: 144,
        condition: 'new',
        description: 'A defining story arc for Batman.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Spider-Man: Homecoming',
        author: 'Brian Michael Bendis',
        yearOfPublication: 2017,
        price: 12.99,
        discount: 10,
        numberOfPages: 96,
        condition: 'used',
        description: 'The story of a young Peter Parker.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'X-Men: Days of Future Past',
        author: 'Chris Claremont',
        yearOfPublication: 1981,
        price: 14.99,
        discount: 5,
        numberOfPages: 200,
        condition: 'new',
        description: 'A classic storyline about time travel and dystopia.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Wonder Woman: The Hiketeia',
        author: 'Greg Rucka',
        yearOfPublication: 2002,
        price: 16.50,
        discount: 0,
        numberOfPages: 144,
        condition: 'new',
        description: 'An intense story that challenges Wonder Woman.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Sandman: Preludes & Nocturnes',
        author: 'Neil Gaiman',
        yearOfPublication: 1989,
        price: 18.00,
        discount: 0,
        numberOfPages: 192,
        condition: 'used',
        description: 'The beginning of Neil Gaiman’s acclaimed series.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Watchmen',
        author: 'Alan Moore',
        yearOfPublication: 1987,
        price: 20.00,
        discount: 0,
        numberOfPages: 416,
        condition: 'new',
        description: 'A groundbreaking graphic novel that redefined the genre.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maus',
        author: 'Art Spiegelman',
        yearOfPublication: 1986,
        price: 22.00,
        discount: 0,
        numberOfPages: 296,
        condition: 'used',
        description: 'A powerful graphic novel about the Holocaust.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Saga, Volume 1',
        author: 'Brian K. Vaughan',
        yearOfPublication: 2012,
        price: 14.99,
        discount: 15,
        numberOfPages: 152,
        condition: 'new',
        description: 'An epic space opera that follows star-crossed lovers.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
