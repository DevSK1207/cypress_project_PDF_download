/// <reference types="cypress" />



describe('test automation script to download PDF file', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Find the download text', () => {
        cy.get(':nth-child(4) > a > strong').scrollIntoView().wait(1000).click()
    });

    it('Download the file and store in local storage', () => {

        cy.url().then(url => {
            cy.request({
                method: 'GET',
                url: url,
                encoding: 'binary'
            })
                .then((response) => {

                    try {

                        cy.writeFile(`cypress/downloads/selenium-cheat-sheet.pdf`, response.body, 'binary')
                            .then(() => {
                                cy.log(`selenium-cheat-sheet.pdf file downloaded successfully.`);
                                cy.readFile('cypress/downloads/selenium-cheat-sheet.pdf')
                                    .should('exist')
                            })

                    } catch (error) {
                        cy.log(`Error downloading: ${error}`);

                    }

                })
        });
    });


});