<script>
window.onload = function () {
    // Bar chart setup
    var barOptions = {
        chart: {
            type: 'bar',
            height: 370,
            toolbar: {
                show: false  // Hides the toolbar at the top right corner
            }
        },
        title: {
            text: 'Number of Students',
            align: 'center',  // Positions the title at the center
            style: {
                fontSize: '20px',
                fontFamily: 'Times New Roman',
                color: '#333'
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: 'Students',
            data: [{{ student_gender_male }}, {{ student_gender_female }}]
        }],
        xaxis: {
            categories: ['Male', 'Female'],
            labels: {
                style: {
                    fontSize: '14px',
                    colors: '#555',
                    fontFamily: 'Times New Roman'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px',
                    colors: '#555',
                    fontFamily: 'Times New Roman'
                }
            }
        }
    };

    var barChart = new ApexCharts(document.querySelector("#chartContainer"), barOptions);
    barChart.render();

    // Pie chart setup
    var pieOptions = {
        series: [{{student_count}}, {{staff_count}}, {{subject_count}}, {{course_count}}],
        chart: {
            width: 300, // Reduce width for better performance
            type: 'pie',
        },
         title: {
            text: 'All Data',
            align: 'center',  // Positions the title at the center
            style: {
                fontSize: '20px',
                fontFamily: 'Times New Roman',
                color: '#333'
            }
        },
        labels: ['Students', 'Staffs', 'Subjects', 'Course'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var pieChart = new ApexCharts(document.querySelector("#chartContainer2"), pieOptions);
    pieChart.render();

    // Donut chart for Gender Distribution (Students and Staff)
    var donutOptions = {
        series: [{{ student_gender_male }}, {{ student_gender_female }}], // Data for Male and Female students
        chart: {
            type: 'donut',
            height: 370
        },
        title: {
            text: 'Gender Distribution',
            align: 'center',
            style: {
                fontSize: '20px',
                fontFamily: 'Times New Roman',
                color: '#333'
            }
        },
        labels: ['Male', 'Female'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var donutChart = new ApexCharts(document.querySelector("#donutChartContainer"), donutOptions);
    donutChart.render();

    // Donut chart for Course and Subjects
    var donutCourseSubjectOptions = {
        series: [{{ course_count }}, {{ subject_count }}], // Data for Courses and Subjects
        chart: {
            type: 'donut',
            height: 370
        },
        title: {
            text: 'Courses and Subjects',
            align: 'center',
            style: {
                fontSize: '20px',
                fontFamily: 'Times New Roman',
                color: '#333'
            }
        },
        labels: ['Courses', 'Subjects'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var donutCourseSubjectChart = new ApexCharts(document.querySelector("#donutChartContainer2"), donutCourseSubjectOptions);
    donutCourseSubjectChart.render();
}
</script>