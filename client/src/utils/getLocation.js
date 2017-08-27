export default function getLocation() {
  return new Promise((resolve, reject) => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = [position.coords.latitude, position.coords.longitude]

        resolve(pos);
      });
    } catch (e) {
      reject('localStorage not suport in you browser!');
    }
  })
}