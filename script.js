
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('typhoonChart').getContext('2d');
  const typhoonChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Typhoon Occurrences',
        data: [1, 0, 1, 2, 1, 2, 3, 1, 0, 1, 0, 2],
        backgroundColor: 'rgba(0, 240, 255, 0.2)',
        borderColor: '#00f0ff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
