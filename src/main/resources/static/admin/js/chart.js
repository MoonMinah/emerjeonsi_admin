function fetchAndUpdateCharts() {
    // 원형 차트 데이터 업데이트
    axios.get('/api/admin/exhibitionReservations')
        .then(response => {
            const data = response.data;

            if (!Array.isArray(data)) {
                console.error('잘못된 형식:', data);
                alert('잘못된 데이터 형식을 반환');
                return;
            }

            const labels = data.map(item => item.exhibitionName);
            const values = data.map(item => item.paymentCount);

            renderPieChart(labels, values);
        })
        .catch(error => {
            console.error('데이터 불러오기 실패 : ', error);
            alert('전시 예약 데이터를 불러오는 데 실패했습니다.');
        });

    // 막대형 차트 데이터 업데이트
    const selectedDate = document.getElementById('selectedDate').value;

    if (!selectedDate) {
        alert('날짜를 선택해주세요.');
        return;
    }

    axios.get(`/api/admin/hourlySales?date=${selectedDate}`)
        .then(response => {
            const data = response.data;

            if (!Array.isArray(data)) {
                console.error('잘못된 형식:', data);
                alert('서버에서 잘못된 데이터 형식을 반환했습니다.');
                return;
            }

            const allHours = Array.from({ length: 24 }, (_, i) => `${i}시`);
            const fullValues = allHours.map(hour => {
                const matched = data.find(item => `${item.hour}시` === hour);
                return matched ? matched.totalSales : 0;
            });

            renderBarChart(allHours, fullValues);
        })
        .catch(error => {
            console.error('불러오기 실패:', error);
            alert('시간대별 매출 데이터를 불러오는 데 실패했습니다.');
        });
}

// 원형 차트 생성 및 업데이트
function renderPieChart(labels, values) {
    const ctx = document.getElementById('exhibitionReservationChart').getContext('2d');

    // 기존 차트 삭제 시 객체 존재 여부 확인
    if (window.pieChart && typeof window.pieChart.destroy === 'function') {
        window.pieChart.destroy();
    }

    // 새 차트 생성
    window.pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: '전시별 예약 비율',
                data: values,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }]
        }
    });
}

// 막대형 차트 생성 및 업데이트
function renderBarChart(labels, values) {
    console.log("labels : " + labels);
    console.log("values : " + values);
    const ctx = document.getElementById('hourlySalesChart').getContext('2d');

    // 기존 차트 삭제 시 객체 존재 여부 확인
    if (window.hourlySalesChart && typeof window.hourlySalesChart.destroy === 'function') {
        window.hourlySalesChart.destroy();
    }

    // 새 차트 생성
    window.hourlySalesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '시간대별 총 매출',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// 페이지 로드 시 초기화
window.addEventListener('load', function () {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('selectedDate');

    dateInput.value = today;

    // 초기 데이터 로드
    fetchAndUpdateCharts();



});



// 조회 버튼 클릭 이벤트
document.getElementById('fetchDataButton').addEventListener('click', fetchAndUpdateCharts);
