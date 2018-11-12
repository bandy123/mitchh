const fullYearTuition = 7390;
const fullYearTechnologyFee = 568;
const fullYearShippingFee = 247;
const semesterTutitoion = fullYearTuition / 2;
const semesterTechnologyFee = fullYearTechnologyFee / 2;
const semestrerShippingFee = fullYearShippingFee / 2;
const wrapper = document.querySelector("#absolute");
const selectTag = document.querySelector(".registration_type");
function handleChange(){
  const selected = selectTag.selectedIndex;
  let HTML;
  if(selected === 0){
    HTML = `Tuition<span id="widget_1_price">$${fullYearTuition.toFixed(2)}</span><br />
        Technology Fee<span id="widget_2_price">$${fullYearTechnologyFee.toFixed(2)}</span><br />
        Shipping Fee: <span id="shipping_price">$${fullYearShippingFee.toFixed(2)}</span><br />
        <b>Total: <span id="total_price">$${(fullYearShippingFee + fullYearTechnologyFee + fullYearTuition).toFixed(2)}</span></b>`;
  }else{
    HTML = `Tuition<span id="widget_1_price">$${semesterTutitoion.toFixed(2)}</span><br />
        Technology Fee<span id="widget_2_price">$${semesterTechnologyFee.toFixed(2)}</span><br />
        Shipping Fee: <span id="shipping_price">$${semestrerShippingFee.toFixed(2)}</span><br />
        <b>Total: <span id="total_price">$${(semesterTutitoion + semesterTechnologyFee + semestrerShippingFee).toFixed(2)}</span></b>`;
  }
  
  wrapper.innerHTML = HTML;
}

handleChange();