 
function getCoordinates() {
  return new Promise(function(resolve, reject) {
  navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
 
export async function getLocation(){
  try {
    const position = await getCoordinates();
    const latitude =  position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordinates = [latitude, longitude]
    return coordinates
  } catch{
    const coordinates = [50.088,14.4208]
    return coordinates

  }
  
}


