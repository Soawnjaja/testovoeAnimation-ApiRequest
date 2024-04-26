$(document).ready(function() {
    $('#contactForm').on('submit', async function(event) {
        event.preventDefault();

        const name = $('#name').val();
        const phone = $('#phone').val();

      
        const alreadySubmitted = localStorage.getItem('submitted');
        if (alreadySubmitted) {
            $('#already').addClass("active");
            return;
        }
        if(!name | !phone) {
            $('#noDataInputs').addClass("active");
            return;
        }
        const data = {
            stream_code: 'vv4uf',
            client: {
                phone: phone,
                name: name,
            },
        };

        try {
            const response = await postData('https://order.drcash.sh/v1/order', data);
            if (response) {
                localStorage.setItem('submitted', 'true');
                $('#thank').addClass("active");
                console.log("КЛИК pакрыть спасибо");
            }
        } catch (error) {
            console.error('Error:', error);
            $('#wrong').addClass("active");
            console.log("КЛИК закрыть неверное");
        }
    });

    $('#close-thank').on('click', function() {
        $('#thank').removeClass("active");
    });
    $('#close-wrong').on('click', function() {
        $('#wrong').removeClass("active");
    });
    $('#close-already').on('click', function() {
        $('#already').removeClass("active");
    });
    $('#close-noData').on('click', function() {
        $('#noDataInputs').removeClass("active");
    });
});

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer RLPUUOQAMIKSAB2PSGUECA',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    });
    return response.json();
}