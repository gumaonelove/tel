async function request(url, data, csrftoken) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(data),
    });
    const result = await response.text();
    return result;
}


async function request_put(url, data, csrftoken) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(data),
    });
    const result = await response.text();
    return result;
}