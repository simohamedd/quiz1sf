const quizData = [
  // --- Existing 60 Questions ---
  {
    question: "Users at Cloud Kicks are reporting different options when uploading a custom picklist on the Opportunity object based on the kind of opportunity. Where Should an administrator update the option in the picklist?",
    options: ["Fields and relationships", "Related lookup filters", "Record Type", " Picklist value sets"],
    answer: "C",
    type: "single"
  },
  {
    question: "Northern Trail Outfitters is using one profile for all of its marketing users, providing read-only access to the Campaign object. A few marketing users now require comprehensive edit access on Campaigns. How should an administrator fulfill this request?",
    options: ["Permission sets", "Organization-wide defaults", "Marketing user checkbox", "Field-level security"],
    answer: "C",
    type: "single"
  },
  {
    question: "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response include the top five troubleshooting tips that could help solve the customer's issue. What should the administrator suggest to meet these requirements?",
    options: ["Auto-Response Rules", "Email Alerts", "Knowledge Articles", "Assignment Rules"],
    answer: "A",
    type: "single"
  },
  {
    question: "Sales and Customer Care at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact. What should the administrator use to achieve this?",
    options: ["Related Lookup Filters", "Compact Layout Editor", "Page Layout editor", "Search Layout Editor"],
    answer: "C",
    type: "single"
  },
  {
    question: "Northern Trail Outfitters has requested that when the Referral Date field is updated on the custom object Referral Source, the parent object Referral also needs to be updated. Which automation solution should an administrator use to meet this request?",
    options: ["Lightning Web Component", "Approval Process", "Workflow Field Update", "Process Builder"],
    answer: "D",
    type: "single"
  },
  {
    question: "Which two solutions could an administrator find on the AppExchange to enhance their organization? Choose 2 answers",
    options: ["Communities", "Consultants", "Components", "Customers"],
    answer: "BC",
    type: "multiple",
    count: 2
  },
  {
    question: "When users log in to Salesforce via the user interface, which two settings does the system check for authentication? Choose 2 answers",
    options: ["The user's Two-Factor Authentication for API Logins permission", "The role IP address restrictions", "The user's profile login hours restrictions", "The user's Two-Factor Authentication for User Interface Logins permission"],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: " A user at Cloud Kicks is having issues logging in to Salesforce. The user asks the administrator to reset their password. Which two options should the administrator consider when resetting the user’s password?",
    options: ["Resetting the password will change the user’s password policy.", "Single sign-on users can reset their own passwords using the forgot password link.", "Resetting a locked-out user’s password automatically unlocks the user’s account.", ". After resetting a password, the user may be required to activate their device to successfully login to Salesforce."],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: "AW Computing has six sales teams in a region. These teams always consist of the same account manager, engineer, and assistant. What should the administrator configure to make it easier for teams to collaborate with the same customer?",
    options: ["Enable and configure standard opportunity teams with splits.", "Enable account teams and show the users how to set up a default account team.", "Create a queue for each team and assign account ownership to the queue.", "Propose the users manually share all their accounts with their teammates."],
    answer: "B",
    type: "single"
  },
  {
    question: "Cloud Kicks has decided to delete a custom field. What will happen to the data in the field when it is deleted?",
    options: ["The data in the field is stored for 20 days.", "The data is permanently deleted.", "The data associated with the field is required.", "The data is restorable from the recycle bin"],
    answer: "B",
    type: "single"
  },
  {
    question: "Executives at Cloud Kicks have reported that their dashboards are showing inaccurate data. The administrator has discovered been changing the source reports. Which two actions should the administrator take to preserve the integrity of the source reports? Choose 2 answers",
    options: ["Create a new report folder with viewer access.", "Move the dashboard to the user's private folder.", "Move the dashboard reports to the view-only folder.", "Change the dashboard to be a dynamic dashboard."],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: "At universal Containers, users would like to be able to share Salesforce records with other members of their team, while collaborating around general topics as well. Which are two considerations for enabling this functionality? Choose 2 answers",
    options: ["Collaboration groups are created automatically for every department.", "Object layouts should be configured to include the groups related list.", "The Add Record action must be configured in the group publisher.", "An administrator needs to create a group to enable record sharing."],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: "Cloud Kicks needs to be able to show different picklist values for sales and marketing users. Which two options will meet this requirement? Choose 2 answers",
    options: ["One page layout, two record types, one picklist", "Two page layouts, one record type, two picklists", "Two permission sets, one record type, one picklist", "One record type, two profiles, one picklist"],
    answer: "AB",
    type: "multiple",
    count: 2
  },
  {
    question: "An administrator has assigned a permission set group with the two-factor authentication for User Interface Logins permissions and the two-factor authentication for API Logins permission to a group of users. Which two prompts will happen when one of the users attempts to log in to Data Loader? Choose 2 answers",
    options: ["Users need to download and install an authenticator app on their mobile device.", "Users need to enter a verification code from email or SMS, whichever has higher priority.", "Users need to connect an authenticator app to their Salesforce account.", "Users need to get a security token from a trusted network using Reset My Security Token."],
    answer: "AC",
    type: "multiple",
    count: 2
  },
  {
    question: "Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
    options: ["Create a workflow rule with an outbound message.", "Set up a scheduled process in Process Builder.", "Configure a scheduled flow in Flow Builder.", "Use a process to update the account when it is edited."],
    answer: "C",
    type: "single"
  },
  {
    question: "Cloud Kicks wants a report to categorize accounts into small, medium, and large based on the dollar value found in the Contract Value Field. What feature should an administrator use to meet this request?",
    options: ["Detail Column", "Bucket Column", "Group Rows", "Filter Logic"],
    answer: "B",
    type: "single"
  },
  {
    question: "Universal Containers requires that when an Opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to implement this request?",
    options: ["Quick Action", "Workflow Rule", "Flow Builder", "Outbound Message"],
    answer: "C",
    type: "single"
  },
  {
    question: "Which two capabilities are considerations when marking a field as required in Object Manager? Choose 2 answers",
    options: ["The field is not required to save records via the API on that object", "The field is universally required to save a record on that object.", "The field is added to every page layout on that object.", "The field is optional when saving records via web-to-lead and web-to-case"],
    answer: "BC",
    type: "multiple",
    count: 2
  },
  {
    question: "The administrator at Cloud Kicks has created an approval process for time off requests. Which two automated actions are available to be added as part of the approval process? Choose 2 answers",
    options: ["Field Update", "Chatter Post", "Auto launched Flow", "Email Alert"],
    answer: "AD",
    type: "multiple",
    count: 2
  },
  {
    question: "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network. What are two considerations for this configuration? Choose 2 answers",
    options: ["IP address restrictions are set on the profile or globally for the org.", "Users can change their password to avoid login IP restrictions.", "Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.", "Single sign-on will allow users to log in from anywhere."],
    answer: "AC",
    type: "multiple",
    count: 2
  },
  {
    question: "What are three characteristics of a master-detail relationship? Choose 3 answers",
    options: ["The master object can be a standard or custom object.", "Permissions for the detail record are set independently of the master.", "Each object can have up to five master-detail relationships.", "Roll-up summaries are supported in master-detail relationships.", "The owner field on the detail records is the owner of the master record"],
    answer: "ADE",
    type: "multiple",
    count: 3
  },
  {
    question: "The sales manager at Cloud Kicks wants to set up a business process where opportunity discounts over 30% need to be approved by the VP of sales. Any discounts above 10% need to be approved by the user's manager. The administrator has been tasked with creating an approval process. Which are two considerations the administrator needs to review before setting up this approval process? Choose 2 answers",
    options: ["Create a custom Discount field on the opportunity to capture the discount amount", "Populate the Manager standard field on the sales users' User Detail page.", "Configure two separate approval processes", "Allow the submitter choose the approver manually."],
    answer: "AB",
    type: "multiple",
    count: 2
  },

  // --- New Questions (21–60) ---

  {
    question: "An administrator at Cloud Kicks has a flow in production that is supposed to create new records. However, no new records are being created, What could the issue be?",
    options: ["The flow is read only", "The flow is inactive.", "The flow URL is deactivated.", "The flow trigger is missing"],
    answer: "B",
    type: "single"
  },
  {
    question: "An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variable for use later in the flow. What flow element should the administrator add?",
    options: ["Assignments", "Get Records", " Create Records", "Update Records"],
     answer: "B",
    type: "single"
  },
  {
    question: "Ursa Major Solar has its business hours set from 9:00 AM to 5:00 PM for the reps that are on pacific time. The reps on Eastern Time need business hours set to start 3 hours earlier to cover for support. How should an administrator solve for this issue?",
    options: ["Set temporary business hours for each time zone", "Adjust the currant business hours to accommodate the Eastern Time Zone.", "Create one set of business hours per time zone.", "Allow the reps to set business hours manually"],
    answer: "C",
    type: "single"
  },
  {
    question: " Sales reps at Northern Trail Outfitters have asked for a way to change the Probability field value of their Opportunities. What should an administrator suggest to meet this request?",
    options: ["Define a new Stage picklist value.", "Create a custom field on Opportunity.", "Configure Forecasting support.", "Make the field editable on page layouts."],
    answer: "D",
    type: "single"
  },
  {
    question: "Universal Containers requires a different Lightning page to be displayed when Accounts are viewed in the Sales Console and in the Service Console. How should an administrator meet this requirement?",
    options: ["Update page layout assignments.", "Define multiple record types", "Assign Lightning pages as app default.", "Create different user profiles"],
    answer: "A",
    type: "single"
  },
  {
    question: "The Sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure?",
    options: ["Sales Quote", "Opportunity List View", "Forecasting", "Opportunity Stages"],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: "Which two actions should an administrator perform with Case escalation rules? ",
    options: ["Re-open the Case.", "Send email notifications.", "Change the Case Priority.", "Re-assign the Case."],
    answer: "BD",
    type: "multiple",
    count: 2
  },
  {
    question: "AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record. What should AWC use to track Contacts?",
    options: ["Use a partner community to track the Contacts.", "Create a new Contact record for each agency.", "Create a Junction object to track many-to-many relationship.", "Enable Contacts to multiple Accounts."],
    answer: "D",
    type: "single"
  },
  {
    question: "An administrator gets a rush request from Human Resources to remove a user’s access to Salesforce Immediately. The user is part of a hierarchy field called Direct Manager. What should the administrator do to fulfill the request?",
    options: ["Freeze the user to prevent them from logging in while removing them from being referenced in the Direct Manager field.", "Deactivate the user and delete any records where they are referenced in the Direct Manager field.", "Change the user’s profile to read-only while removing them from being referenced in the Direct Manager Field.", "Delete the user and leave all records where they were referenced without changes."],
    answer: "A",
    type: "single"
  },
  {
    question: "An administrator created a record trigger flow to update contacts. How should the administrator reference the values of the active record the flow is running on?",
    options: ["Use the {!Contact.Id} global variable.", "Use the {!Account.Id} record variable.", "Use the $Record global variable.", "Use the Get Records element to find the Id."],
    answer: "C",
    type: "single"
  },
  {
    question: "A sales rep has a list of 300 accounts with contacts that they want to load at one time. Which tool should the administrator utilize to import the records to Salesforce?",
    options: ["Dataloader.io", "Data Loader", "Manual Import", "Data Import Wizard"],
    answer: "D",
    type: "single"
  },
  {
    question: "Sales users at Universal Containers are reporting that it is taking a long time to edit opportunity records. Normally, the only field they are editing is the Stage field. Which two options should the administrator recommend to help simplify the process? Choose 2 answers",
    options: ["Add a path for stage to the opportunity record page.", "Use a Kanban list view for Opportunity.", "Configure an auto-launched flow for Opportunity editing.", "Create a simplified Opportunity page layout."],
    answer: "AB",
    type: "multiple",
    count: 2
  },
  {
    question: "Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation. Which feature should an administrator use to fulfill this requirement?",
    options: ["Assignment Rule", "Case Escalation Rule", "Omni-Channel Supervisor", "Formula Field"],
    answer: "B",
    type: "single"
  },
  {
    question: "Cloud Kicks wants users to only be able to choose Opportunity stage Closed Won if the Lead source has been selected. How should the administrator accomplish this goal?",
    options: ["Make Lead Source a dependent picklist to the Opportunity stage field.", "Configure a validation rule requiring Lead Source when the stage is set to Closed Won.", "Change the Opportunity stage field to read only on the page layout.", "Modify the Opportunity stage as a dependent picklist to the Lead source field."],
    answer: "B",
    type: "single"
  },
  {
    question: "An administrator at Universal Containers needs a simple way to trigger an alert to the director of sales when opportunities reach an amount of $500,000. What should the administrator configure to meet this requirement?",
    options: ["Set up Big Deal Alerts for the amount.", "Enable Opportunity Update Reminders", "Opportunity warning in Kanban View.", "Key Deals component on the homepage."],
    answer: "A",
    type: "single"
  },
  {
    question: "Cloud Kicks wants to allow customers to create their own cases while visiting its public homepage. What should the administrator recommend?",
    options: ["SMS Response", "Web-to-Case", "Email-to-Case", "Omni-Channel"],
    answer: "B",
    type: "single"
  },
  {
    question: "Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns. How should an administrator deliver this information?",
    options: ["Design a standard Campaign report and add the value Won Opportunities in Campaign field.", "Perform periodic data job to update campaign records.", "Create a roll-up summary field on Opportunity to Campaign.", "Add a Total Value Field on campaign and use a workflow rule to update the value when an opportunity is won."],
    answer: "A",
    type: "single"
  },
  {
    question: "An administrator installed a managed package that contains a permission set group. The permission set group that was installed includes Delete access on several objects, and the administrator needs to prevent users in the permission set group from being able to delete records. What should the administrator do to control Delete access?",
    options: ["Use a muting permission set with a permission set group to mute selected permissions.", "Create a new permission set that has Delete access deselected for the objects.", "Create a new role that prevents Delete permissions from rolling up to the users.", "Edit the profile for the users to remove Delete access from the objects"],
    answer: "A",
    type: "single",
  },
  {
    question: "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options. What should an administrator configure to meet these requirements?",
    options: ["Validation rules that ensure that users are entering accurate sales stage information.", "Different page layouts that control the picklist values for the opportunity types.", "Public groups to limit record types and sales processes for opportunities.", "Separate record types and Sales processes for the different types of opportunities."],
    answer: "D",
    type: "single"
  },
  {
    question: "A salesrep has left the company and an administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the teams as is. Which tool should an administrator use to accomplish this?",
    options: ["Data Loader", "Mass Transfer Tool", "Data Import Wizard", "Dataloader.io"],
    answer: "B",
    type: "single"
  },
  {
    question: "The VP of sales at Dreamhouse Realty has requested a dashboard to visualize enterprise sales across the different teams. The key piece of data is the total of all sales for the year and the progress to the enterprise sales goal. What dashboard component will effectively show this number and the proximity to the total goal as a single value?",
    options: ["Table", "Stacked Bar", "Donut", "Gauge"],
    answer: "D",
    type: "single"
  },
  {
    question: "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their websites. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose. How should an administrator configure this requirement?",
    options: ["Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule.", "Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry.", "Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule.", "Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry."],
    answer: "D",
    type: "single"
  },
  {
    question: "Ursa Major Solar uses Opportunity to track sales of solar energy products. The company has two separate sales teams that focus on different energy markets. The Services team also wants to use Opportunity to track installation. All three teams will need to use different fields and stages. How Should the administrator configure this requirement?",
    options: ["Create three sales processes. Create three record types and one page layout.", "Create one sales process. Create three record types and three page layouts.", "Create three sales processes. Create three record types and three page layouts.", "Create one sales process. Create one record type and three page layouts."],
    answer: "C",
    type: "single"
  },
  {
    question: "The administrator at Cloud Kicks has been asked to replace two old workflow rules that are doing simple field updates when a lead is created to improve processing time. What tool should the administrator use to replace the workflow rules?",
    options: ["Quick Action Flow", "Before Save Flow", "Scheduled Flow", "Screen Flow"],
    answer: "B",
    type: "single"
  },
  {
    question: "Ursa Solar Major is evaluating Salesforce for its service team and would like to know what objects were available out of the box. Which three of the standard objects are available to an administrator considering a support use case? Choose 3 answers",
    options: ["Contract", "Case", "Ticket", "Request", "Account"],
    answer: "ABE",
    type: "multiple",
    count: 3
  },
  {
    question: "The marketing team wants a new picklist value added to the Campaign Member Status field for the upsell promotional campaign. Which two solutions should the administrator use to modify the picklist field values? Choose 2 answers",
    options: ["Add the Campaign Member Statuses related list to the Page Layout.", "Edit the picklist values for the Campaign Status in object Manager.", "Mass modify the Campaign Member Statuses related list.", "Modify the picklist value on the Campaign Member Statuses related list."],
    answer: "AB",
    type: "multiple",
    count: 2
  },
  {
    question: "Users have noticed that when they click on a report in a dashboard to view the report details, the values in the report are different from the values displayed on the dashboard. What are the two reasons this is likely to occur? Choose 2 answers",
    options: ["The report needs to be refreshed.", "The dashboard needs to be refreshed.", "The current user does not have access to the report folder.", "The running dashboard user and viewer have different permissions."],
    answer: "BD",
    type: "multiple",
    count: 2
  },
  {
    question: "What are two considerations an administrator should keep in mind when working with Salesforce objects? Choose 2 answers",
    options: ["Custom and standard objects have standard fields.", "Standard objects are included with Salesforce.", "A new standard object can be created.", "Only standard objects support master-detail relationships."],
    answer: "AB",
    type: "multiple",
    count: 2
  },
  {
    question: "Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce. Which field type should an administrator use to capture coordinates?",
    options: ["Geolocation", "Geofence", "Custom address", "External lookup"],
    answer: "A",
    type: "single"
  },
  {
    question: "Northern Trail Outfitters wants to initiate expense reports from Salesforce to the external HR system. This process needs to be reviewed by managers and directors. Which two tools should an administrator configure? Choose 2 answers",
    options: ["Quick Action", "Outbound Message", "Approval Process", "Email Alert Action"],
    answer: "BC",
    type: "multiple",
    count: 2
  },
  {
    question: "When a Sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched. Which automation tool should an administrator use to build this discount calculator screen?",
    options: ["Flow Builder", "Workflow Rule", "Platform Event", "Process Builder"],
    answer: "A",
    type: "single"
  },
  {
    question:"Universal Containers is trying to improve the user experience when searching for the tight status on a case. The company currently has one support process that is used for all record types on cases. The support process has 10 status values. Service reps say they never need more than five depending on what kind of case they are working on. How should the administrator improve on the current implementation?",
    options: ["Reduce the number of case status values to five.", "Create a Screen Flow that shows only the correct values for status and surface the flow in the utility bar of the console.", "Review which status choices are needed for each record type and create support processes for each that is necessary.", "Edit the status choices directly on the record type"],
    answer: "C",
    type: "single"
  },
  {
    question: "The administrator at Cloud Kicks has a Custom picklist field on Lead, which is missing on the Contact when leads are converted. Which two items should the administrator do to make sure these values are populated? Choose 2 answers",
    options: ["Create a custom picklist field on Contact.", "Update the picklist value with a validation rule.", "Map the picklist field on the Lead to the Contact.", "Set the picklist field to be required on the Lead Object."],
    answer: "AC",
    type: "multiple",
    count: 2
  },
  {
    question: "Northern Trail Outfitters wants to track ROI for contacts that are key stakeholders for opportunities. The VP of Sales requested that this information be accessible on the opportunity and available for reporting. Which two options should the administrator configure to meet these requirements? Choose 2 answers",
    options: ["Customize Campaign Member Role.", "Add the Campaign Member related list to the Opportunity page layout.", "Customize Campaign Role.", "Customize Opportunity Contact Role.", "Add the Opportunity Contact Role related list to the Opportunity page layout."],
    answer: "DE",
    type: "multiple",
    count: 2
  },
  {
    question: "The VP of sales at Universal Containers wants to prevent members of the sales team from changing an opportunity to a date in the past. What should an administrator configure to meet this requirement?",
    options: ["Assignment Rule", "Validation Rule", "Field-Level Security", "Approval Process"],
    answer: "B",
    type: "single"
  },
  {
    question: "The Client services and customer support teams share the same profile but have different permission sets. The Custom Object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfill this request?",
    options: ["Sharing settings", "Page Layout Assignment", "Component Visibility", "Record Type Assignment"],
    answer: "C",
    type: "single"
  },
  {
    question: "An administrator wants to create a form in Salesforce for users to fill out when they lose a client. Which automation tool supports creating a wizard to accomplish this goal?",
    options: ["Process Builder", "Approval Process", "Outbound Message", "Flow Builder"],
    answer: "D",
    type: "single"
  },
  {
    question: "An administrator has been asked to update a flow that was created as part of a recent update. When the administrator opens the flow for editing, the Flow toolbox offers only four elements: Assignment, Decision, Get Records, and Loop. What would cause this?",
    options: ["The flow is a screen flow.", "The version of the flow is inactive.", "The flow is a before save flow.", "The version of the flow is activated."],
    answer: "C",
    type: "single"
  },
  {
    question: "Users at Cloud Kicks are reporting different options when uploading a custom picklist on the Opportunity object based on the kind of opportunity. Where Should an administrator update the option in the picklist?",
    options: ["Fields and relationships", "Related lookup filters", "Record Type", "Picklist value sets"],
    answer: "C",
    type: "single"
  },
  {
    question: " The administrator for Cloud Kicks has created a screen flow to help service reps ask the same set of questions when customers call in with issues. This screen should be visible from cases. How should the screen flow be distributed?",
    options: ["Page Layout", "Component Filter", "Lightning page", "Home page"],
    answer: "C",
    type: "single"
  },
  {
    question: "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
    options: ["Create a custom Lightning App with the action", " Modify compact Case page layout to include the action", " Include the action in the Salesforce Mobile Navigation menu", "Add the Salesforce Mobile and Lightning Experience action to the page layout"],
    answer: "D",
    type: "single"
  },
  {
    question: "The administrator at DreamHouse Realty added an email quick action to the Case page layout and is unable to see the action on the case feed. Which feature must be enabled to ensure the quick action will be displayed as expected?",
    options: ["Email Notifications", "Email-to-Case", "Email Alerts", "Email Templates"],
    answer: "B",
    type: "single"
  },
  {
    question: "An administrator has reviewed an upcoming critical update. How should the administrator proceed with activation of the critical update?",
    options: ["Activate the critical update in a sandbox", "Allow the critical update to auto-activate", " Activate the critical update in production", "Allow the critical update to auto-activate in a sandbox"],
    answer: "A",
    type: "single"
  },
  {
    question: "DreamHouse Realty regularly processes customer requests for warranty work and would like to offer customers a self-serve option to generate cases. Which two solutions should an administrator use to meet this request?  Choose 2 answers",
    options: ["Web-to-Case", "Case Escalation", "Case Queues", "Email-to-Case"],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: "An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing. What should the administrator do to meet the deadline without increasing the budget?",
    options: ["Train someone on the sales and marketing teams to build dashboards", "Check the AppExchange for prebuilt Solution that can be easily customized", "Hire a Consultant to build the custom dashboards", "Build the dashboards manually to meet the deadline"],
    answer: "B",
    type: "single"
  },
  {
    question: "Dreamhouse realty wants to offer a form on its experience cloud site where inspectors will submit findings from a property inspection. Which feature should an administrator place on the page to fulfill this requirement?",
    options: ["Related List", "Related List", "Record Detail", " Screen Flow"],
    answer: "D",
    type: "single"
  },
  {
    question: "The administrator at Ursa Major Solar need to make sure the unassigned cases from VP customers get transferred to the appropriate service representative within 5 hours. VIP Customers have access to support 24 hours a day. How should this be configured ?",
    options: ["Assignment Rules", "Business Hours", "Case Queues", "Escalation Rules"],
    answer: "A",
    type: "single"
  },
  {
    question: "An administrator at Ursa Major Solar needs to send information to an external accounting system whenever an opportunity closes. What workflow action should the administrator use to accomplish this?",
    options: ["Assign Task", "Outbound Message", "Create Record", "Custom Notification"],
    answer: "B",
    type: "single"
  },
  {
    question: "Northern Trail Outfitters has the Case Object set to private. The support manager raised a concern the reps have a boarder view of data than expected and can see all cases on their groups dashboards. What could be Causing reps to have inappropriate access to data on dashboards? this?",
    options: ["Dashboard Filters", "Dashboard Subscriptions", " Dynamic Dashboards", " Dynamic Dashboards"],
    answer: "C",
    type: "single"
  },
  {
    question: "An Administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won and another task after 60 days to check in with the customer. which two automation tools should the administrator use? Choose 2 answers",
    options: ["process builder", "workflow Rule", "Field Update", "Outbound Message"],
    answer: "AB",
    type: "multiple",
    count: 2
  },
  {
    question: "An administrator Creates a custom text area field on the Account object and adds it to the service team's page layout. The services team manager loves the addition of this field and wants it to appear in the highlights panel so that the services reps can quickly find it when on the Account Page. How should the administrator accomplish this?",
    options: ["Create a new page layout and a new section titled highlights panel","In the Account object manager, create a custom compact layout.", "From the page layout editor, drag the field to the highlights panel.", "Make the field required and move it to the top of the page."],
    answer: "B",
    type: "single"
  },
  
  {
    question: "A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest from online. The team currently does not access to the lead object. How should an administrator provide proper access?",
    options: ["Create a new profile", "Configure permission sets.", "Assign a new role.", "Set Up Manual Sharing"],
    answer: "B",
    type: "single",
  },
  {
    question: "An administrator supporting a global team of salesforce users has been asked to configure company settings. Choose 2 options",
    options: ["Currency Locale", "Default Language", "Password Policy", "Login Hours"],
    answer: "AB",
    type: "multiple",
    count: 2
  },
  {
    question: "Which item is available in a Lightning App where visibility is limited to the Salesforce Mobile App?",
    options: ["Today", "Favorites", "Utility Bar","Home Page"],
    answer: "C",
    type: "single"
  },
  {
    question: " Ursa Major Solar wants to know which of its marketing efforts are helping the team win Opportunities. What should an administrator configure to provide these insights?",
    options: ["Campaign Hierarchy", "Campaign Influence", "Map Custom Lead Fields", "List Email Activities"], 
    answer: "B",
    type: "single", 
  },
  {
    question: "Ursa Major Solar uses two different page layouts for Account records. One page layout reflects the fields related to customer accounts and another page layout includes fields for partner accounts. The administrator has assigned the customer account page layout to sales and support users and the partner account layout to the partner management team. What should the administrator configure to meet this requirement? ",
    options: ["Use a public group and a criteria-based sharing rule to share customer accounts with the partner team", "Add members of the partner management team to the default Account team for the customer accounts", "Grant create, read, edit and delete access to customer accounts on the partner team profile", "Create one record type for customer accounts and one record type for partner accounts."],
    answer: "D",
    type: "single"
  },
  {
    question: "User at Cloud Kicks want to see information more useful for their role on the Case page. How should an administrator make the pages more dynamic and easier to use? ",
    options: ["Add Component visibility filters to the Components", "Remove fields from the record details component", "Delete the extra component from the page", "Include more tab components with filters."],   
    answer: "A",
    type: "single"
  },
  {
    question: "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. which feature should an administrator configure to meet this requirement?",
    options: ["Case Scheduled Reports", "Case Dashboard Refreshes", "Case Escalation Rules", "Case Assignment Rules"],
    answer: "C",
    type: "single"
  },
  {
    question: "An administrat Cloud Kicks has created a screen flow for their sales team to use when they add new leads. The screen flow collect name, email and shoe preference. which two things should the administrator do to display the screen flow? Choose 2 answers",
    options: ["Create a tab and add the screen flow to the page", "Use a flow element and add the screen flow to the record page", "Add the flow in the utility bar of the console", "install an app from the AppExchange"],
    answer: "AB",
    type: "multiple",
    count: 2
  },
  {
    question: "Universal Containers has two sales teams, Sales team A and Sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How Should the administrator share records owned by sales team A with Sales team B?",
    options: ["Hierarchical sharing", "Use Manual sharing", "Criteria based sharing", "Owner based sharing"],
    answer: "C",
    type: "single",
  },
  {
    question: " An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Close Date, and Amount. How should the administrator export this file? ",
    options: ["Data Export Wizard", "Data Import Wizard", "Data Export Wizard", "Data Loader"],
    answer: "D",
    type: "single"
  },
  {
    question: " Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should the administrator ensure that the emails are sent to the correct queue?",
    options: ["Utilize a flow to identify the correct queue and assign the case", "Use a custom email services to set the owner of the case upon creation", "Create an Escalation Rules to send cases to the correct queue", "Configure Email-to-Case so emails are delivered to the correct queue."],
    answer: "D",
    type: "single",
  },
  {
    question: "Sales reps at Cloud Kicks want to be notified when they have a high likelihood of winning an opportunity over $1,000,000. Which feature meets this requirement? ",
    options: ["Key Deals", "Big Deal Alerts", "Activity Timeline", " Performance chart"],
    answer: "B",
    type: "single"
  },
  {
    question: "Universal Container wants to increase the security of their org by requiring stricker user passwords. Which two of the following should an administrator configure?  Choose 2 answers ",
    options: ["Password different then username", "Prevent common words", "Minimum password length", "Password complexity requirement"],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: "Northern Trail Outfitters wants to know the average stage duration for all closed Opportunities. How should an administrator support this request? ",
    options: ["Use process builder to capture the daily average on each opportunity", "Add Formula Fields to track Stages on each Opportunity", "Run the Opportunity Stage Duration report", "Refresh weekly reporting snapshots for Closed Opportunities"],
    answer: "C",
    type: "single",
  },
  {
    question: "Ursa Major Solar has a path on Case. The Company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from preventing the case back to a previous status. Which Feature Should an administrator use to fulfill this request? ",
    options: ["Validation rules", "Global Value Picklists", "Global Value Picklists", "Dependent Picklists"],
    answer: "A",
    type: "single"
  },
  {
    question: "  Sales reps miss key fields when filling out on opportunity record through the process. Reps need to move forward Win unable to enter previous stage. Which three options should the administrator use to address this need? Choose Three answers ",
    options: ["Enable guided selling", "Use Validation Rules", "Configure Opportunity Path", "Use Flow to mark fields required","Mark fields required on the page layout"],
    answer: "BCE",
    type: "multiple",
    count: 3
  },
  {
    question: " Cloud Kicks (CK) has new administrator who is asked to put together a memo detailing salesforce uses to budget for upcoming license purchases. Where Should the administrator go to find out what type of licenses CK Has purchased and how many are available?",
    options: ["Search for licenses types in setup", "User Licenses Related List in Company information", "User Management settings in setup", "Usage based entitlement related list in company information"], 
    answer: "B",
    type: "single" 
  },
  {
    question: "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-Lead form on their website. They want to send different Message based on the Lead Industry Field Value. What Should an administrator configure to meet this requirement?",
    options: ["Use Validation rule to trigger workflow to email to Lead", "Configure an auto response rule to email the lead", "Add a public group and process builder to email the lead", "Create an assignment rule to email the lead"],
    answer: "B",
    type: "single",
  },
  {
    question: "Cloud Kicks has a Customer success agent going on leave and needs to change ownership on multiple cases. Which two users are able to fulfill this request?  Choose 2 answers ",
    options: ["A user with Read Permission on account", "A user with manager role above the agent.", "A user with the System Administrator profile", "A user with the Manage Cases Permission."],
    answer: "CD",
    type: "multiple",
    count: 2
  },
  {
    question: "The marketing director at Northern Trail Outfitters has requested that the budget field is populated in order for the Lead Status field to be marked as qualified. What tool should the administrator use to fulfill this request?",
    options: ["Lead Conversion", "Require Field", "Workflow Rule", "Validation Rule"],
    answer: "D",
    type: "single"
  }, 
  {
    question: "  The administrator are Cloud Kicks created a new field for tracking returns on their new cloud shoe. A user has submitted case to the administrator indication that the new field is unavailable. Which two steps should an administrator do to troubleshoot this issue?  Choose 2 answers",
    options: ["Ensure that the page layout for the user's profile has been updated", "Run the setup audit trail for the organization.", "Update the organization wide default for the object", "Review the field level security of the field for the user profile."],
    answer: "AD",
    type: "multiple",
    count: 2
  }, 
  {
    question: "  The administrator at Ursa Major Solar has Created a new record type for customer warranty cases  which two assignments should the administrator use to display the new record type to users? Choose 2 answers ",
    options: ["Profile Assignment", "Role Assignment", "App Manager Assignment", "Page layout Assignment"],
    answer: "AD",
    type: "multiple",
    count: 2
  },
  {
    question: "  A new Sales Rep at Ursa Major has a qualified lead that is ready for conversation. When using the Lead Conversion process, which two records can be Created? Choose 2 answers",
    options: [" Account", " Campaign", " Campaign", "  Contact"],
    answer: "AD",
    type: "multiple",
    count: 2
  },
  {
    question: "  Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working some of UC's Cases. Which two options should the administrator use to help the support team?  Choose 2 answers",
    options: ["Configure a flow to assign the cases to the queue.", " Use assignment rules to set the queue as the owner of the case", " Add Cass to the existing queue as available object.", " Create a new queue and add Cases as an available object."],
    answer: "AB",
    type: "multiple",
    count: 2
  },
  {
    question: " The administrator at AW Computing wants to send off client welcome tasks and a welcome email to the primary contact automatically when an Opportunity is Closed won. What automation tool best accomplishes this?",
    options: [" Validation Rule", "Outbound Message", "Approval Process", "Process Builder"],
    answer: "D",
    type: "single"
  },
  {
    question: " Cloud Kicks users are seeing error messages when they use one of their screen flows. The error messages are confusing but could be resolved if the users entered more information on the account before starting the flow. How should the administrator address this issues?",
    options: ["Remove validation rules so that the users are able to process without complete records.", "Create a permission set to allow users to bypass the error.", "use a fault connector and display a screen with text explaining what went wrong and how to correct it.", "Uncheck the end user Flow Errors box in setup."],
    answer: "C",
    type: "single"
  },
  {
    question: "  Cloud Kicks has a custom object named shoe. The administrator has been asked to ensure that when a relationship is created between Account and shoe to prevent orphaned shoe records.What should the administrator do to complete this requirement?",
    options: ["Create an indirect lookup", " Create an encrypted lookup", "Create a hierarchical lookup", "Create a master-detail lookup"],
    answer: "D",
    type: "single"
  },
  {
    question: "Aw Computing needs to capture a loss reason in rich text field when an opportunity is Closed lost.How should an administrator configure this requirement?  ",
    options: ["Select the requirement checkbox next to the loss reason field on the page layout.", "Create a validation rule to display an error if stage is Closed lost and Loss Reason is blank.", "Check the required checkbox on the Loss Reason field in Object Manger.", "Configure a workflow rule to display an error if Loss Reason is blank."],
    answer: "B",
    type: "single"
  },
  {
    question: " Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet the requirement?",
    options: ["Enable Creation of Recurring Tasks.", "Flow to create recurring tasks.", "Workflow rule to create recurring tasks", "Turn on Recurring Activities."],
    answer: "A",
    type: "single"
  },
  {
    question: " Cloud Kicks want its reports to show a Fiscal Year that starts on February 1 and has 12 months. How Should the Administrator Address this requirement?",
    options: ["Set the Fiscal Year to Custom and the starting month as February.", "Set the Fiscal Year to Custom and the duration to 4 quarters.", "Set the Fiscal Year to Standard and the starting month as February.", "Set the Fiscal Year to Standard and the duration to 12 months."],   
    answer: "C",
    type: "single"
  },
  {
    question: " Cloud Kicks has asked the administrator to test a new screen flow that create contacts. What are two key components of testing the flow? Choose 2 answers",
    options: ["Set Up a flow interview to test the flow.", "Run the flow using it to create contacts.", "Use Debug to test the flow in Flow Builder.", "Test the flow in a sandbox"],
    answer: "BD",
    type: "single",
    count: 2
  },
  {
    question: " An administrator at Universal Containers is reviewing current security settings in the company's Salesforce org What Should the administrator do to prevent unauthorized access to Salesforce? ",
    options: ["Disable TLS requirements for sessions", "Enable multi factor authentication", "Customize organization wide default", " Enable caching and autocomplete on login page"],
    answer: "B",
    type: "single"
  },
  {
    question: "An administration needs to store the ID of record type of later use in a flow. Which kind of variable should the administrator use?",
    options: ["Boolean variable", "Text variable", "ID variable", "Record variable"],
    answer: "C",  
    type: "single"
  },
  {
    question: "Universal Containers (UC) would like to count the number of open cases associated with each account and update the account with this value every Friday evening. UC has several hundred open cases at any given time. What should the administrator use to complete this request?",
    options: ["Use a record trigger flow.", "Use a scheduled process builder.", "Use a Roll-Up summary.", "Use a scheduled flow."],
    answer: "D",
    type: "single"
  },  

];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];



function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question-text").innerText = q.question;

  const instruction = document.getElementById("question-instruction");
  if (q.type === "multiple") {
    instruction.innerHTML = `<strong>Select ${q.count} answers</strong>`;
    instruction.style.display = "block";
  } else {
    instruction.style.display = "none";
  }

  const form = document.getElementById("options-form");
  form.innerHTML = "";
  const inputType = q.type === "multiple" ? "checkbox" : "radio";

  q.options.forEach((option, i) => {
    const label = document.createElement("label");
    label.className = "option";
    label.innerHTML = `
      <input type="${inputType}" name="answer" value="${String.fromCharCode(65 + i)}">
      <span class="option-letter">${String.fromCharCode(65 + i)}.</span> ${option}
    `;
    label.addEventListener("click", function () {
      setTimeout(() => updateOptionStyles(), 10);
    });
    form.appendChild(label);
  });

  document.getElementById("current").innerText = currentQuestion + 1;
  document.getElementById("total").innerText = quizData.length;

  document.querySelector('.btn').disabled = false;
  document.querySelector('.btn').innerText = currentQuestion === quizData.length - 1 ? "Finish Quiz" : "Next";
}

function updateOptionStyles() {
  const labels = document.querySelectorAll("#options-form label");
  labels.forEach(label => {
    const input = label.querySelector("input");
    if (input.checked) {
      label.classList.add("selected");
    } else {
      label.classList.remove("selected");
    }
  });
}

function nextQuestion() {
  const q = quizData[currentQuestion];
  const selected = document.querySelectorAll('input[name="answer"]:checked');

  if (selected.length === 0) {
    alert("Please select an option!");
    return;
  }

  if (q.type === "multiple" && selected.length !== q.count) {
    alert(`Please select exactly ${q.count} answers!`);
    return;
  }

  let userAnswer = "";
  selected.forEach(input => {
    userAnswer += input.value;
  });

  userAnswers.push({
    questionIndex: currentQuestion,
    userAnswer: userAnswer,
    correctAnswer: q.answer,
    question: q.question,
    options: q.options,
    type: q.type
  });

  const labels = document.querySelectorAll("#options-form label");
  const correctAnswers = q.answer.split('');
  const userAnswerArray = userAnswer.split('');

  labels.forEach(label => {
    const input = label.querySelector("input");
    const letter = input.value;

    label.classList.remove("correct", "incorrect", "correct-not-selected");

    if (correctAnswers.includes(letter)) {
      if (userAnswerArray.includes(letter)) {
        label.classList.add("correct");
      } else {
        label.classList.add("correct-not-selected");
      }
    } else if (userAnswerArray.includes(letter)) {
      label.classList.add("incorrect");
    }

    input.disabled = true;
  });

  if (userAnswer.split('').sort().join('') === q.answer.split('').sort().join('')) {
    score++;
  }

  document.querySelector('.btn').disabled = true;

  if (currentQuestion < quizData.length - 1) {
    setTimeout(() => {
      currentQuestion++;
      loadQuestion();
    }, 2000);
  } else {
    setTimeout(showResults, 2000);
  }
}

function formatAnswer(answerString, options) {
  return answerString.split('').map(letter => {
    const index = letter.charCodeAt(0) - 65;
    return `${letter}. ${options[index]}`;
  }).join(', ');
}

function showResults() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");

  const percentage = Math.round((score / quizData.length) * 100);
  document.getElementById("score").innerText = score;
  document.getElementById("percentage").innerText = percentage;
  document.getElementById("correct-count").innerText = score;
  document.getElementById("incorrect-count").innerText = quizData.length - score;

  const detailedResults = document.getElementById("detailed-results");
  detailedResults.innerHTML = "";

  userAnswers.forEach((answer, index) => {
    const div = document.createElement("div");
    const isCorrect = answer.userAnswer.split('').sort().join('') === answer.correctAnswer.split('').sort().join('');
    div.className = "question-result " + (isCorrect ? 'correct' : 'incorrect');

    let resultHTML = `
      <h4>Question ${index + 1}: ${isCorrect ? '✓ Correct' : '✗ Incorrect'}</h4>
      <p><strong>Question:</strong> ${answer.question}</p>
    `;

    if (!isCorrect) {
      resultHTML += `
        <div class="answer-comparison">
          <p class="user-answer">Your Answer: ${formatAnswer(answer.userAnswer, answer.options)}</p>
          <p class="correct-answer">Correct Answer: ${formatAnswer(answer.correctAnswer, answer.options)}</p>
        </div>
      `;
    } else {
      resultHTML += `
        <div class="answer-comparison">
          <p class="correct-answer">Your Answer: ${formatAnswer(answer.userAnswer, answer.options)} ✓</p>
        </div>
      `;
    }

    resultHTML += '<div class="answer-options"><strong>All Options:</strong><br>';

    answer.options.forEach((option, i) => {
      const letter = String.fromCharCode(65 + i);
      const isCorrectOpt = answer.correctAnswer.includes(letter);
      const wasSelected = answer.userAnswer.includes(letter);

      let indicator = '';
      let optionClass = '';

      if (isCorrectOpt && wasSelected) {
        optionClass = 'correct-option';
        indicator = ' ✓ (Correct - You selected this)';
      } else if (isCorrectOpt && !wasSelected) {
        optionClass = 'correct-option';
        indicator = ' ✓ (Correct - You should have selected this)';
      } else if (!isCorrectOpt && wasSelected) {
        optionClass = 'selected-option';
        indicator = ' ✗ (You selected this incorrectly)';
      }

      resultHTML += `<div class="${optionClass}"><span class="option-letter">${letter}.</span> ${option}${indicator}</div>`;
    });

    resultHTML += '</div>';
    div.innerHTML = resultHTML;
    detailedResults.appendChild(div);
  });
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  document.getElementById("results").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

window.onload = loadQuestion;