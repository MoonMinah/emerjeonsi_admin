document.addEventListener("DOMContentLoaded", function () {
    const userNo = window.userNo;

    if(userNo) {
        axios.get(`/api/admin/users/${userNo}`)
            .then(response => {
                const user = response.data;
                console.log(user);

                const cardBody = document.querySelector("#userInfo");
                if(cardBody) {
                    const form = document.createElement('form');
                    form.setAttribute('method', 'POST');

                    // 사용자 번호 폼 필드(readonly로 설정)
                    const userNoDiv = document.createElement('div');
                    userNoDiv.classList.add('mb-3', 'row');

                    const userNoLabel = document.createElement('label');
                    userNoLabel.setAttribute('for', 'userNo');
                    userNoLabel.classList.add('col-sm-2', 'col-form-label')
                    userNoLabel.textContent = '회원 번호';

                    const userNoInputDiv = document.createElement('div');
                    userNoInputDiv.classList.add('col-sm-10');

                    const userNoInput = document.createElement('input');
                    userNoInput.setAttribute('type', 'text');
                    userNoInput.classList.add('form-control')
                    userNoInput.setAttribute('id', 'userNo');
                    userNoInput.setAttribute('name', 'userNo');
                    userNoInput.setAttribute('value', user.userNo);
                    userNoInput.setAttribute('readonly', true);
                    userNoInput.setAttribute('disabled', true);

                    userNoDiv.appendChild(userNoLabel);
                    userNoDiv.appendChild(userNoInputDiv);
                    userNoInputDiv.appendChild(userNoInput);
                    form.appendChild(userNoDiv);

                    // 사용자 ID 폼 필드(readonly로 설정)
                    const userIdDiv = document.createElement('div');
                    userIdDiv.classList.add('mb-3', 'row');

                    const userIdLabel = document.createElement('label');
                    userIdLabel.setAttribute('for', 'userId');
                    userIdLabel.classList.add('col-sm-2', 'col-form-label');
                    userIdLabel.textContent = '아이디';

                    const userIdInputDiv = document.createElement('div');
                    userIdInputDiv.classList.add('col-sm-10');

                    const userIdInput = document.createElement('input');
                    userIdInput.setAttribute('type', 'text');
                    userIdInput.classList.add('form-control')
                    userIdInput.setAttribute('id', 'userId');
                    userIdInput.setAttribute('name', 'userId');
                    userIdInput.setAttribute('value', user.userId);
                    userIdInput.setAttribute('readonly', true);
                    userIdInput.setAttribute('disabled', true);

                    userIdDiv.appendChild(userIdLabel);
                    userIdDiv.appendChild(userIdInputDiv);
                    userIdInputDiv.appendChild(userIdInput);
                    form.appendChild(userIdDiv);

                    // 비밀번호 폼 필드(readonly로 설정)
                    const passwordDiv = document.createElement('div');
                    passwordDiv.classList.add('mb-3', 'row');

                    const passwordLabel = document.createElement('label');
                    passwordLabel.setAttribute('for', 'password');
                    passwordLabel.classList.add('col-sm-2', 'col-form-label');
                    passwordLabel.textContent = '비밀번호';

                    const passwordInputDiv = document.createElement('div');
                    passwordInputDiv.classList.add('col-sm-10');

                    const passwordInput = document.createElement('input');
                    passwordInput.setAttribute('type', 'password');
                    passwordInput.classList.add('form-control');
                    passwordInput.setAttribute('id', 'password');
                    passwordInput.setAttribute('name', 'password');
                    passwordInput.setAttribute('value', user.password);
                    passwordInput.setAttribute('readonly', true);
                    passwordInput.setAttribute('disabled', true);

                    passwordDiv.appendChild(passwordLabel);
                    passwordDiv.appendChild(passwordInputDiv);
                    passwordInputDiv.appendChild(passwordInput);
                    form.appendChild(passwordDiv);

                    // 이메일 폼 필드
                    const emailDiv = document.createElement('div');
                    emailDiv.classList.add('mb-3', 'row');

                    const emailLabel = document.createElement('label');
                    emailLabel.setAttribute('for', 'email');
                    emailLabel.classList.add('col-sm-2', 'col-form-label')
                    emailLabel.textContent = '이메일';

                    const emailInputDiv = document.createElement('div');
                    emailInputDiv.classList.add('col-sm-10');

                    const emailInput = document.createElement('input');
                    emailInput.setAttribute('type', 'email');
                    emailInput.classList.add('form-control');
                    emailInput.setAttribute('id', 'email');
                    emailInput.setAttribute('name', 'email');
                    emailInput.setAttribute('value', user.email);

                    // 이메일 오류 메시지 표시 div 추가
                    const emailErrorDiv = document.createElement('div');
                    emailErrorDiv.classList.add('error-message', 'text-danger');

                    emailInputDiv.appendChild(emailInput);
                    emailInputDiv.appendChild(emailErrorDiv);
                    emailDiv.appendChild(emailLabel);
                    emailDiv.appendChild(emailInputDiv);

                    form.appendChild(emailDiv);

                    // 이름 폼 필드
                    const userNameDiv = document.createElement('div');
                    userNameDiv.classList.add('mb-3', 'row');

                    const userNameLabel = document.createElement('label');
                    userNameLabel.setAttribute('for', 'userName');
                    userNameLabel.classList.add('col-sm-2', 'col-form-label');
                    userNameLabel.textContent = '이름';

                    const userNameInputDiv = document.createElement('div');
                    userNameInputDiv.classList.add('col-sm-10');

                    const userNameInput = document.createElement('input');
                    userNameInput.setAttribute('type', 'text');
                    userNameInput.classList.add('form-control');
                    userNameInput.setAttribute('id', 'userName');
                    userNameInput.setAttribute('name', 'userName');
                    userNameInput.setAttribute('value', user.userName);

                    // 이름 오류 메시지 표시 div 추가
                    const userNameErrorDiv = document.createElement('div');
                    userNameErrorDiv.classList.add('error-message', 'text-danger');

                    userNameInputDiv.appendChild(userNameInput);
                    userNameInputDiv.appendChild(userNameErrorDiv);
                    userNameDiv.appendChild(userNameLabel);
                    userNameDiv.appendChild(userNameInputDiv);

                    form.appendChild(userNameDiv);

                    // 성별 라디오 버튼
                    const genderDiv = document.createElement('div');
                    genderDiv.classList.add('mb-3', 'row');

                    const genderLabel = document.createElement('label');
                    genderLabel.classList.add('col-sm-2', 'col-form-label');
                    genderLabel.textContent = '성별';

                    const genderRadioDiv = document.createElement('div');
                    genderRadioDiv.classList.add('col-sm-10');
                    genderRadioDiv.style.display = 'flex';
                    genderRadioDiv.style.gap = '15px';

                    const maleRadioDiv = document.createElement('div');
                    maleRadioDiv.classList.add('form-check', 'form-check-inline');

                    const maleRadio = document.createElement('input');
                    maleRadio.setAttribute('type', 'radio');
                    maleRadio.classList.add('form-check-input');
                    maleRadio.setAttribute('id', 'genderMale');
                    maleRadio.setAttribute('name', 'gender');
                    maleRadio.setAttribute('value', '남');

                    const maleRadioLabel = document.createElement('label');
                    maleRadioLabel.classList.add('form-check-label');
                    maleRadioLabel.setAttribute('for', 'genderMale');

                    const femaleRadioDiv = document.createElement('div');
                    femaleRadioDiv.classList.add('form-check', 'form-check-inline');

                    const femaleRadio = document.createElement('input');
                    femaleRadio.setAttribute('type', 'radio');
                    femaleRadio.classList.add('form-check-input');
                    femaleRadio.setAttribute('id', 'genderFemale');
                    femaleRadio.setAttribute('name', 'gender');
                    femaleRadio.setAttribute('value', '여');

                    const femaleRadioLabel = document.createElement('label');
                    femaleRadioLabel.classList.add('form-check-label');
                    femaleRadioLabel.setAttribute('for', 'genderFemale');

                    // 성별 오류 메시지 표시 div 추가
                    const genderErrorDiv = document.createElement('div');
                    genderErrorDiv.classList.add('error-message', 'text-danger');

                    genderDiv.appendChild(genderLabel);
                    genderDiv.appendChild(genderRadioDiv);

                    genderRadioDiv.appendChild(maleRadioDiv);
                    maleRadioDiv.appendChild(maleRadio);
                    maleRadioDiv.appendChild(maleRadioLabel);
                    genderRadioDiv.appendChild(document.createTextNode('남'));

                    genderRadioDiv.appendChild(femaleRadioDiv);
                    femaleRadioDiv.appendChild(femaleRadio);
                    femaleRadioDiv.appendChild(femaleRadioLabel);
                    genderRadioDiv.appendChild(document.createTextNode('여'));

                    // 성별 오류 메시지 추가
                    genderDiv.appendChild(genderErrorDiv);

                    form.appendChild(genderDiv);

                    // 생일 폼 필드
                    const birthdayDiv = document.createElement('div');
                    birthdayDiv.classList.add('mb-3', 'row');

                    const birthdayLabel = document.createElement('label');
                    birthdayLabel.setAttribute('for', 'birthday');
                    birthdayLabel.classList.add('col-sm-2', 'col-form-label');
                    birthdayLabel.textContent = '생년월일';

                    const birthdayInputDiv = document.createElement('div');
                    birthdayInputDiv.classList.add('col-sm-10');

                    const birthdayInput = document.createElement('input');
                    birthdayInput.setAttribute('type', 'text');
                    birthdayInput.classList.add('form-control');
                    birthdayInput.setAttribute('id', 'birthday');
                    birthdayInput.setAttribute('name', 'birthday');
                    birthdayInput.setAttribute('value', user.birthday);

                    // 생일 오류 메시지 표시 div 추가
                    const birthdayErrorDiv = document.createElement('div');
                    birthdayErrorDiv.classList.add('error-message', 'text-danger');

                    birthdayInputDiv.appendChild(birthdayInput);
                    birthdayInputDiv.appendChild(birthdayErrorDiv);
                    birthdayDiv.appendChild(birthdayLabel);
                    birthdayDiv.appendChild(birthdayInputDiv);

                    form.appendChild(birthdayDiv);

                    // 전화번호 폼 필드
                    const phoneDiv = document.createElement('div');
                    phoneDiv.classList.add('mb-3', 'row');

                    const phoneLabel = document.createElement('label');
                    phoneLabel.setAttribute('for', 'phone');
                    phoneLabel.classList.add('col-sm-2', 'col-form-label');
                    phoneLabel.textContent = '핸드폰 번호';

                    const phoneInputDiv = document.createElement('div');
                    phoneInputDiv.classList.add('col-sm-10');

                    const phoneInput = document.createElement('input');
                    phoneInput.setAttribute('type', 'text');
                    phoneInput.classList.add('form-control');
                    phoneInput.setAttribute('id', 'phone');
                    phoneInput.setAttribute('name', 'phone');
                    phoneInput.setAttribute('value', user.phone);

                    // 전화번호 오류 메시지 표시 div 추가
                    const phoneErrorDiv = document.createElement('div');
                    phoneErrorDiv.classList.add('error-message', 'text-danger');

                    phoneInputDiv.appendChild(phoneInput);
                    phoneInputDiv.appendChild(phoneErrorDiv);
                    phoneDiv.appendChild(phoneLabel);
                    phoneDiv.appendChild(phoneInputDiv);

                    form.appendChild(phoneDiv);

                    // 서비스 제공자(readonly)
                    const providerDiv = document.createElement('div');
                    providerDiv.classList.add('mb-3', 'row');

                    const providerLabel = document.createElement('label');
                    providerLabel.setAttribute('for', 'provider');
                    providerLabel.classList.add('col-sm-2', 'col-form-label');
                    providerLabel.textContent = '서비스 제공자';

                    const providerInputDiv = document.createElement('div');
                    providerInputDiv.classList.add('col-sm-10');

                    const providerInput = document.createElement('input');
                    providerInput.setAttribute('type', 'text');
                    providerInput.classList.add('form-control');
                    providerInput.setAttribute('id', 'provider');
                    providerInput.setAttribute('name', 'provider');
                    providerInput.setAttribute('value', user.provider);
                    providerInput.setAttribute('readonly', true);
                    providerInput.setAttribute('disabled', true);

                    providerDiv.appendChild(providerLabel);
                    providerDiv.appendChild(providerInputDiv);
                    providerInputDiv.appendChild(providerInput);
                    form.appendChild(providerDiv);

                    // 수정하기 버튼
                    const BtnDiv = document.createElement('div');
                    BtnDiv.classList.add('d-grid', 'gap-2', 'col-6', 'mx-auto');

                    const updateBtn = document.createElement('input');
                    updateBtn.setAttribute('type', 'button');
                    updateBtn.classList.add('btn', 'btn-primary', 'mb-3');
                    updateBtn.setAttribute('value', '수정하기');

                    // 취소 버튼 추가
                    const cancelBtn = document.createElement('input');
                    cancelBtn.setAttribute('type', 'button');
                    cancelBtn.classList.add('btn', 'btn-secondary', 'mb-3');
                    cancelBtn.setAttribute('value', '취소');

                    BtnDiv.appendChild(updateBtn);
                    BtnDiv.appendChild(cancelBtn);

                    form.appendChild(BtnDiv);

                    // 폼을 card-body에 추가
                    cardBody.appendChild(form);

                    const genderMale = document.getElementById('genderMale');
                    const genderFemale = document.getElementById('genderFemale');

                    if(genderMale && genderFemale) {
                        if(user.gender === '남') {
                            genderMale.checked = true;
                        } else if(user.gender === '여') {
                            genderFemale.checked = true;
                        } else {
                            // 'N/A'일 경우, 선택 해제
                            genderMale.checked = false;
                            genderFemale.checked = false;
                        }
                    }

                    // 수정 버튼 이벤트
                    updateBtn.addEventListener('click', () => updateBtnClick(userNo, form));

                    // 취소 버튼 이벤트
                    cancelBtn.addEventListener('click', () => {
                       window.location.href = "/admin/users";
                    });
                }
            })
            .catch(error => {
                console.error('사용자 정보를 가져오는 데 실패했습니다:', error);
            });
    } else {
        console.error("사용자 번호를 찾을 수 없습니다.");
    }
});

function updateBtnClick(userNo, form) {
    const formData = new FormData(form);

    // FormData -> JSON 변환
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    axios.put(`/api/admin/users/${userNo}`, data)
        .then(() => {
            alert("회원 정보 수정이 완료되었습니다.");

            window.location.href = "/admin/users";
        })
        .catch(error => {
            if(error.response) {
                // 서버에서 반환한 응답이 있을 경우
                if(error.response.status === 400) {
                    // 유효성 검사 실패 시 오류 메시지 출력
                    console.error('유효성 검사 실패 : ', error.response.data);

                    const errorMessages = error.response.data;

                    displayValidationErrors(errorMessages);
                } else {
                    // 다른 오류 발생 시 오류 메시지 출력
                    console.error('회원 정보 수정 중 오류 발생 : ', error.response.data);

                    alert("회원 정보 수정에 실패했습니다.");
                }
            } else {
                console.error('서버 응답 오류 : ', error);

                alert("서버 오류가 발생했습니다.");
            }
        });
}

// 유효성 검사 오류 메시지 표시
function displayValidationErrors(errorMessages) {
    console.log("서버에서 받은 오류 메시지 : ", errorMessages);

    // 기존 오류 메시지 초기화
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
        element.classList.remove('show');
    });

    const invalidFields = document.querySelectorAll('.is-invalid');
    invalidFields.forEach(field => {
        field.classList.remove('is-invalid'); // 기존 클래스 제거
    });

    // 오류 메시지를 각 필드 아래에 추가
    for (let field in errorMessages) {
        const message = errorMessages[field];
        console.log('검사 중인 필드 :', field);

        // 여기서 '0', '1' 등 숫자형 키를 텍스트로 변환하거나 필드명을 맞추도록 수정
        const fieldElement = document.getElementById(field); // 숫자형을 문자열로 변환

        console.log('필드 요소 : ', fieldElement);

        if (fieldElement) {
            let errorDiv = fieldElement.parentElement.querySelector('.error-message');
            console.log(errorDiv);

            if (!errorDiv) {
                errorDiv = document.createElement('div');
                errorDiv.classList.add('error-message', 'text-danger');
                fieldElement.parentElement.appendChild(errorDiv);
            }

            errorDiv.textContent = message;
            errorDiv.classList.add('show');
            fieldElement.classList.add('is-invalid');
        } else {
            console.warn(`오류 필드를 찾을 수 없습니다: ${field}`);
        }
    }
}
