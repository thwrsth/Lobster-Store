function calculatePrice() {
    let quantity = document.getElementById("quantity").value;
    let pricePerLobster = 5000; // Ganti dengan harga asli
    let totalPrice = quantity * pricePerLobster;

    document.getElementById("total-price").innerText = "Total Harga: Rp " + totalPrice.toLocaleString();
}

function calculatePrice() {
    let quantity = document.getElementById("quantity").value;
    let size = document.getElementById("size").value;
    let totalPrice = quantity * size;

    if (quantity > 0) {
        document.getElementById("total-price").innerText = "Total Harga: Rp " + totalPrice.toLocaleString();
        document.getElementById("pay-button").style.display = "block";
    } else {
        document.getElementById("total-price").innerText = "";
        document.getElementById("pay-button").style.display = "none";
    }
}

function processPayment() {
    let quantity = document.getElementById("quantity").value;
    let size = document.getElementById("size");
    let sizeText = size.options[size.selectedIndex].text;
    let totalPrice = quantity * size.value;
    
    let paymentURL = "https://wa.me/62XXXXXXXXXX?text=Halo, saya ingin membeli " + quantity + " ekor lobster ukuran " + sizeText + " dengan total harga Rp " + totalPrice.toLocaleString();
    
    window.location.href = paymentURL;
}
