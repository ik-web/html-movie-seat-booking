const cinemaHall = document.querySelector('#seats-form');
const seats = 84;

function addSeats(seats) {
    let res = '';

    for (let i = 0; i < seats; i++) {
        res += `
        <label>
            <input type="checkbox" class="cinema-hall__check">
            <span class="cinema-hall__seat"></span>
        </label>
        `;
    }

    cinemaHall.innerHTML += res;
}

// addSeats(seats);
