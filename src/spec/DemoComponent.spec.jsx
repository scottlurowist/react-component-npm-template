
// We need React to run the tests.
import React from 'react';
import { shallow } from "enzyme";

// The component that we are testing...
import DemoComponent from '../DemoComponent';




describe('Some DemoComponent Tests', () => {
    test(' must do X', () => {
        const wrapper = shallow(<DemoComponent />);

        expect(wrapper).not.toBeNull();
    });
});
// describe('The DateTimeDisplay component must display the correct year',
//   () => {

//   test(' when the input year is 1970.', () => {
//     const inputDateTimeString = '1970-10-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'October 9, 1970 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })

//   test(' when the input year is 2021.', () => {
//     const inputDateTimeString = '2021-10-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'October 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   }) 
// })


// describe('The DateTimeDisplay component must display the correct month',
//   () => {

//   test(' when the input month "01" for January.', () => {
//     const inputDateTimeString = '1970-01-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'January 9, 1970 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })

//   test(' when the input month "02" for February.', () => {
//     const inputDateTimeString = '2021-02-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'February 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' when the input month "03" for March.', () => {
//     const inputDateTimeString = '2021-03-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'March 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })
  
  
//   test(' when the input month "04" for April.', () => {
//     const inputDateTimeString = '2021-04-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'April 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' when the input month "05" for May.', () => {
//     const inputDateTimeString = '2021-05-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'May 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' when the input month "06" for June.', () => {
//     const inputDateTimeString = '2021-06-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'June 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' when the input month "07" for Jul.', () => {
//     const inputDateTimeString = '2021-07-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'July 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' when the input month "08" for August.', () => {
//     const inputDateTimeString = '2021-08-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'August 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })
  
  
//   test(' when the input month "09" for September.', () => {
//     const inputDateTimeString = '2021-09-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'September 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })
  
  
//   test(' when the input month "10" for October.', () => {
//     const inputDateTimeString = '2021-10-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'October 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' when the input month "11" for November.', () => {
//     const inputDateTimeString = '2021-11-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'November 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' when the input month "12" for Decemeber.', () => {
//     const inputDateTimeString = '2021-12-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'December 9, 2021 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })
// })


// describe('The DateTimeDisplay component must display the correct day', () => {

//   test(' and when the input day is 01 the leading zero is removed.', () => {
//     const inputDateTimeString = '1970-10-01T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'October 1, 1970 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' and when the input day is 09 the leading zero is removed.', () => {
//     const inputDateTimeString = '1970-10-09T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'October 9, 1970 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' when the input day is 10.', () => {
//     const inputDateTimeString = '1970-10-10T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'October 10, 1970 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' when the input day is 31.', () => {
//     const inputDateTimeString = '1970-10-31T16:40:13.579Z'
//     const expectedDateTimeDisplayString = 'October 31, 1970 4:40pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })
// })


// describe('The DateTimeDisplay component must display the correct hour',
//   () => {

//   test(' when the input hour is 00 then the time is 12am.', () => {
//     const inputDateTimeString = '1970-10-01T00:00:00.000Z'
//     const expectedDateTimeDisplayString = 'October 1, 1970 12:00am UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' and when the input hour is 01 the time is 1am.', () => {
//     const inputDateTimeString = '1970-10-01T01:00:00.000Z'
//     const expectedDateTimeDisplayString = 'October 1, 1970 1:00am UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' and when the input hour is 09 the time is 9am.', () => {
//     const inputDateTimeString = '1970-10-01T09:00:00.000Z'
//     const expectedDateTimeDisplayString = 'October 1, 1970 9:00am UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' and when the input hour is 10 the time is 10am.', () => {
//     const inputDateTimeString = '1970-10-01T10:00:00.000Z'
//     const expectedDateTimeDisplayString = 'October 1, 1970 10:00am UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })


//   test(' and when the input hour is 12 the time is 10pm.', () => {
//     const inputDateTimeString = '1970-10-01T12:00:00.000Z'
//     const expectedDateTimeDisplayString = 'October 1, 1970 12:00pm UTC'
  
//     const actualDateTimeDisplayString =
//       shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
    
//     expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//   })
// })

// describe('The DateTimeDisplay component must display the correct minutes',
//   () => {

//     test(' when the input minutes are 00.', () => {
//       const inputDateTimeString = '1970-10-01T12:00:00.000Z'
//       const expectedDateTimeDisplayString = 'October 1, 1970 12:00pm UTC'
    
//       const actualDateTimeDisplayString =
//         shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
      
//       expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//     })


//     test(' when the input minutes are 30.', () => {
//       const inputDateTimeString = '1970-10-01T12:30:00.000Z'
//       const expectedDateTimeDisplayString = 'October 1, 1970 12:30pm UTC'
    
//       const actualDateTimeDisplayString =
//         shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
      
//       expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//     })


//     test(' when the input minutes are 59.', () => {
//       const inputDateTimeString = '1970-10-01T12:59:00.000Z'
//       const expectedDateTimeDisplayString = 'October 1, 1970 12:59pm UTC'
    
//       const actualDateTimeDisplayString =
//         shallow(<DateTimeDisplay dateTimeString={inputDateTimeString} />).text()
      
//       expect(actualDateTimeDisplayString).toEqual(expectedDateTimeDisplayString)  
//     })    
//  })
