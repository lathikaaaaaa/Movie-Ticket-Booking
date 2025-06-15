document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
    });
});

document.getElementById('confirm-booking').addEventListener('click', () => {
    const selectedSeats = [];
    document.querySelectorAll('.seat.selected').forEach(seat => {
        selectedSeats.push(seat.getAttribute('data-seat'));
    });
});

document.getElementById('confirm-booking').addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    const ticketPrice = 10;
    localStorage.setItem('selectedSeatsCount', selectedSeatsCount);
    localStorage.setItem('selectedMoviePrice', ticketPrice);
    window.location.href = 'payment.html';
});

