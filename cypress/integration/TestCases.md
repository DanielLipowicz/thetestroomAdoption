### Assumptions
- All scenario are dedicated for regression or smoke tests.
- I assumed lack of requirements, so there is no specific business logic implemented on scenario level 
- Scenario ensures that user would be able to reach main page purpose - pass adoption information for a page owner
- There is an assumption that technology used on a frontend is clean HTML with JS script(no network requests implemented). Otherwise, assertion like GET/POST/PUT request will be part of testing scripts. 
- There is an assumption that we don't have access to database/data on page

#### Scenario 1 : landing page and sidebar - page navigation

| Step | Expected behaviour |
| ------------- |-----:|
| Visit adoption landing page| Landing page should be loaded|
| Click on adoption link in the sidebar| Adoption page should be loaded|
| Click on about link in the sidebar| About page should be loaded|
| Click on Contact link in the sidebar| Contact page should be loaded|
| Click on Home link in the sidebar| Landing page should be loaded|

#### Scenario 2: Contact us form
| Step | Expected behaviour |
| ------------- |-----:|
| Go to contact us form| There should be following fields:|
| Ensure that element exist |Name input|
| Ensure that element exist |Purpose of contact field - radio button - element should be visible and editable|
| Ensure that element exist |Additional options (zoo volunteer, email newsletter) - element should be visible and editable|
| Ensure that element exist |Donation select - element should be visible and editable|
| Ensure that element exist |Address input - element should be visible and editable|
| Ensure that element exist |Postcode input - element should be visible and editable|
| Ensure that element exist |Email input - element should be visible and editable|
| Fill all elements | element should be filed |
| Send contact us form | Confirmation page should be visible | 
| Validate text on the page | We have your message. Many thanks for your message. We will contact you about your query as soon as possible. In the mean time why not have a look at our list of animals we have available for adoption in the adoption page. |

#### Scenario 3 Adoption pass
Preconditions: there is a pet available for adoption

| Step | Expected behaviour |
| ------------- |-----:|
| Go to adoption page | The adoption page should be open |
| Click on a Check button next to available animal| Adoption form should be open and following fields should be present|
| | Name text fields should be present|
| | Address text fields should be present|
| | Postcode text fields should be present|
| | Email text fields should be present|
| | Check button should be present|
| Fill all fields | All fields should be filled|
| Click on check button | Information about adoption should be displayed: "YOUR ADOPTION HAS BEEN SET UP" |

#### Scenario 4 Adoption fails
Preconditions: there is a pet not available for adoption

| Step | Expected behaviour |
| ------------- |-----:|
| Go to adoption page | The adoption page should be open |
| Click on a Check button next to not available animal| Adoption fail page should be displayed with text: "SORRY, ANIMAL NOT AVAILABLE"|

#### Scenario 5 adoption date

| Step | Expected behaviour |
| ------------- |-----:|
| Go to adoption page | The adoption page should be open |
| Change adoption date| adoption date should be changed and all page element should be displayed | 
| Select different adoption date| adoption date should be changed and all page element should be displayed | 