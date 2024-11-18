// document.addEventListener("DOMContentLoaded", function () {
//    axios.get('/api/admin/users')
//        .then(response => {
//            console.log(response.data);
//
//            const tableBody = document.querySelector("#datatablesSimple tbody");
//            if(tableBody) {
//                response.data.forEach(user => {
//                    console.log("Adding button for userNo:", user.userNo);
//
//                    const row = document.createElement("tr");
//
//                    const userNoCell = document.createElement("td");
//                    userNoCell.textContent = user.userNo;
//                    row.appendChild(userNoCell);
//
//                    const userIdCell = document.createElement("td");
//                    userIdCell.textContent = user.userId;
//                    row.appendChild(userIdCell);
//
//                    const emailCell = document.createElement("td");
//                    emailCell.textContent = user.email;
//                    row.appendChild(emailCell);
//
//                    const userNameCell = document.createElement("td");
//                    userNameCell.textContent = user.userName;
//                    row.appendChild(userNameCell);
//
//                    const genderCell = document.createElement("td");
//                    genderCell.textContent = user.gender;
//                    row.appendChild(genderCell);
//
//                    const birthdayCell = document.createElement("td");
//                    birthdayCell.textContent = user.birthday;
//                    row.appendChild(birthdayCell);
//
//                    const phoneCell = document.createElement("td");
//                    phoneCell.textContent = user.phone;
//                    row.appendChild(phoneCell);
//
//                    const providerCell = document.createElement("td");
//                    providerCell.textContent = user.provider;
//                    row.appendChild(providerCell);
//
//                    // 회원 정보 상세 보기 버튼
//                    const detailBtnCell = document.createElement("td");
//                    const detailBtn = document.createElement("button");
//                    detailBtn.textContent = "상세 보기";
//                    let userNo = user.userNo;
//                    console.log("Adding button for userNo:", userNo);
//                    detailBtn.onclick = () => {
//                        alert("Detail button clicked!");
//                        userDetail(userNo);
//                    }
//                    detailBtnCell.appendChild(detailBtn);
//                    row.appendChild(detailBtnCell);
//
//                    // 회원 강퇴 버튼
//                    const banBtnCell = document.createElement("td");
//                    const banBtn = document.createElement("button");
//                    banBtn.textContent = "강퇴";
//                    banBtn.onclick = () => banUser(user.userNo);
//                    banBtnCell.appendChild(banBtn);
//                    row.appendChild(banBtnCell);
//
//                    tableBody.appendChild(row);
//                });
//
//                new simpleDatatables.DataTable("#datatablesSimple");
//            } else {
//                console.error("테이블이 존재하지 않습니다.");
//            }
//
//        })
//    .catch(error => console.error("오류 발생 : ", error));
// });
//
// function userDetail(userNo) {
//     alert("userDetail() : userNo = " + userNo);
//
//     window.location.href = `/admin/users/${userNo}`;
// }

document.addEventListener("DOMContentLoaded", function () {
    axios.get('/api/admin/users')
        .then(response => {
            console.log(response.data);

            const tableBody = document.querySelector(".table tbody");
            if(tableBody) {
                response.data.forEach(user => {
                    console.log("Adding button for userNo:", user.userNo);

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
                    let userNo = user.userNo;
                    console.log("Adding button for userNo:", userNo);
                    detailBtn.onclick = () => {
                        alert("Detail button clicked!");
                        userDetail(userNo);
                    }
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

                // new simpleDatatables.DataTable("#datatablesSimple");
            } else {
                console.error("테이블이 존재하지 않습니다.");
            }

        })
        .catch(error => console.error("오류 발생 : ", error));
});

function userDetail(userNo) {
    alert("userDetail() : userNo = " + userNo);

    window.location.href = `/admin/users/${userNo}`;
}