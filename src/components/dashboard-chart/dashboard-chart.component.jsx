import Chart from 'chart.js'

const DashboardChart = ({ chartElement, data, type,  }) => {
    return (
        new Chart(chartElement, {
            type: type,
            ...data,
            
        })
    )
}

export default DashboardChart