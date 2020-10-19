# The Test Room - Adoption - Cypress automation

## Project setup
Install all dependencies `npm install`

## Test run
After all dependencies installation:
 - `npm run cypress` to open cypress console
 - `npm run cypress.run` to run all cypress test in headless mode

## Test scenarios
Test cases was elaborated in `cypress/integration/TestCases` - there are more detailed TC - in some specific projects it could be required.
### Generalized scenarios in gherkin (BDD):

``` Gherkin
Scenario: Adoption page - landing page and sidebar
Given I'm on adoption landing page
When I go to <pageTitle> link on sidebar
Then <pageRoute> subpage should be loaded

Example
| pageTitle | pageRoute |
| Adoption | adoption.html |
| About | about.html |
| Contact | contact.html |
| Home | index.html |

Scenario: Contact us form
Given I'm on the contact us form
When I input all details in the form
Then form should be sent with success
And contact_confirm.html page should be loaded

Scenario: Adoption page - adoption pass
Given I'm on adoption page
When I try to adopt available pet
Then adoption form should be present (adoption_pass.html)
When I fill and submit form
Then I should see information about setup adoption adoption_pass_confirm.html

Scenario: Adoption page - adoption fail
Given I'm on adoption page
When I try to adopt not available pet
Then adoption fail information should be present (adoption_fail.html)

Scenario: Adoption page - adoption date
Given I'm on adoption page
When I'm on page
Then I should be able to select start date of adoption
And there should be <options> 

Example
| Option name |
| Today |
| First day of the next week |
| First day of the next month |
```

## Used tools
- [cypress](www.cypress.io) - UI automation framework
- [chanceJS](https://chancejs.com/) - data generator