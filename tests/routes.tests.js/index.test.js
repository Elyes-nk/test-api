// 'use strict';
// const usersController = require('../src/usersController');
// const authController = require('../src/authController');

// const getSpy = jest.fn();

// jest.doMock('express', () => {
//   return {
//     Router() {
//       return {
//         get: getSpy,
//       };
//     },
//   };
// });

// describe("should test router", () => {
    
//     describe("should test auth router", () => {

//         test("should test register user route", () => {
//             require('../src/router')
//             //edit this
//             expect(getSpy).toHaveBeenCalledWith('/auth/register', authController.register);
//         })

//         test("should test login user route", () => {
//             require('../src/router')
//             //edit this
//             expect(getSpy).toHaveBeenCalledWith('/auth/login', authController.login);
//         })
//     })

  
//     describe("should test users router", () => {

//         test('should test get all users route', () => {
//             require('../src/router');
//             expect(getSpy).toHaveBeenCalledWith('/users', usersController.getAll);
//         });


//         test('should test get one user route', () => {
//             require('../src/router');
//             expect(getSpy).toHaveBeenCalledWith('/users/find/id', usersController.get);
//         });

//         test('should test update user route', () => {
//             require('../src/router');
//             expect(getSpy).toHaveBeenCalledWith('/users/id', usersController.update);
//         });

//         test("should test delete user route", () => {
//             require('../src/router')
//             expect(getSpy).toHaveBeenCalledWith('/users/', usersController.delete)
//         })

//     })


    

// });
