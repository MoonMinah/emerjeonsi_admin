document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const pageSize = 10;
    const tableBody = document.querySelector(".table tbody");
    // 페이징 버튼 컨테이너
    const paginationContainer = document.getElementById("paginationContainer");

    function fetchUsers(page, size) {
        console.log(`parmas : page = ${page} / size = ${size}`);

        axios.get(`/api/admin/users?page=${page}&size=${size}`)
            .then(response => {
                const data = response.data;
                const users = data.users;
                const totalPages = data.totalPages;

                console.log("Users data : ", users);
                console.log("Total pages : ", totalPages);

                if(tableBody) {
                    // 기존 테이블 내용 초기화
                    while(tableBody.firstChild) {
                        tableBody.removeChild(tableBody.firstChild);
                    }

                    users.forEach(user => {
                        console.log("회원의 userNo : ", user.userNo);

                        const row = document.createElement("tr");

                        const userNoCell = document.createElement("th");
                        userNoCell.setAttribute("scope", "row");
                        userNoCell.textContent = user.userNo;
                        row.appendChild(userNoCell);

                        const userIdCell = document.createElement("td");
                        userIdCell.textContent = user.userId;
                        row.appendChild(userIdCell);

                        const emailCell = document.createElement("td");
                        emailCell.textContent = user.email;
                        row.appendChild(emailCell);

                        const userNameCell = document.createElement("td");
                        userNameCell.textContent = user.userName;
                        row.appendChild(userNameCell);

                        const genderCell = document.createElement("td");
                        genderCell.textContent = user.gender;
                        row.appendChild(genderCell);

                        const birthdayCell = document.createElement("td");
                        birthdayCell.textContent = user.birthday;
                        row.appendChild(birthdayCell);

                        const phoneCell = document.createElement("td");
                        phoneCell.textContent = user.phone;
                        row.appendChild(phoneCell);

                        const providerCell = document.createElement("td");
                        providerCell.textContent = user.provider;
                        row.appendChild(providerCell);

                        // 회원 정보 상세 보기 버튼
                        const detailBtnCell = document.createElement("td");
                        const detailBtn = document.createElement("button");
                        detailBtn.textContent = "상세 보기";
                        detailBtn.onclick = () => userDetail(user.userNo);
                        detailBtnCell.appendChild(detailBtn);
                        row.appendChild(detailBtnCell);

                        // 회원 강퇴 버튼
                        const banBtnCell = document.createElement("td");
                        const banBtn = document.createElement("button");
                        banBtn.textContent = "강퇴";
                        banBtn.onclick = () => banUser(user.userNo);
                        banBtnCell.appendChild(banBtn);
                        row.appendChild(banBtnCell);

                        tableBody.appendChild(row);
                    });

                    updatePaginationBtns(totalPages);
                } else {
                    console.error("테이블이 존재하지 않습니다.");
                }
            })
            .catch(error => console.error("오류 발생 : ", error));
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

               fetchUsers(currentPage, pageSize);
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
               fetchUsers(currentPage, pageSize);
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

               fetchUsers(currentPage, pageSize);
           }
        });

        nextPageBtn.appendChild(nextLink);
        paginationList.appendChild(nextPageBtn);
    }

    // 초기 데이터 로드
    fetchUsers(currentPage, pageSize);
});

function userDetail(userNo) {
    window.location.href = `/admin/users/${userNo}`;
}