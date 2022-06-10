const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = []
selectingDrivers[0] = returnFirstTwoDrivers
selectingDrivers[1] = returnLastTwoDrivers

const createFareMultiplier = function (amt){
    return function(fare){
        return amt * fare
    }
}

const fareDoubler = function (fare){
    return fare * 2

}

const fareTripler = function (fare){
    return fare * 3
}

const selectDifferentDrivers = function (drivers, func){
   if (func === returnFirstTwoDrivers){
    return drivers.slice(0, 2)
   }else if (func === returnLastTwoDrivers){
    return drivers.slice(-2)
   }
}