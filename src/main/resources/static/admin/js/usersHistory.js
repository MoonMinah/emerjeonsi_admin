document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const pageSize = 10;
    const tableBody = document.querySelector(".table tbody");
    // 페이징 버튼 컨테이너
    const paginationContainer = document.getElementById("paginationContainer");

    function fetchUsersHistory(page, size) {
        console.log(`parmas : page = ${page} / size = ${size}`);

        axios.get(`/api/admin/users/history?page=${page}&size=${size}`)
            .then(response => {
                const data = response.data;
                const usersHistory = data.users;
                const totalPages = data.totalPages;

                console.log("Users History data : ", usersHistory);
                console.log("Total pages : ", totalPages);

                if(tableBody) {
                    // 기존 테이블 내용 초기화
                    while(tableBody.firstChild) {
                        tableBody.removeChild(tableBody.firstChild);
                    }

                    usersHistory.forEach(history => {
                        console.log("회원 이력 userHistoryNo : ", history.userHistoryNo);

                        const row = document.createElement("tr");

                        // 회원 이력 번호
                        row.appendChild(createCell("th", history.userHistoryNo, { scope: "row" }));

                        // 회원 번호
                        row.appendChild(createCell("td", history.userNo));

                        // 회원 아이디
                        row.appendChild(createCell("td", history.userId || "-"));

                        // 회원 상태
                        row.appendChild(createCell("td", history.userStatus));

                        // 상태 변경 일시
                        row.appendChild(createCell("td", formatDateTime(history.userEventTimestamp)));

                        // 정보 보관 기한
                        row.appendChild(createCell("td", formatDateTime(history.retentionUntil)));

                        tableBody.appendChild(row);
                    });

                    updatePaginationBtns(totalPages);
                } else {
                    console.error("테이블이 존재하지 않습니다.");
                }
            })
            .catch(error => console.error("오류 발생 : ", error));
    }

    function createCell(tag, textContent, attributes = {}) {
        const cell = document.createElement(tag);
        cell.textContent = textContent;
        Object.entries(attributes).forEach(([key, value]) => cell.setAttribute(key, value));

        return cell;
    }

    function updatePaginationBtns(totalPages) {
        const paginationList = paginationContainer.querySelector("ul.pagination");

        // 기존 버튼 제거
        while(paginationList.firstChild) {
            paginationList.removeChild(paginationList.firstChild);
        }

        // 'Previous' 버튼 생성
        const prevPageBtn = document.createElement("li");
        prevPageBtn.classList.add("page-item");

        if(currentPage === 1) {
            prevPageBtn.classList.add("disabled");
        }

        const prevLink = document.createElement("a");
        prevLink.classList.add("page-link");
        prevLink.textContent = "Previous";
        prevLink.href = "#";
        prevLink.addEventListener("click", (e) => {
            e.preventDefault();

            if(currentPage > 1) {
                currentPage--;

                fetchUsersHistory(currentPage, pageSize);
            }
        });

        prevPageBtn.appendChild(prevLink);
        paginationList.appendChild(prevPageBtn);

        // 페이지 버튼 생성
        for(let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement("li");
            pageBtn.classList.add("page-item");

            if(i === currentPage) {
                pageBtn.classList.add("active");
            }

            const pageLink = document.createElement("a");
            pageLink.classList.add("page-link");
            pageLink.textContent = i;
            pageLink.href = "#";
            pageLink.addEventListener("click", (e) => {
                e.preventDefault();

                currentPage = i;
                fetchUsersHistory(currentPage, pageSize);
            });

            pageBtn.appendChild(pageLink);
            paginationList.appendChild(pageBtn);
        }

        // 'Next' 버튼 생성
        const nextPageBtn = document.createElement("li");
        nextPageBtn.classList.add("page-item");

        if(currentPage === totalPages) {
            nextPageBtn.classList.add("disabled");
        }

        const nextLink = document.createElement("a");
        nextLink.classList.add("page-link");
        nextLink.textContent = "Next";
        nextLink.href = "#";
        nextLink.addEventListener("click", (e) => {
            e.preventDefault();

            if(currentPage < totalPages) {
                currentPage++;

                fetchUsersHistory(currentPage, pageSize);
            }
        });

        nextPageBtn.appendChild(nextLink);
        paginationList.appendChild(nextPageBtn);
    }

    function formatDateTime(dateTime) {
        if (!dateTime) return "-";
        const date = new Date(dateTime);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ` +
            `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
    }

    // 초기 데이터 로드
    fetchUsersHistory(currentPage, pageSize);
});

function userDetail(userNo) {
    window.location.href = `/admin/users/${userNo}`;
}