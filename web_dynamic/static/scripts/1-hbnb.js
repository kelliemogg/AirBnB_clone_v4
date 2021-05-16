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
      $('#checked_list').html('&nbsp;');
    } else { amenString = amenList.join(', ');
        $('#checked_list').text(amenString); }
  });
});
