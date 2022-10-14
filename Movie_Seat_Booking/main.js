const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelected = document.getElementById('movie');


var ticketPrice = +movieSelected.value;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatCount = selectedSeats.length;

    count.innerHTML = selectedSeatCount;
    total.innerHTML = selectedSeatCount * ticketPrice;
}

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

movieSelected.addEventListener('change', function (event) {
    ticketPrice = +event.target.value;
    setMovieData(event.target.selectedIndex, event.target.value);
    updateSelectedCount();
});

container.addEventListener('click', function (event) {
    if (event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) {
        event.target.classList.toggle('selected');

        updateSelectedCount();
    }
}); 




// seats.forEach(seat => {
//     seat.addEventListener('click', function (event) {
//         if (event.target.className.indexOf('selected') === -1) {
//             event.target.classList.add('selected');
//             total.innerHTML = parseInt(total.innerHTML) + parseInt(movieSelected.value);
//             count.innerHTML = parseInt(count.innerHTML) + 1
//         }
//         else {
//             event.target.classList.remove('selected');
//             total.innerHTML -= movieSelected.value;
//             count.innerHTML = parseInt(count.innerHTML) - 1
//         }
//     })
// });