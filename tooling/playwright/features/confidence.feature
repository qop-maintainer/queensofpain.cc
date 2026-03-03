Feature: As a visitor I want to visit the live website in order to be confident it is working

  @timeout:5000
  Scenario: Visit the Domain
    Given I have an open browser
    When I navigate to "https://queensofpain.cc/"
    Then I see "Home - Queens of Pain" in the title
    And I have no problems navigating the site
