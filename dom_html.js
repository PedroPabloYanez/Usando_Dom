//---------------BODY SELECCIONADO---------------
var body = document.getElementsByTagName("body")[0];
body.className = 'bg-light';
var container = document.createElement("div");
container.className = "container";
body.appendChild(container);

//---------------ENCABEAZDO---------------
let header = document.createElement("div");
header.className = "py-5 text-center";
container.appendChild(header);

//---------------INICIO DEL HEADER
createImg(header, "d-block mx-auto mb-4", "Bootstrap.svg", 72, 72);
createDivHeader(header, "h2", "Checkout form");
createDivHeader(header, "p", "Below is an example form built entirely with Bootstraps form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.", "lead")


function createImg(parent, klass, src, width, height) {
    let img = document.createElement("img");
    img.className = klass;
    img.src = src;
    img.width = width;
    img.height = height;
    parent.appendChild(img)
}

function createDivHeader(parent, tag, text, klass) {
    let element = document.createElement(tag);
    element.appendChild(document.createTextNode(text));
    if (klass == undefined) {
        parent.appendChild(element)

    } else {
        element.className = klass;
        parent.appendChild(element)

    }
}
//---------------FIN DEL HEADER


//---------------BILLING - row

let row_principal = constructorDivs("div", "row");
container.appendChild(row_principal);

let div_cart = constructorDivs("div", "col-md-4 order-md-2 mb-4");
row_principal.appendChild(div_cart);

let div_billing = constructorDivs("div", "col-md-8 order-md-1");
row_principal.appendChild(div_billing);

// inicio div_cart
// create h4

let h4 = constructorDivs("h4", "d-flex justify-content-between align-items-center mb-3");
div_cart.appendChild(h4);

let span_1 = constructorDivs("span", "text-muted", "Your cart");
h4.appendChild(span_1);
let span_2 = constructorDivs("span", "badge badge-secondary badge-pill", 3);
h4.appendChild(span_2);

let ul = constructorDivs("ul", "list-group mb-3");
div_cart.appendChild(ul);

let li_1 = constructorLis("", "text-muted", "$12", "Product name", "text-muted", "Brief description")
ul.appendChild(li_1)

let li_2 = constructorLis("", "text-muted", "$8", "Second name", "text-muted", "Brief description2")
ul.appendChild(li_2)

let li_3 = constructorLis("", "text-muted", "$5", "Third name", "text-muted", "Brief description3")
ul.appendChild(li_3)

let li_4 = constructorLis("text-success", "text-success", "-$5", "Promo code", "", "EXAMPLECODE")
ul.appendChild(li_4)

let li_5 = constructorDivs("li", "list-group-item d-flex justify-content-between lh-condensed")
let span_li5 = constructorDivs("span", "", "Total(USD)")
let strong_li5 = constructorDivs("strong", "", "$20")
li_5.appendChild(span_li5)
li_5.appendChild(strong_li5)
ul.appendChild(li_5)


// Create form inside div_car

let form = constructorDivs("form", "card p-2")
div_cart.appendChild(form)

let input_group = constructorDivs("div", "input-group")
form.appendChild(input_group)

let input_1 = constructorInputs("form-control", "text", "Promo code", false)
input_group.appendChild(input_1);

let div_button = constructorDivs("div", "input-group-append")
input_group.appendChild(div_button);

let but = constructorBotones("submit", "btn btn-secondary", "Redeem")
div_button.appendChild(but)

// FIN DIV CART


function constructorBotones(type, klass, text) {
    let button = document.createElement("button")
    button.className = klass
    button.type = type
    button.appendChild(document.createTextNode(text))
    return button
}

function constructorInputs(klass, type, placeholder, required, id, name) {
    let input = document.createElement("input");
    input.className = klass;
    input.type = type
    id == undefined ? "" : input.id = id
    name == undefined ? "" : input.name = name
    if (required && placeholder  == true) {
        input.required = true
        input.placeholder = true
        return input
    } else {
        return input
    }
}


function constructorLis(klass_div, klass_span, text_span, text_h6, klass_small, text_small) {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between lh-condensed";

    let div = constructorDivs("div", klass_div);
    li.appendChild(div);

    let h6 = constructorDivs("h6", "my-0", text_h6);
    div.appendChild(h6)
    let small = constructorDivs("small", klass_small, text_small);
    div.appendChild(small);

    let span = constructorDivs("span", klass_span, text_span);
    li.appendChild(span);

    return li
}

function constructorDivs(tag, klass, text) {
    let div = document.createElement(tag);
    div.className = klass;
    if (text == undefined) {
        return div
    } else {
        div.appendChild(document.createTextNode(text));
        return div
    }
}

// INICIO Billing

function constructorLabels(klass,text, forr){
    let label = document.createElement("label");
    label.setAttribute("for", forr)
    label.appendChild(document.createTextNode(text));
    klass == undefined ? "" : label.className = klass
    return label
}

let h4_bill = constructorDivs("h4", "mb-3", "Billing Addres");
div_billing.appendChild(h4_bill);

let form_bill = constructorDivs("form", "needs-validation");
div_billing.appendChild(form_bill);

let row_1 = constructorDivs("div", "row");
form_bill.appendChild(row_1);

    let div1_row1 = constructorDivs("div", "col-md-6 mb-3");
    row_1.appendChild(div1_row1)
    

    // inicio contenido div1 del row1

        let label_div1 = constructorLabels("firstname", "First name")
        div1_row1.appendChild(label_div1);
        let input_div1 = constructorInputs("form-control", "text", "", true, "firstName")
        div1_row1.appendChild(input_div1);
        let feedback_div1 = constructorDivs("div", "invalid-feedback", "Valid first name is required.")
        div1_row1.appendChild(feedback_div1)

    // fin contenido div1 del row1

    let div2_row1 = constructorDivs("div", "col-md-6 mb-3");
    row_1.appendChild(div2_row1)

    // inicio contenido div2 del row1

        let label_div2 = constructorLabels("firstname", "Last name")
        div2_row1.appendChild(label_div2);
        let input_div2 = constructorInputs("form-control", "text", "", true, "lastName")
        div2_row1.appendChild(input_div2);
        let feedback_div2 = constructorDivs("div", "invalid-feedback", "Valid first name is required.")
        div2_row1.appendChild(feedback_div2)

    // fin contenido div1 del row1

// inicio username input    

let div_username = constructorDivs("div", "mb-3")
form_bill.appendChild(div_username)

let label_username = constructorLabels("username", "Username")
div_username.appendChild(label_username)

let div_inputgroup_username = constructorDivs("div", "input-group")
div_username.appendChild(div_inputgroup_username)

let prepend_username = constructorDivs("div", "input-group-prepend")
div_inputgroup_username.appendChild(prepend_username)

    let span_prepend = constructorDivs("span", "input-group-text", "@")
    prepend_username.appendChild(span_prepend)

let input_username = constructorInputs("form-control", "text", "Username", true, "username")
div_inputgroup_username.appendChild(input_username)

let invalid_username = constructorDivs("div", "invalid-feedback", " Please enter a valid email address for shipping updates.")
div_inputgroup_username.appendChild(invalid_username)


//  fin username input


// inicio email(optional)

let div_email = constructorDivs("div", "mb-3")
form_bill.appendChild(div_email)

let label_email = constructorLabels("email", "Email ")
div_email.appendChild(label_email)
    let span_label_email = constructorDivs("span", "text-muted", "(Optional)")
    label_email.appendChild(span_label_email)

let  input_email = constructorInputs("form-control", "email",  "you@example.com", false, "email")
div_email.appendChild(input_email)

let feedback_email = constructorDivs("div", "invalid-feedback", "Please enter a valid email address for shipping updates");
div_email.appendChild(feedback_email)
//  fin email (optional)

// inicio Address

let div_address = constructorDivs("div", "mb-3")
form_bill.appendChild(div_address)

let label_address = constructorLabels("address", "Address ")
div_address.appendChild(label_address)

let  input_address = constructorInputs("form-control", "email",  "123 Main St", true, "address")
div_address.appendChild(input_address)

let feedback_address = constructorDivs("div", "invalid-feedback", "Please enter your shipping email address for shipping updates");
div_address.appendChild(feedback_address)

// fin Address

// inicio Address2

let div_address2 = constructorDivs("div", "mb-3")
form_bill.appendChild(div_address2)

let label_address2 = constructorLabels("address", "Address2 ")
div_address2.appendChild(label_address2)
    let span_label_address2 = constructorDivs("span", "text-muted", "(Optional)")
    label_address2.appendChild(span_label_address2)

let  input_address2 = constructorInputs("form-control", "email",  "123 street", false, "email")
div_address2.appendChild(input_address2)

let feedback_address2 = constructorDivs("div", "invalid-feedback", "Please enter a valid email address for shipping updates");
div_address2.appendChild(feedback_address2)

// fin Address2


let row_country = constructorDivs("div", "row")
form_bill.appendChild(row_country)


function constructorSelects(klass, id, required, options){
    let select = document.createElement("select")
    select.id=id 
    select.className = klass
    required==true ? select.required=true : ""
    
    if(options.length > 0){
        console.log("mayor a 0")
        for(var i=0; i<options.length; i++){
            select.appendChild(constructorOptions(options[i]))
        }
    }
    
    console.log(options)
    return select
}

function constructorOptions(value){
    let option = document.createElement("option")
    option.appendChild(document.createTextNode(value))
    return option
}

// inicio div country
let div_country = constructorDivs("div", "col-md-5 mb-3")
row_country.appendChild(div_country)

let label_country = constructorLabels("country", "Country")
div_country.appendChild(label_country)

let select_country = constructorSelects("custom-select d-block w-100", "country", true, ["Choose...", "United States"])
div_country.appendChild(select_country)

let invalid_country = constructorDivs("div", "invalid-feedback", "Please select a valid country.")
div_country.appendChild(invalid_country)
// fin div country


// inicio div state
let div_state = constructorDivs("div", "col-md-4 mb-3")
row_country.appendChild(div_state)

let label_state = constructorLabels("country", "Country")
div_state.appendChild(label_state)

let select_state = constructorSelects("custom-select d-block w-100", "country", true, ["Choose...", "California"])
div_state.appendChild(select_state)

let invalid_state = constructorDivs("div", "invalid-feedback", "Please provide a valid state. .")
div_state.appendChild(invalid_state)
// fin div state

// inicio div zip
let div_zip = constructorDivs("div", "col-md-3 mb-3")
row_country.appendChild(div_zip)

let label_zip = constructorLabels("zip", "Zip")
div_zip.appendChild(label_zip)

let input_zip = constructorInputs("form-control", "text", "", "true", "zip")
div_zip.appendChild(input_zip)

let invalid_zip = constructorDivs("div", "invalid-feedback", "Zip code required.")
div_zip.appendChild(invalid_zip)
// fin div zip


// Inicio CheckBox

let hr_1 = constructorDivs("hr", "mb-4");
form_bill.appendChild(hr_1);

    let div_checkbox = constructorDivs("div", "custom-control custom-checkbox");
    form_bill.appendChild(div_checkbox);
    let input_checkbox = constructorInputs("custom-control-input", "checkbox", false, false, "same-address", "")
    div_checkbox.appendChild(input_checkbox);
    let label_checkbox = constructorLabels("custom-control-label", "Shipping address is the same as my billing address", "same-address");
    div_checkbox.appendChild(label_checkbox); 


    let div_checkbox2 = constructorDivs("div", "custom-control custom-checkbox");
    form_bill.appendChild(div_checkbox2);
    let input_checkbox2 = constructorInputs("custom-control-input", "checkbox", false, false, "save-info", "")
    div_checkbox2.appendChild(input_checkbox2);
    let label_checkbox2 = constructorLabels("custom-control-label", "Save this information for next time", "save-info");
    div_checkbox2.appendChild(label_checkbox2); 

let hr_2 = constructorDivs("hr", "mb-4");
form_bill.appendChild(hr_2);

// Fin CheckBox


// Inicio Payment

let h4_payment = constructorDivs("h4", "mb-3", "Payment")
form_bill.appendChild(h4_payment);

    let div_payment = constructorDivs("div", "d-block my-3");
    form_bill.appendChild(div_payment);

        let div_payment_label = constructorDivs("div", "custom-control custom-radio");
        div_payment.appendChild(div_payment_label);
            let input_payment = constructorInputs("custom-control-input", "radio", false, "", "credit", true);
            div_payment_label.appendChild(input_payment);
            let label_payment = constructorLabels("custom-control-label", "Credit card", "credit");
            div_payment_label.appendChild(label_payment);

        let div_payment_label2 = constructorDivs("div", "custom-control custom-radio");
        div_payment.appendChild(div_payment_label2);
            let input_payment2 = constructorInputs("custom-control-input", "radio", false, "",  "debit", true);
            div_payment_label2.appendChild(input_payment2);
            let label_payment2 = constructorLabels("custom-control-label", "Debit card", "debit");
            div_payment_label2.appendChild(label_payment2);

        let div_payment_label3 = constructorDivs("div", "custom-control custom-radio");
        div_payment.appendChild(div_payment_label3);
            let input_payment3 = constructorInputs("custom-control-input", "radio", false, "",  "paypal", true);
            div_payment_label3.appendChild(input_payment3);
            let label_payment3 = constructorLabels("custom-control-label", "PayPal", "paypal");
            div_payment_label3.appendChild(label_payment3);

// Fin Payment


// Inicio Name on card - Credit card number

let row_name_card = constructorDivs("div", "row");
form_bill.appendChild(row_name_card);

    let div_row_name_card = constructorDivs("div", "col-md-6 mb-3");
    row_name_card.appendChild(div_row_name_card)
    

    // inicio contenido div del row

        let label_div_name_card = constructorLabels("firstname", "First name")
        div_row_name_card.appendChild(label_div_name_card);
        let input_div_name_card = constructorInputs("form-control", "text", "", true, "firstName")
        div_row_name_card.appendChild(input_div_name_card);
        let small_name_card = constructorDivs("small", "text-muted", "Full name as displayed on card");
        div_row_name_card.appendChild(small_name_card);

            let feedback_div_name_card = constructorDivs("div", "invalid-feedback", "Name on card is required.")
            div_row_name_card.appendChild(feedback_div_name_card);

    // fin contenido div del row

    let div2_row_name_card = constructorDivs("div", "col-md-6 mb-3");
    row_name_card.appendChild(div2_row_name_card)

    // inicio contenido div2 del row1

        let label2_div_name_card = constructorLabels("firstname", "Last name")
        div2_row_name_card.appendChild(label2_div_name_card);
        let input2_div_name_card = constructorInputs("form-control", "text", "", true, "lastName")
        div2_row_name_card.appendChild(input2_div_name_card);
        let feedback2_div_name_card = constructorDivs("div", "invalid-feedback", "Credit card number is required.")
        div2_row_name_card.appendChild(feedback2_div_name_card);
        

    // fin contenido div2 del row2

// Fin Name on card - Credit card number


// Inicio Expiration - CVV

let row_expiration = constructorDivs("div", "row");
form_bill.appendChild(row_expiration);

    let div_row_expiration = constructorDivs("div", "col-md-3 mb-3");
    row_expiration.appendChild(div_row_expiration)
    

    // inicio contenido div del row

        let label_div_expiration = constructorLabels("firstname", "Expiration", "cc-number")
        div_row_expiration.appendChild(label_div_expiration);
        let input_div_expiration = constructorInputs("form-control", "text", "", false, "fcc-number")
        div_row_expiration.appendChild(input_div_expiration);
        let small_expiration = constructorDivs("small", "text-muted", "");
        div_row_expiration.appendChild(small_expiration);

            let feedback_div_expiration = constructorDivs("div", "invalid-feedback", "Expiration date required.")
            div_row_expiration.appendChild(feedback_div_expiration);

    // fin contenido div del row

    let div2_row_expiration = constructorDivs("div", "col-md-3 mb-3");
    row_expiration.appendChild(div2_row_expiration)

    // inicio contenido div2 del row1

        let label2_div_expiration = constructorLabels("firstname", "CVV")
        div2_row_expiration.appendChild(label2_div_expiration);
        let input2_div_expiration = constructorInputs("form-control", "text", "", false, "cc-number")
        div2_row_expiration.appendChild(input2_div_expiration);
        let feedback2_div_expiration = constructorDivs("div", "invalid-feedback", "Security code required.")
        div2_row_expiration.appendChild(feedback2_div_expiration);
        

    // fin contenido div2 del row2

// Fin Expiration - CVV

let hr_end = constructorDivs("hr", "mb-4")
form_bill.appendChild(hr_end);


let button_checkout = constructorBotones("submit", "btn btn-primary btn-lg btn-block", "Continue to checkout");
form_bill.appendChild(button_checkout);


// Inicio de Footer

let footer = constructorDivs('footer', 'my-5 pt-5 text-muted text-center text-small');
container.appendChild(footer);

    let p_footer = constructorDivs('p', 'mb-1', '© 2017-2019 Company Name');
    footer.appendChild(p_footer);

    let ul_footer = constructorDivs('ul', 'list-inline');
    footer.appendChild(ul_footer);

        let li_footer = constructorDivs('li', 'list-inline-item');

            li_footer.appendChild(constructorA('a', '#', 'Privacy'));
            ul_footer.appendChild(li_footer);

            li_footer.appendChild(constructorA('a', '#', ' Terms'));
            ul_footer.appendChild(li_footer);

            li_footer.appendChild(constructorA('a', '#', ' Support'));
            ul_footer.appendChild(li_footer);

// Fin de Footer

function constructorA(tag, href, text){

  let a = document.createElement('a')
  a.href = href
  a.appendChild(document.createTextNode(text))
  return a
}







