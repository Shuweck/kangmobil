function fetchData() {
    fetch("'https://fakestoreapi.com/products", {
        mode: "cors",
        method: "GET",
        headers: {
            "ngrok-skip-browser-warning": "true",
        },
    })
    .then((res) => res.json())
    .then(json=>console.log(json))
    .then(data => {
        let output = ""
        let no = 1;
        // Console.log(data.data)
        data.dataforEach(el => {
            output += `
            <tr>
                <td>`+ (no++) +`</td>
                <td>`+ el.name +`</td>
                <td>`+ el.price +`</td>
                <td>`+ el.description +`</td>
            </tr>`
        });
        document.querySelector('tbody').innerHTML = output
    })
}
loaddata()  