// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hq = 42; // Headquarters is on 42nd Street
    return Math.abs(someValue - hq);
  }


  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Reuse the blocks function
    return blocks * 264; // Convert blocks to feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start); // Distance in blocks
    return blocksTravelled * 264; // Convert blocks to feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Get distance in feet
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare
    } else {
      return 'cannot travel that far'; // Over 2500 feet
    }
  }
  