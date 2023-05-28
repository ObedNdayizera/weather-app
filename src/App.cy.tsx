import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    //@ts-ignore
    cy.mount(<App />);
  })  
  
  it('displays the correct buttons', () => {
    cy.get('[data-cy="navbar"]').should('be.visible');
    cy.get('[data-cy="button"]').should('have.length', 1);

  });
})