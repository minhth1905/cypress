describe('Kiểm thử hệ thống', function() {

  context('Đăng nhập', function(){
    beforeEach(function(){
      // cy.wait(1000);
      cy.visit('https://lophoc.sachmem.vn/main/home');
    })

    it('Test case đăng nhập thành công', function(){
      cy.contains('Đăng nhập bằng Sách Mềm').click();
      // cy.get('.fa-sign-in').should('include', '/signin')
      cy.get('#user_email').type('thaihoc.vnu@gmail.com');
      cy.get('#user_password').type('qqqqqqqq');
      cy.get('#new_user > div:nth-child(6) > input').click();

      cy.url().should('include', 'https://lophoc.sachmem.vn');
       cy.wait(2000);
      cy.get('#navbardrop > span.padding-5px.ng-binding').should('contain', 'hi hi');
    })
  })
})
