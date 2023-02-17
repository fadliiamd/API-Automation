describe('Update user with PUT', () => {
    it('Update user', () => {
        var updateUser = {
            "name": 'Fadli Amada',
            "job": 'QA Engineer'
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', updateUser).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(updateUser.name)
        });
    });
});