const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  
  console.log(fareDoubler(10)); 
  
  const firstTwoDrivers = selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo']);
  
  console.log(firstTwoDrivers); 

  function fareTripler(fare) {
    return fare * 3;
  }
  
  function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
  }
  
  
  