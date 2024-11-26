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
                        <h1 class="mt-4">대시보드</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">대시보드</li>
                        </ol>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                전시회 데이터 테이블
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                    <tr>
                                        <th>전시명</th>
                                        <th>연계기관명</th>
                                        <th>자료생성일자</th>
                                        <th>이미지</th>
                                        <th>전시ID</th>
                                        <th>조회수</th>
                                        <th>행사 장소</th>
                                        <th>문의</th>
                                        <th>시작일자</th>
                                        <th>종료일자</th>
                                        <th>요금</th>
                                        <th>성인</th>
                                        <th>유아</th>
                                        <th>노인</th>
                                        <th>전시회 상태</th>
                                    </tr>
                                    </thead>
                                    <tbody id="exhibitionTableBody">
                                    <!-- 데이터가 여기에 삽입됩니다 -->
                                    </tbody>

                                </table>

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
                                &middot;
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
            document.addEventListener('DOMContentLoaded', loadExhibitionData);

            async function loadExhibitionData() {
                try {
                    // Axios를 이용한 GET 요청
                    const response = await axios.get('http://localhost:9401/api/admin/exhibitions/\${exhibition.localId}', {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    // 응답 데이터 확인
                    const exhibitionData = response.data; // 서버에서 받아온 데이터를 사용

                    // 테이블 본문 가져오기
                    const tableBody = document.getElementById('exhibitionTableBody');

                    // 기존 테이블 내용 초기화
                    tableBody.innerHTML = '';

                    // 받아온 데이터를 테이블에 추가
                    exhibitionData.forEach((exhibition, index) => {
                        const row = `
                    <tr>
                        <td>\${exhibition.title || 'N/A'}</td>
                        <td>\${exhibition.cntcInsttNm || 'N/A'}</td>
                        <td>\${exhibition.issuedDate || 'N/A'}</td>
                        <td>\${exhibition.imageUrl || 'N/A'}</td>
                        <td>\${exhibition.localId || 'N/A'}</td>
                        <td>\${exhibition.viewCount || 'N/A'}</td>
                        <td>\${exhibition.eventSite || 'N/A'}</td>
                        <td>\${exhibition.contactPoint || 'N/A'}</td>
                        <td>\${exhibition.contributor || 'N/A'}</td>
                        <td>\${exhibition.startPeriod || 'N/A'}</td>
                        <td>\${exhibition.endPeriod || 'N/A'}</td>
                        <td>\${exhibition.description || 'N/A'}</td>
                        <td>\${exhibition.charge || 'N/A'}</td>
                        <td>\${exhibition.adultPrice || 'N/A'}</td>
                        <td>\${exhibition.infantPrice || 'N/A'}</td>
                        <td>\${exhibition.seniorPrice || 'N/A'}</td>
                        <td>\${exhibition.exhibitionStatus || 'N/A'}</td>
                        <td class="scrollable-description">
                        <td><button type="button" class="save-button" onclick="#">저장</button></td>
                    </tr>
                `;
                        tableBody.insertAdjacentHTML('beforeend', row);
                    });

                    // 저장 버튼에 이벤트 리스너 추가
                    document.querySelectorAll('.save-button').forEach(button => {
                        button.addEventListener('click', async (event) => {
                            const index = event.target.getAttribute('data-index');
                            const exhibition = exhibitionData[index];

                            // 내용 수정 후 저장할 데이터
                            const exhibitionDataToSave = {
                                title: exhibition.title || '',
                                cntcInsttNm: exhibition.cntcInsttNm || '',
                                collectedDate: exhibition.collectedDate || '',
                                issuedDate: exhibition.issuedDate || '',
                                imageUrl: exhibition.imageUrl || '',
                                localId: exhibition.localId || '',
                                url: exhibition.url || '',
                                viewCount: exhibition.viewCount || 0,
                                subDescription: exhibition.subDescription || '',
                                spatialCoverage: exhibition.spatialCoverage || '',
                                eventSite: exhibition.eventSite || '',
                                genre: exhibition.genre || '',
                                duration: exhibition.duration || '',
                                numberPages: exhibition.numberPages || '',
                                tableOfContents: exhibition.tableOfContents || '',
                                author: exhibition.author || '',
                                contactPoint: exhibition.contactPoint || '',
                                contributor: exhibition.contributor || '',
                                audience: exhibition.audience || 0,
                                charge: exhibition.charge || '',
                                period: exhibition.period || 0,
                                eventPeriod: exhibition.eventPeriod || 0,
                                description: exhibition.description || ''
                            };

                            try {
                                const saveResponse = await axios.post('/api/admin/exhibitions', exhibition, {
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
                    console.error('Error fetching exhibition data:', error);
                    alert('데이터를 불러오는 데 실패했습니다.');
                }
            }
        </script>
    </body>
</html>
