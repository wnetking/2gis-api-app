export default {
  save(data) {
    return fetch('/api/marker-save', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    });
  },
  getAll() {
    return fetch('/api/markers', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "GET"
    }).then(res => { return res.json() })
  }
}