$(document).ready(() => {
  let i = 2;
  $(".add-witness").click(() => {
    i++;
    $(".witness-form").append(`<h4 class="section-head">Witness - ${i}</h4>
    <div class="address-container witness">
      <input type="text" class="line1" placeholder="address line" />
      <input type="text" class="line1" placeholder="address line" />
      <input type="text" class="line1" placeholder="address line" />
      <input type="text" class="line1" placeholder="address line" />
      <input type="text" class="line1" placeholder="address line" />
      <input type="text" class="line1" placeholder="address line" />
    </div>`);
  });

  $("#next").click(() => {
    
  });
});
