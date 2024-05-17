// [ API ] //
const ip = "10.2.161.150"
fetchData = () => {
    return fetch(`http://${ip}:3000/scores`).then(r => r.json())
}

fetchData()

displayData = async () => {
    const data = await fetchData()
    for (i=0; i < 10; i++) {
        const name = data[i].name
        const score = data[i].score
        let time = data[i].time
        console.log(time)
        let place = ""

        if (i == 0) {
            place = `1st`
        } else if (i == 1) {
            place = `2nd`
        } else if (i == 2) {
            place = `3rd`
        } else {
            place = `${i + 1}th`
        }

        if (time < 60) {
            time = `${time}s`
        } else if (time < 3600) {
            time = `${Math.floor(time/60)}min${time%60}s`
        } else {

        }

        document.querySelector(".scores").innerHTML += `
        <tr>
            <th scope="row">${place}</th>
            <td>${name}</td>
            <td>${score}</td>
            <td>${time}</td>
        </tr>
        `
    }
}

displayData()