describe('Tài khoản giáo viên', function() {

  context('Thêm mới lớp học', function(){
    beforeEach(function(){
      // cy.wait(1000);
      cy.visit('https://lophoc.sachmem.vn/main/home');
      cy.contains('Đăng nhập bằng Sách Mềm').click();
      cy.get('#user_email').type('thaihoc.vnu@gmail.com');
      cy.get('#user_password').type('qqqqqqqq');
      cy.get('#new_user > div:nth-child(6) > input').click();
      cy.wait(4000);
      cy.get('#navbarSupportedContent > ul.navbar-nav.mr-auto.ng-scope > li:nth-child(1) > a').click();
      cy.contains('Thêm lớp học').click();
    })

    it('Test case Thêm mới lớp học thành công', function(){
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(1) > input').type("Lớp 1");
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').click();
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').should('not.be.visible');
    })

    it('Test case Nhập thiếu thông tin', function(){
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').click();
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(1) > div > div').should('contain', 'Trường này không được để trống');
    })
  })

  context('Thêm mới học sinh', function(){
    beforeEach(function(){
      // cy.wait(1000);
      cy.visit('https://lophoc.sachmem.vn/main/home');
      cy.contains('Đăng nhập bằng Sách Mềm').click();
      cy.get('#user_email').type('thaihoc.vnu@gmail.com');
      cy.get('#user_password').type('qqqqqqqq');
      cy.get('#new_user > div:nth-child(6) > input').click();
      cy.wait(4000);
      cy.get('#navbarSupportedContent > ul.navbar-nav.mr-auto.ng-scope > li:nth-child(1) > a').click();
      cy.contains('Lớp học mẫu').click();
      cy.get('body > div.ng-scope > div > div.content-body.ng-scope > div > div:nth-child(2) > div > div:nth-child(1) > div.col-4 > div > button').click();
    })

    it('Test case Thêm mới học sinh thành công', function(){

      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > textarea').type("Học sinh A");
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').click();
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').should('not.be.visible');
    })

    it('Test case Nhập thiếu thông tin', function(){
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > textarea').type("Học sinh A");
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').click();
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').should('be.visible');
    })
  })

  context('Kiểm tra câu hỏi', function(){
    beforeEach(function(){
      // cy.wait(1000);
      cy.visit('https://lophoc.sachmem.vn/main/home');
      cy.contains('Đăng nhập bằng Sách Mềm').click();
      cy.get('#user_email').type('thaihoc.vnu@gmail.com');
      cy.get('#user_password').type('qqqqqqqq');
      cy.get('#new_user > div:nth-child(6) > input').click();
      cy.wait(4000);
      cy.get('#navbarSupportedContent > ul.navbar-nav.mr-auto.ng-scope > li:nth-child(2) > a').click();
      cy.get('body > div > div > div.content-body.ng-scope > div > div > div.row.padding-10 > div:nth-child(2) > div > div.card-footer > div > div:nth-child(2)').click();
    })

    it('Test case Chọn lớp học', function(){
      cy.url().should('include', '/main/liveView');
    })

    it('Test case Hiển thị thành công màn hình câu hỏi', function(){
      cy.contains('Lớp học mẫu').click();
      cy.wait(2000);
      cy.url().should('include', 'main/question');
    })
  })
})
