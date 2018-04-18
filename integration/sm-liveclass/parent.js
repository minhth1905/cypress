describe('Tài khoản phụ huynh', function() {

  context('Thêm mới phần thưởng', function(){
    beforeEach(function(){
      // cy.wait(1000);
      cy.visit('https://lophoc.sachmem.vn/main/home');
      cy.contains('Đăng nhập bằng Sách Mềm').click();
      cy.get('#user_email').type('hoangtudaiduong19051996@gmail.com');
      cy.get('#user_password').type('12345678');
      cy.get('#new_user > div:nth-child(6) > input').click();
      cy.wait(5000);
      cy.get('#navbarSupportedContent > ul.navbar-nav.mr-auto.ng-scope > li:nth-child(1) > a').click();
      cy.get('body > div > div > div.content-body.ng-scope > div > div > div > div > div.col-md-9.col-xs-12.ng-scope > div > div.col-md-8.mx-auto.col-xs-12 > button:nth-child(2)').click();
      cy.get('body > div > div > div.content-body.ng-scope > div > div > div > div > div.col-md-9.col-xs-12.ng-scope > div > div.col-md-12.ng-scope > div > div.text-right > button').click();
    })

    it('Test case Thêm mới phần thưởng thành công', function(){
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(1) > input').type("Xe máy");
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(2) > input').type(22);
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').click();
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').should('not.be.visible');
    })

    it('Test case Nhập thiếu thông tin', function(){
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(2) > input').type(22);
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').click();
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div:nth-child(1) > div > div').should('contain', 'Trường này không được để trống');
    })
  })

  context('Nhắn tin', function(){
    beforeEach(function(){
      cy.visit('https://lophoc.sachmem.vn/main/home');
      cy.contains('Đăng nhập bằng Sách Mềm').click();
      cy.get('#user_email').type('hoangtudaiduong19051996@gmail.com');
      cy.get('#user_password').type('12345678');
      cy.get('#new_user > div:nth-child(6) > input').click();
      cy.wait(5000);
      cy.get('#navbarSupportedContent > ul.navbar-nav.mr-auto.ng-scope > li:nth-child(2) > a').click();
    })

    it('Test case Nhắn tin thành công', function(){

      cy.get('body > div > div > div.content-body.ng-scope > div > div > div > div.col-md-8.border-box.ng-scope > div:nth-child(3) > div > div > form > div > div.col-md-10 > textarea').type("Chào cô giáo");
      cy.get('body > div > div > div.content-body.ng-scope > div > div > div > div.col-md-8.border-box.ng-scope > div:nth-child(3) > div > div > form > div > div.col-md-2 > button > i').click();
      console.log(cy.get('.me').last());
      cy.get('.me').last().should('contain', 'Chào cô giáo');
    })

    it('Test case Không nhập tin nhắn', function(){
      cy.get('body > div > div > div.content-body.ng-scope > div > div > div > div.col-md-8.border-box.ng-scope > div:nth-child(3) > div > div > form > div > div.col-md-2 > button').should('be.disabled');
    })
  })

})
