<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Emerjeonsi Dashboard</title>
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css" rel="stylesheet" />
        <link href="/admin/css/styles.css" rel="stylesheet" />
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    </head>
    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <!-- Navbar Brand-->
            <a class="navbar-brand ps-3" href="/admin/home">Emerjeonsi Dashboard</a>
            <!-- Sidebar Toggle-->
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="검색" aria-label="검색" aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <!-- Navbar-->
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="/admin/logout">로그아웃</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Main</div>
                            <a class="nav-link" href="/admin/home">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                대시보드
                            </a>
                            <div class="sb-sidenav-menu-heading">Information</div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                서비스 정보 관리
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        회원 정보 관리
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="/admin/users">전체 회원 조회</a>
                                            <a class="nav-link" href="/admin/users/history">서비스 회원 이력</a>
                                        </nav>
                                    </div>
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        전시회 정보 관리
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="/admin/exhibitionsData">api 데이터</a>
                                            <a class="nav-link" href="/admin/exhibitionsDataEdit">원본 데이터</a>
                                            <a class="nav-link" href="/admin/exhibitions">전시 데이터</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div class="sb-sidenav-menu-heading">Statistics</div>
                            <a class="nav-link" href="charts.jsp">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                서비스 현황 통계
                            </a>

                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                전시회 데이터 테이블
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple" class="table table-striped table-hover">
                                    <thead class="table-dark">
                                    <tr>
                                        <th>전시명</th>
                                        <th>연계기관명</th>
                                        <th>수집일</th>
                                        <th>자료생성일자</th>
                                        <th>이미지</th>
                                        <th>전시ID</th>
                                        <th>URL</th>
                                        <th>조회수</th>
                                        <th>보조 설명</th>
                                        <th>공간 범위</th>
                                        <th>행사 장소</th>
                                        <th>장르</th>
                                        <th>기간</th>
                                        <th>페이지 수</th>
                                        <th>목차</th>
                                        <th>저자</th>
                                        <th>연락처</th>
                                        <th>배우</th>
                                        <th>기여자</th>
                                        <th>관람객</th>
                                        <th>요금</th>
                                        <th>기간</th>
                                        <th>행사 기간</th>
                                        <th>전시회 소개</th>
                                    </tr>
                                    </thead>
                                    <tbody id="exhibitionTableBody">
                                    <!-- 데이터가 여기에 동적으로 추가됩니다 -->
                                    </tbody>
                                </table>

                                <!-- 페이징 버튼을 위한 div 추가 -->
                                <div id="paginationContainer" class="pagination-container">
                                    <ul class="pagination justify-content-center">
                                        <!-- 페이징 버튼은 여기에 동적으로 추가됩니다. -->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Emerjeonsi 2024</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="/admin/js/scripts.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js" crossorigin="anonymous"></script>
        <script src="/admin/js/datatables-simple-demo.js"></script>


        <script>
            // 페이지 로드 시 데이터 가져오기
            document.addEventListener('DOMContentLoaded', fetchExhibitionData);

            async function fetchExhibitionData() {
                try {
                    const response = await axios.get('/api/admin/exhibitions-origin');
                    if (response.status !== 200) {
                        console.error(`API 응답 오류: ${response.status}`);
                        return;
                    }

                    const data = response.data;
                    console.log(data); // 데이터 확인

                    const items = data.response.body?.items?.item;
                    if (!Array.isArray(items)) {
                        console.error('응답 데이터가 배열 형식이 아닙니다:', items);
                        return;
                    }

                    const tableBody = document.getElementById('exhibitionTableBody');
                    tableBody.innerHTML = ''; // 기존 데이터 초기화

                    items.forEach((item, index) => {
                        // HTML 태그를 제거한 DESCRIPTION 생성
                        const sanitizedDescription = item.DESCRIPTION ? item.DESCRIPTION.replace(/<[^>]*>?/gm, '') : 'N/A';
                        const row = `
                <tr data-index="\${index}">
                    <td>\${item.TITLE || 'N/A'}</td>
                    <td>\${item.CNTC_INSTT_NM || 'N/A'}</td>
                    <td  contenteditable="true">\${item.COLLECTED_DATE || 'N/A'}</td>
                    <td  contenteditable="true">\${item.ISSUED_DATE || 'N/A'}</td>
                    <td>\${item.IMAGE_OBJECT || 'N/A'}</td>
                    <td>\${item.LOCAL_ID || 'N/A'}</td>
                    <td>\${item.URL || 'N/A'}</td>
                    <td>\${item.VIEW_COUNT || 'N/A'}</td>
                    <td>\${item.SUB_DESCRIPTION || 'N/A'}</td>
                    <td>\${item.SPATIAL_COVERAGE || 'N/A'}</td>
                    <td>\${item.EVENT_SITE || 'N/A'}</td>
                    <td>\${item.GENRE || 'N/A'}</td>
                    <td>\${item.DURATION || 'N/A'}</td>
                    <td>\${item.NUMBER_PAGES || 'N/A'}</td>
                    <td>\${item.TABLE_OF_CONTENTS || 'N/A'}</td>
                    <td>\${item.AUTHOR || 'N/A'}</td>
                    <td>\${item.CONTACT_POINT || 'N/A'}</td>
                    <td>\${item.ACTOR || 'N/A'}</td>
                    <td>\${item.CONTRIBUTOR || 'N/A'}</td>
                    <td>\${item.AUDIENCE || 'N/A'}</td>
                    <td>\${item.CHARGE || 'N/A'}</td>
                    <td>\${item.PERIOD || 'N/A'}</td>
                    <td  contenteditable="true">\${item.EVENT_PERIOD || 'N/A'}</td>
                    <td>\${sanitizedDescription || 'N/A'}</td>
                    <td>
                        <button type="button" class="save-button" data-index="\${index}">저장</button>
                    </td>
                </tr>
            `;
                        tableBody.insertAdjacentHTML('beforeend', row);
                    });

                    // 저장 버튼에 이벤트 리스너 추가
                    document.querySelectorAll('.save-button').forEach(button => {
                        button.addEventListener('click', async (event) => {
                            const index = event.target.getAttribute('data-index');
                            const selectedItem = items[index];
                           /* const collectedDate = row.querySelector('td:nth-child(3)').textContent; // 수정된 날짜 가져오기
                            const issuedDate = row.querySelector('td:nth-child(4)').textContent; // 수정된 발행일 가져오기*/

                            const exhibitionData = {
                                title: selectedItem.TITLE || '',
                                cntcInsttNm: selectedItem.CNTC_INSTT_NM || '',
                                collectedDate: selectedItem.COLLECTED_DATE || '',
                                issuedDate: selectedItem.ISSUED_DATE || '',
                                imageUrl: selectedItem.IMAGE_OBJECT || '',
                                localId: selectedItem.LOCAL_ID || '',
                                url: selectedItem.URL || '',
                                viewCount: selectedItem.VIEW_COUNT || 0,
                                subDescription: selectedItem.SUB_DESCRIPTION || '',
                                spatialCoverage: selectedItem.SPATIAL_COVERAGE || '',
                                eventSite: selectedItem.EVENT_SITE || '',
                                genre: selectedItem.GENRE || '',
                                duration: selectedItem.DURATION || '',
                                numberPages: selectedItem.NUMBER_PAGES || '',
                                tableOfContents: selectedItem.TABLE_OF_CONTENTS || '',
                                author: selectedItem.AUTHOR || '',
                                contactPoint: selectedItem.CONTACT_POINT || '',
                                actor: selectedItem.ACTOR || '',
                                contributor: selectedItem.CONTRIBUTOR || '',
                                audience: parseInt(selectedItem.AUDIENCE, 10) || 0,
                                charge: selectedItem.CHARGE || '',
                                period: parseInt(selectedItem.PERIOD, 10) || 0,
                                eventPeriod: parseInt(selectedItem.EVENT_PERIOD, 10) || 0,
                                description: selectedItem.DESCRIPTION || ''
                            };

                            try {
                                const saveResponse = await axios.post('/api/admin/exhibitions-data', exhibitionData, {
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });
                                alert('저장 성공: ' + saveResponse.data);
                            } catch (error) {
                                console.error('저장 실패:', error);
                                alert('저장 중 오류가 발생했습니다.');
                            }
                        });
                    });
                } catch (error) {
                    console.error('데이터를 가져오는 중 오류 발생:', error);
                    alert('데이터를 불러오는 데 실패했습니다.');
                }
            }
        </script>
    </body>
</html>