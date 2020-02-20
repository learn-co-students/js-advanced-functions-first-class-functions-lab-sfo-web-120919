// Code your solution in this fil

    const returnFirstTwoDrivers =  function(drivers){
        return drivers.slice(0,2)
    }

    const returnLastTwoDrivers =  function(drivers){
        return drivers.slice(-2)
    }

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

    const createFareMultiplier = function(multiplyValue) {
        return function (fare){
            return multiplyValue * fare

        }
    }

    const fareDoubler = createFareMultiplier(2);

    const fareTripler = createFareMultiplier(3);
    
    const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
      return returnFirstTwoDrivers(drivers);
    }; 