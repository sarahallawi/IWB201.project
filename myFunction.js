// Function to toggle property details
function toggleDetails(button) {
 let row = button.parentElement.parentElement;
 let details = row.getElementsByTagName('td')[1];
 if (details.style.display === 'none' || details.style.display === '') {
 details.style.display = 'table-cell';
 button.textContent = 'إخفاء';
 } else {
 details.style.display = 'none';
 button.textContent = 'عرض';

 }

}

// Function to show form when a property is selected
function selectProperty(checkbox) {
 let form = document.getElementById('selected-property-form');
 if (checkbox.checked) {
 form.style.display = 'block';
 } else {
 form.style.display = 'none';
 }
}

// Function to validate form
function validateForm() {
 let nationalId = document.getElementById('national-id').value;
 let regexNationalId = /^[0-9]{11}$/;
 if (!regexNationalId.test(nationalId)) {
 alert('الرقم الوطني غير صالح');
   return false;

 }

}


var phonePattern = /((0)(93|94|95|96|98|99)([0-9]{7}))|((0)(92|95|96|97)([0-9]{7}))/;
if (!phonePattern.test(phone.value) && phone.value != "") {
    phone.classList.add("worong")
    alert("يرجى إدخال رقم هاتف صالح مع رمز البلد (مثال: 0931234567)");
    return false;
}

 let captchaInput = document.getElementById('captcha').value;
 if (captchaInput !== generatedCaptcha) {
 alert('الرمز غير صحيح');
 return false;
 }
{
  alert ('تم إرسال النموذج بنجاح');
 return true;
}
 

let generatedCaptcha = "";
function generateCaptcha() {
 let captcha = "";
 let characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 for (let i = 0; i < 6; i++) {
 Captcha += characters.charAt(Math.floor(Math.random() * characters.length));
 }
 generatedCaptcha = captcha;
 alert('الرمز هو: ' + captcha);
}



______________________________________________________


fetch('data.json')
.then(res=>res.json())
.then(data=>{
 handeldata(data);
})
function handeldata(flats)
{
const flat = document.getElementById("flats");
flats.forEach(myflat => {
    let flat1 = creatrow(myflat);
    let flatdetal= addDeta1(myflat);
    flat.appendChild(flat1);
    flat.appendChild(flatdetal);
    
});

}
 function creatrow(myflat)
{
    const row = document.createElement("tr");
    for(let i = 0; i<5; i++){
        const cell = document.createElement("td");
        row.appendChild(cell)
    }
    const radio=document.createElement("input");
    radio.setAttribute("type","radio");
    row.children[0].appendChild(radio);

    const chek=document.createElement("input");
    chek.setAttribute("type","checkbox");
    chek.onclick=function(){
      chek.parentElement.parentElement.nextElementSibling.classList.toggle("hid");
       }
    row.children[1].appendChild(chek);
    
    row.children[2].textContent=`${myflat.price}`;

    row.children[3].textContent=`${myflat.dital}`;

    row.children[4].textContent=`${myflat.city}`;

    
    
    return row;

}
//---------------------------------------------------
function addDeta1(myflat) {
    const row = document.createElement("tr");
    row.classList.add("hid")
    row.innerHTML = `
    <td colspan="5">
          <div class="info">
          
           <ul class="text">
           
           
           <li>الطابق:${myflat.floor}</li>
           <li>متوفر كراج:${myflat.gar}</li>
           <li>المنطقة:${myflat.area}</li>
           <li>مفروشة:${myflat.mafrosha} </li>
           <li>مساحة البلكون: ${myflat.masaha}</li>
           <li>الملكية:${myflat.have}</li>
          
        </ul>
        <div class="imges">
            <img src="${myflat.img1}" alt="">
            <img src="${myflat.img2}" alt="">
            <img src="${myflat.img3}" alt="">



        </div>

    </div>

</td>`


    return row;


}



