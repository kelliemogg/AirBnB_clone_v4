$(document).ready(function () {
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

        // this is checking the status of our api
        $.get('http://0.0.0.0:5001/api/v1/status/', function (apiOK) {
      if (apiOK.status === "OK") {
        $('DIV#api_status').addClass('available');
      } else { $('DIV#api_status').removeClass('available'); }
      });
  });
});
