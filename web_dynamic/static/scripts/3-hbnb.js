$(document).ready(function () {
// this is checking the status of our api
  $.get('http://0.0.0.0:5001/api/v1/status/', function (apiOK) {
    if (apiOK.status === "OK") {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available'); }
});

// this is our ajax function for live updates

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: '{}',
    success: function(data) {
      for(let i = 0; i < data.length; i++) {
// loops through all places returned
//this line grabs a place and then functions like it normally would
        const place = ['<div class="title_box">',
          '<h2>' + data[i].name + '</h2>',
          '<div class="price_by_night">' + data[i].price_by_night + '</div>',
          '</div>',
        '<div class="information">',
          '<div class="max_guest">' + data[i].max_guest + '</div>',
                '<div class="number_rooms">' + data[i].number_rooms + '</div>',
              '<div class="number_bathrooms">' + data[i].number_bathrooms + '</div>',
        '</div>',
        '<div class="user">',
                '<b>Owner:</b>' + data[i].first_name + ' ' + data[i].last_name,
              '</div>',
              '<div class="description">',
          ' + data[i].description,',
              '</div>'].join('\n');
      $('section.places').append(place);
    };
  }
});

// this displays only selected amenities
  let amenList = [];
  let value = '';
  let amenString = "";
  $('div.amenities ul li input').change(function () {
    if ($(this).is(':checked')) {
      value = $(this).attr('data-name');
      amenList.push(value);
    } else if (!$(this).is(':checked')) {
      del_value = $(this).attr('data-name');
      let index = amenList.indexOf(del_value);
      if (index !== -1) {
        amenList.splice(index, 1); }
    }
    if (amenList.length === 0) {
      $('#checked_list').text('&nbsp;');
    } else { amenString = amenList.join(', ');
        $('#checked_list').text(amenString); }
  });
});
