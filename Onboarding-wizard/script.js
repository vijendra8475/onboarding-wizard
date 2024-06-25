var arr = document.querySelectorAll('.page');

var productinfo = {
    name:"",
    discription : "",
    type : "",
    category : "",
    sub_category: "",
    url : "",
    sku : false,
    skucode: "",
    gstenclusive : false,
    netprice: "",
    leastprice: "",
    discountprice : "",
    gstrate : "",
    shippingcharges : "",
    stocklevel : ""
}
var storeinfo = [
    name = "",
    logo = "",
    theme = "",
    title = "",
    addsupportdetails = false,
    supportemail = "",
    supportphoneno = ""
]

var flag = 0
console.log(arr);


document.querySelectorAll('.apply-button button').forEach(function(val){

        val.addEventListener("click",function(dets){
            storeinfo.theme = dets.target.classList[0];
            console.log(dets.target.classList[0])
    
    
            document.querySelectorAll(".apply-button button").forEach(function(button){
                if(storeinfo.theme != button.classList[0]){
                    button.style.backgroundColor = 'rgb(104, 185, 235)';
                    button.style.color = 'white';
                    button.style.border = 'none'
                    button.innerHTML = 'Apply';
                }
                else{
                    button.style.backgroundColor = 'white';
                    button.style.color = 'black';
                    button.style.border = '1px solid gray'
                    button.innerHTML = 'Applied';
                }
            })
        })
})

arr.forEach(function(val,idx){
    if(flag == idx){
        val.style.display = "inline-flex";
    }
    else{
        val.style.display = "none";
    }
})

console.log(arr.length);


// Get all pages
const pages = document.querySelectorAll('.page');

// Set current page to 0
let currentPage = 0;

// Add event listeners to next and previous buttons
document.querySelectorAll('.next').forEach((button) => {
  button.addEventListener('click', () => {
    // Show next page
    if(currentPage < pages.length-1)
    {
        currentPage++;
        showPage(currentPage);
    }
  });
});

document.querySelectorAll('.previous').forEach((button) => {
  button.addEventListener('click', () => {
    // Show previous page
    currentPage--;
    showPage(currentPage);
  });
});

// Function to show a specific page
function showPage(pageNumber) {
  // Hide all pages
  pages.forEach((page) => {
    page.style.display = 'none';
  });

  // Show the selected page
    if(pageNumber != 0){
        pages[pageNumber].style.display = 'block';
    }
    else{
        pages[pageNumber].style.display = 'inline-flex';
    }
    if(pageNumber == arr.length-1){
        pages[pageNumber].style.display = 'flex';
        pages[pageNumber].style.color = 'white';

    }
    console.log(pageNumber,arr.length-1)
}


// Show the first page by default
var pageNumber = 0;
showPage(pageNumber);

var type = document.querySelector(".product-type")
console.log(type);

// taking input of product type
var producttype = document.querySelector(".input-product-type");
producttype.addEventListener("input", function(){
    productinfo.type = producttype.value;
});

// taking input of product subcategory
var productcat = document.querySelector(".input-product-category");
productcat.addEventListener("input", function(){
    productinfo.category = productcat.value;
});

// taking input of product sub-category
var productsubcat = document.querySelector(".input-product-sub-category");
productsubcat.addEventListener("input", function(){
    productinfo.sub_category = productsubcat.value;
});

// taking input of product name
var productname = document.querySelector(".input-product-name");
productname.addEventListener("input",function(){
    productname.addEventListener("input", function() {
        document.querySelector(".theme-container .product-name").innerHTML = productname.value;
        if (productname.value !== "") {
            document.querySelector(".theme-container .product-name").style.backgroundColor = "white";
            document.querySelector(".theme-container .product-name").innerHTML = productname.value;
            productinfo.name = productname.value;
        } else {
            document.querySelector(".theme-container .product-name").style.backgroundColor = "#8f8e8e76";
        }
    });
});

// taking input of product discription
var productdiscription = document.querySelector(".input-product-discription");
productdiscription.addEventListener("input", function(){
    productdiscription.addEventListener("input", function() {
        document.querySelector(".theme-container .product-name").innerHTML = productname.value;
        if (productdiscription.value !== "") {
            document.querySelector(".theme-container .product-discription").style.backgroundColor = "white";
            document.querySelector(".theme-container .product-discription").innerHTML = productdiscription.value;
            productinfo.discription = productdiscription.value;
        } else {
            document.querySelector(".theme-container .product-discription").innerHTML = "";
            document.querySelector(".theme-container .product-discription").style.backgroundColor = "#8f8e8e76";
        }
    });
    
});

//taking input of product image
var productimage = document.querySelector(".input-product-image");
productimage.addEventListener("change", function(){
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.querySelector(".theme-container .product-image");
        output.src = reader.result;
        productinfo.url = reader.result;
    };
    reader.readAsDataURL(this.files[0]);
});

// taking input of about sku
var productsku = document.querySelector(".input-sku");
productsku.addEventListener("change",function(){
    if(productsku.checked){
        document.querySelector(".input-sku-code").style.display = "block";
        productinfo.sku = true;

        var productskucode = document.querySelector(".input-sku-code");
        productskucode.addEventListener("input",function(){
            productinfo.skucode = productskucode.value;
        });
    }
    else{
        document.querySelector(".input-sku-code").style.display = "none";
        productinfo.sku = false;
    }
})

// taking input of gstinclusive
var gstinclusive = document.querySelector(".gstinclusive");
gstinclusive.addEventListener("change",function(){
    if(productsku.checked){
        productinfo.gstinclusive = true;
    }
    else{
        productinfo.gsteinclusive = false;
    }
})

// taking input of product Net Price
var productnetprice = document.querySelector(".input-net-price");
productnetprice.addEventListener("input",function(){
    productinfo.netprice = productnetprice.value;
});

// taking input of product Least Price
var productleastprice = document.querySelector(".input-least-price");
productleastprice.addEventListener("input",function(){
    productinfo.leastprice = productleastprice.value;
});

// taking input of product Discount Price
var productdiscountprice = document.querySelector(".input-discount-price");
productdiscountprice.addEventListener("input",function(){
    productinfo.discountprice = productdiscountprice.value;
});

//  taking input of Product GST Rate
var productgstrate = document.querySelector(".input-gst-rate");
productgstrate.addEventListener("input",function(){
    productinfo.gstrate = productgstrate.value;
});

// taking input of Product Shipping Charges
var productshippingcharges = document.querySelector(".input-shipping-charges");
productshippingcharges.addEventListener("input",function(){
    productinfo.shippingcharges = productshippingcharges.value;
});

// taking info of product stock level
var productstocklevel = document.querySelector(".input-stock-level");
productstocklevel.addEventListener("input",function(){
    productinfo.stocklevel = productstocklevel.value;
});

// taking input of store name
var storename = document.querySelector(".input-store-name");
storename.addEventListener("input",function(){
    storeinfo.name = storename.value;
    document.querySelector(".store-name-preview").innerHTML = storename.value
});

// takign input of sotre title
var storetitle = document.querySelector(".input-store-title");
storetitle.addEventListener("input",function(){
    storeinfo.title = storetitle.value;
    document.querySelector(".store-title-preview").innerHTML = storetitle.value
});

//taking input of store logo
var storelogo = document.querySelector(".input-store-logo");
storelogo.addEventListener("input",function(){ 
    let reader = new FileReader();
    reader.onload = function(){
        let output = document.querySelector(".store-logo-preview");
        output.src = reader.result;
        storeinfo.logo = reader.result;
    };
    reader.readAsDataURL(this.files[0]);

});

// Add support details or not
var addsupportdetails = document.querySelector(".add-support-details-checkbox");
addsupportdetails.addEventListener("change",function(){
    if(addsupportdetails.checked){
        storeinfo.addsupportdetails = true;
        document.querySelector(".support-details-text").style.display = "block";
        document.querySelector(".support-email").style.display = "block";
        document.querySelector(".support-phoneno").style.display = "block";
        document.querySelector(".store-support-e-mail").style.display = "block";
        document.querySelector(".store-support-phone-no").style.display = "block";
        
        var productname = document.querySelector(".input-product-name");

        var storesupportemail = document.querySelector(".input-support-email");
        var storesupportphoneno = document.querySelector(".input-support-phoneno")

            storesupportemail.addEventListener("input",function(){
                storesupportemail.addEventListener("input", function() {
                    document.querySelector(".theme-container .product-name").innerHTML = productname.value;
                    if (storesupportemail.value !== "") {
                        document.querySelector(".store-support-e-mail").style.backgroundColor = "white";
                        document.querySelector(".store-support-e-mail").innerHTML = storesupportemail.value;
                        storeinfo.supportemail = storesupportemail.value;
                    } else {
                        document.querySelector(".store-support-e-mail").innerHTML = "";
                        document.querySelector(".store-support-e-mail").style.backgroundColor = "#8f8e8e76";
                    }
                });
            });


            storesupportphoneno.addEventListener("input",function(){
                storesupportphoneno.addEventListener("input", function() {
                    document.querySelector(".theme-container .product-name").innerHTML = productname.value;
                    if (storesupportemail.value !== "") {
                        document.querySelector(".store-support-phone-no").style.backgroundColor = "white";
                        document.querySelector(".store-support-phone-no").innerHTML = storesupportphoneno.value;
                        storeinfo.supportphoneno = storesupportphoneno.value;
                    } else {
                        document.querySelector(".store-support-phone-no").innerHTML = "";
                        document.querySelector(".store-support-phone-no").style.backgroundColor = "#8f8e8e76";
                    }
                });
            });
        } else {
            storeinfo.addsupportdetails = false;
            document.querySelector(".support-details-text").style.display = "none";
            document.querySelector(".store-support-e-mail").style.display = "none";
            document.querySelector(".store-support-phone-no").style.display = "none";
            document.querySelector(".support-email").style.display = "none";
            document.querySelector(".support-phoneno").style.display = "none";
        }
});

