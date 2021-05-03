const section1 = require('../objects/section-1');
const { Section1 } = require('../objects/section-1')

describe('Problem 1', () => {
  /**
   * Example:
   * To access assertSampleApiResponse() from Section1, you can do: Section1.actions.assertSampleApiResponse();
   *
   * Test away!
   */
  before(() => 
  {
    cy.visit(Section1.literals.WEBSITE_LINK);

  })

  //DOM: Tables
  //1. Assert that the table is not visible
  it('VerifyTableIsNotVisible', () => {

    cy.get(Section1.elements.AlayaTable).should('not.visible');
  })

  //2. After clicking the "Show table" button, assert the table is visible
  it('Click&VerifyTableVisibility', () => {
    cy.get(Section1.elements.ShowTable_Bt).click();
    cy.get(Section1.elements.AlayaTable).should('be.visible');
  })

  //3. Assert that the table is 5 columns wide
  it('ShouldBe5Columns', () => {
    cy.get(Section1.elements.AlayaTable).
      find('tr:first').
      find('th').
      should('have.length', 5);
  })

  //4. Assert that the table is 10 rows long, excluding the first (header) row
  it('ShouldBe10Rows', () => {
    cy.get(Section1.elements.AlayaTable).
    find('tr').
    not('.table-header').
    should('have.length', 10) ;
  })

  //5. Assert that an admin has the ID of 1
  it('AdminHaveID_1', () => {
     
      var admin_Row=cy.get(Section1.elements.AlayaTable).
          find('tr').
          not('.table-header').should('contain','admin');
                        

      admin_Row.find('th').eq(Section1.literals.ID_COL_INDEX).
        should('have.text','1');
  })

  //6. Assert that at least 5 entries have the role "user"
  it('AtLeast5UserEntries', () => {
    
      cy.get(Section1.elements.AlayaTable).
        find('tr').
        not('.table-header').
        should('contain','user').        
        should('have.length.to.be.at.least',10);
                          
  })

  //7. Assert there are exactly 3 people older than 60 years old
  it('Exactly3PeopleOlderThan60', () => {
        
    var ageCount=0;
    cy.get(Section1.elements.AlayaTable).
      find('tr').
      not('.table-header').
      each(($el,index,$list) =>{
        const dobText= $el.find('th').eq(Section1.literals.DOB_COL_INDEX);
        const years = Section1.actions.CaculateYearsFromDOB(dobText.text());
        cy.log('Caculated Age '+years);

        if(years > 60)
          ageCount++;        

      })
      .then(()=> {
        expect(ageCount).to.equal(3);
      });
            
  })

  //DOM: FORMS
  //1. Assert that the form is not visible
  it('VerifyFormIsNotVisible', () => {

    cy.get(Section1.elements.Form).should('not.visible');
  })

  //2. After clicking the "Show form" button, assert that the form is visible
  it('ClickShowFormButton', () => {
    cy.get(Section1.elements.ShowForm_Bt).click();
    cy.get(Section1.elements.Form).should('be.visible');

  })

  //3. Fill in the "Name" and "Age" inputs, and assert that both inputs are filled
  it('FillName&Age', () => {

    //Insert Full Name
    cy.get(Section1.elements.Name_Text)
      .type('Amanda').should('have.value', 'Amanda')

    //Insert Age
    cy.get(Section1.elements.Age)
    .type('24').should('have.value', '24')
  
  })

  //4. Select "Female" from the select option, and assert that the value is "female"
  it('SelectGender', () => {

    //Gender
    cy.get(Section1.elements.Gender_DropDown).select('female')
    .should('have.value', 'female')
  })

  //5. Tick the "Nurse" checkbox and assert that the value "nurse" is true
  it('SelectNurse', () => {

    //Nurse
    cy.get(Section1.elements.Nurse_Check).check()
    .should('be.checked')
  })

  //6. Click on the "Submit" button and assert that there is an 
  //alert window showing with the text "Form submitted!"

  it('Submit&Verify', () => {
    const stub = cy.stub()  
    cy.on ('window:alert', stub)

    //Nurse
    cy.get(Section1.elements.Submit_Bt).click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Form submitted!')   
    })
  })

})
