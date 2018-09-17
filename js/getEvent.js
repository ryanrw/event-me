let html = (data) => (`
  <div class="col-md-6 col-lg-3 my-3">
    <div class="card w-100">
      <a href="event.php?title=${data.title}">
        <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/conf-62008.appspot.com/o/event%2Fconf_Event1.jpg?alt=media&token=2fd08f41-ca53-4c94-adfa-64dcb1da69b6">
      </a>
      <div class="card-body">
        <h5>${data.title}</h5>
        <p>${data.date}</p>
        <p>${data.place}</p>
        <a href="event.php?title=${data.title}" class="btn btn-primary">View event</a>
      </div>
    </div>
  </div>
`)

let comingSoon = `
  <div class="col-md-6 col-lg-3 my-3">
    <div class="card w-100">
      <div class="card-body">
        <h5>Coming soon..</h5>
        <p>wait for more event</p>
      </div>
    </div>
  </div>
`

$(document).ready(() => {
  $.post('php/all-event.php', (data) => {
    let list = JSON.parse(data)
    list.forEach((event, index) => {

      $('#event').append(html(event))

      if (index + 1 == list.length) {
        $('#event').append(comingSoon)
      }
    })
  })
})