describe('debug test',()=>{

    beforeEach(() => {
        cy.visit('http://www.baidu.com/')
    })


    it('Debugger1', function () {
        cy.get("#kw").type('C')
        debugger
        cy.get("#kw").type('y')
        cy.get("#kw").type('p')
    });

    it('Debugger2', function () {
        cy.get("#kw").type('C').then((item)=>{
            debugger
        })
        cy.get("#kw").type('y')
        cy.get("#kw").type('p')
    });

    it('Debug', function () {
        cy.get("#kw").type('C').debug()
        cy.get("#kw").type('y').debug()
        cy.get("#kw").type('p')
    });

    it('pause', function () {
        cy.get("#kw").type('C').pause()
        cy.get("#kw").type('y')
        cy.get("#kw").type('p')
    });
})

Cypress.on('uncaught:exception',(err, runnable) => {
    console.log('Jerry errors!')
    return false
})