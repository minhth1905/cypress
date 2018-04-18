describe('Tài khoản học sinh', function() {

  context('Tham gia lớp học', function(){
    beforeEach(function(){
      // cy.wait(1000);
      cy.visit('https://lophoc.sachmem.vn/main/home');
      cy.contains('Đăng nhập bằng Sách Mềm').click();
      cy.get('#user_email').type('tranthihue.apd@gmail.com');
      cy.get('#user_password').type('12345678');
      cy.get('#new_user > div:nth-child(6) > input').click();
      cy.wait(5000);
      cy.get('#navbarSupportedContent > ul.navbar-nav.mr-auto.ng-scope > li > a').click();
      cy.get('body > div > div > div.content-body.ng-scope > div > div > div > div.col-md-3.col-xs-12.border-box.responsive-content > div:nth-child(2)').click();
    })

    it('Test case Tham gia lớp học thành công', function(){
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > input').type('i0dsjZP');
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').click();
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').should('not.be.visible');
    })

    it('Test case Tham gia lớp học thất bại', function(){
       cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > input').type('2P4Ombb');
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').click();
      cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > input').should('be.visible');
    })
  })

})
