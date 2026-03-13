
let fullImg = document.querySelector(".fullImg");
let focusedImg = document.querySelector("#focused_img");

function openFullImg(image) {
    fullImg.style.display = "flex";
    focusedImg.src = image
}

function closeFullImg() {
    fullImg.style.display = "none";
}

// ***************** ENQUIRY ABOUT ACC CREATION ( START ) **************
let checkingForm = document.querySelector(".checking_form");
let orderMakingPage = document.querySelector(".orderMaking_page");
let checkingBtn = document.querySelector(".done_btn");
let orderBlock = document.querySelector(".order-block");
let notification = document.querySelector(".notification");
let originalContent = notification.innerHTML;
let onlinePay = document.querySelector(".onlinePay");

orderBlock.classList.add("hide");

function formChecking(event) {
    event.preventDefault();

    let checkingEmail = checkingForm.querySelector("#checking_email");
    let confirmedEmail = localStorage.getItem("userEmail");

    if (checkingEmail.value === confirmedEmail) {
        notification.classList.add("hide");
        orderBlock.classList.remove("hide");
    } else {
        notification.innerText = "Invalid Email id";
        notification.classList.add("msg_notification");

        let backBtn = document.createElement("button");
        backBtn.innerText = "Back";
        backBtn.classList.add("done");
        backBtn.style.width = "10%";
        backBtn.addEventListener("click", () => {
            console.log("back is clicked");
            notification.innerHTML = originalContent;

            checkingForm = document.querySelector(".checking_form");
            checkingForm.addEventListener("submit", formChecking);
        });

        notification.append(backBtn);
    }
}
checkingForm.addEventListener("submit", formChecking);


// ************* UPI ( START ) ************
let cash = document.querySelector(".cash");
let online = document.querySelector(".online");
let upiContainer = document.querySelector(".upiContainer");

online.addEventListener("change", () => {

    upiContainer.innerHTML = "";

    let upiInput = document.createElement("input");
    upiInput.type = "text";
    upiInput.placeholder = "Enter UPI ID";
    upiInput.classList.add("upiInput");

    upiContainer.append(upiInput);
});

cash.addEventListener("change", () => {
    upiContainer.innerHTML = "";
    // upiContainer.style.display = "none";
});


// ***************** FORM LOGIC ( START ) ***************
let form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let number = document.getElementById("number").value.trim();
    let address = document.getElementById("address").value.trim();
    let paymentMode = document.querySelector('input[name = "payment_mode"]:checked');

    if (!/^[0-9]{10}$/.test(number)) {
        alert("Please enter a valid 10 digit number");
    }

    if (address.length < 10) {
        alert("Please enter complete address");
    }

    if (!paymentMode) {
        alert("Please select payment mode");
    }

    if (paymentMode.value == "online") {
        let upi = document.querySelector(".upiInput");

        if (!upi) {
            alert("Enter UPI ID");
            return;
        }
        let upiVal = upi.value.trim();

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z]+$/.test(upiVal)) {
            alert("Please Enter a valid UPI ID");
            return;
        }
    }

    let body = document.querySelector("body");
    let listItems = document.querySelector(".listItems");

    listItems.style.display = "none";
    body.classList.add("order_page");

    let h1 = document.createElement("h1");
    h1.innerText = "Your Order is Confirmed 🥳🥳";
    body.append(h1);
});
// ***************** FORM LOGIC ( END ) ***************



