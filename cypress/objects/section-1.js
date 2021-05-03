const Section1 = {
  /**
   * A literal is considered static, stable strings (eg. titles, form labels, ...)
   */
  
  literals: {
    WEBSITE_LINK: 'http://localhost:8080/section-1',
    ID_COL_INDEX:0,
    FIRSTNAME_COL_INDEX:1,
    LASTNAME_COL_INDEX:2,
    DOB_COL_INDEX:3,
    ROLE_COL_iNDEX:4  

  },

  /**
   * An element is a selector for any DOM element (eg. [data-test="xxx"], #id, ...)
   */
  elements: {
    AlayaTable: '[data-test=user-table]',
    ShowTable_Bt: '[data-test=table-toggle-button]', 

    Form:'[data-test=signup-form]',
    ShowForm_Bt:'[data-test=form-toggle-button]',

    Name_Text:'[data-test=full-name-input]',
    Age:'[data-test=age-input]',
    Gender_DropDown:'[data-test=gender-select]',
    Nurse_Check:'[data-test=nurse-input]',
    Submit_Bt:'[data-test=submit-btn]'
   },

  /**
   * An action should be pretty self explanatory! It consists of all the method performing
   * a particular action from clicking a simple button to doing complex assertions.
   */
  actions: {
    /**
     * Example of action.
     * In this example, we are grabbing a sample element, clicking on it and asserting the api answer.
     *
     * This is only used as an example and can be safely deleted.
     */


    CaculateYearsFromDOB(dobText)
    {
      var array=dobText.split("/");
      var dob_d1 = new Date(array[2],array[0],array[1]).getFullYear();
      var dob_d2 = new Date().getFullYear();

      var years = dob_d2-dob_d1;

      return years;
    },
},

}

module.exports = { Section1 }
