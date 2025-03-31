// Initialize skills chart
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Python', 'HTML/CSS', 'JavaScript', 'ML Frameworks', 'Git/GitHub'],
    datasets: [{
      label: 'Proficiency (%)',
      data: [90, 85, 75, 80, 95],
      backgroundColor: ['#38bdf8', '#fbbf24', '#ef4444', '#10b981', '#7c3aed'],
      borderWidth: 1
    }]
  },
  options: {
    scales: { y: { beginAtZero: true, max: 100 } }
  }
});
