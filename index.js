

// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
} 
const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length - 2, drivers.length)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
     return (value) => value * num
 }

 const selectDifferentDrivers = function(drivers, f) {
     return f(drivers)
 }

const fareDoubler = (num) => createFareMultiplier(2)(num)

const fareTripler = (num) => createFareMultiplier(3)(num)

