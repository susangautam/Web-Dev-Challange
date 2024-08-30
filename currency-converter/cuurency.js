const dropList = document.querySelectorAll("form select");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const getButton = document.querySelector("form button");
const exchangeIcon = document.querySelector("form .icon");

const apiKey = '63a14243e89a01f97c08e2e3'; 
const apiUrl = `https://api.exchangerate-api.com/v4/latest/`; 

dropList.forEach((dropDown, index) => {
    for (let currency_code in country_list) {
        let selected = index === 0 ? (currency_code === "USD" ? "selected" : "") : (currency_code === "NPR" ? "selected" : "");
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropDown.insertAdjacentHTML("beforeend", optionTag);
    }
    dropDown.addEventListener("change", e => {
        loadFlag(e.target);
    });
});

function loadFlag(element) {
    for (let code in country_list) {
        if (code === element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", () => {
    setTimeout(getExchangeRate, 100);
});

getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

exchangeIcon.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});

function getExchangeRate() {
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = parseFloat(amount.value);

    if (isNaN(amountVal) || amountVal <= 0) {
        amount.value = "1";
        amountVal = 1;
    }

    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `${apiUrl}${fromCurrency.value}?apikey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(result => {
            let exchangeRate = result.rates[toCurrency.value];
            if (exchangeRate) {
                let totalExRate = (amountVal * exchangeRate).toFixed(2);
                exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
            } else {
                exchangeRateTxt.innerText = "Exchange rate not found";
            }
        })
        .catch(error => {
            console.error("Error fetching exchange rate:", error);
            exchangeRateTxt.innerText = "Something went wrong";
        });
}
