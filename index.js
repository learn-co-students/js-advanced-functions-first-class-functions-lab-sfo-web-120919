// Code your solution in this file!


const returnFirstTwoDrivers = function(arrayOfDrivers) {
   const firstTwoDriversArr = arrayOfDrivers.slice(0,2)
   return firstTwoDriversArr
};

const returnLastTwoDrivers = function(arrayOfDrivers) {
   //return last two drivers
   const lastTwoDriversArr = arrayOfDrivers.slice(-2);
   return lastTwoDriversArr;
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(multiplier) {
  return function (fare){
    return fare * multiplier 
  }   
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}

