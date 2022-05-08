// 'use strict';
// const router = require('../src/routes');

// const useDisableSpy = jest.fn();
// const useSpy = jest.fn();
// const listenSpy = jest.fn();

// jest.doMock('express', () => {
//   return () => ({
//     disable: useDisableSpy,
//     use: useSpy,
//     listen: listenSpy,
//   });
// });

// describe('Test the addLike method', () => {
//   beforeAll(() => {
//       mongoDB.connect();
//   });

//   afterAll((done) => {
//       mongoDB.disconnect(done);
//   });
// });

// describe('test the whole server ', () => {
//   test('should express server start', () => {
//     require('../index');
//     expect(useDisableSpy).toHaveBeenCalledWith('');
//     expect(useSpy).toHaveBeenCalledWith(router);
//     expect(listenSpy).toHaveBeenCalled();
//   });
// });
