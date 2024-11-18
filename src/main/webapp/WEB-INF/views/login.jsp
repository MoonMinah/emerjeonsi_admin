<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Admin Login</title>
        <link href="/admin/css/styles.css" rel="stylesheet" type="text/css" />
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
    </head>
    <body class="bg-login">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-6">
                                    <div class="card-body">
                                            <h3 class="text-center font-weight-light my-4 login-header-font">관리자 로그인</h3>
                                        <form id="adminLoginForm" action="/login" method="post">
                                            <div class="form-floating mb-3 login-input-font">
                                                <input class="form-control" id="inputEmail" type="text" name="adminId" placeholder="관리자 아이디" />
                                                <label for="inputEmail">관리자 아이디</label>
                                            </div>
                                            <div class="form-floating mb-3 login-input-font">
                                                <input class="form-control" id="inputPassword" type="password" name="adminPassword" placeholder="관리자 비밀번호" />
                                                <label for="inputPassword">관리자 비밀번호</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <input type="submit" class="btn" value="로그인">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="/admin/js/scripts.js"></script>
    </body>
</html>
