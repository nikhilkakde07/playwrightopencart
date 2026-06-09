

/* //name.yml -- Info about the pipeline
steps
stages
env */

//GIt actions 

//1.Git init
//2.git remote add origin URL with no inverted commas
//FIrst 2 steps are for new repo for existing use below commands
//3.git status - to check status
//4.git add.
//5.git commit -m "Reason of commit"
//6.git push origin master

//What is Github actions?

//Github actions is a CI/CD tool provided by Github that allows you to automate your software development workflows directly from your GitHub repository.
//  It enables you to build, test, and deploy your code whenever there is a change in the repository, 
// such as a push or pull request. With GitHub Actions, 
// you can create custom workflows using YAML files that define the steps to be executed in response to specific events.
//  This helps streamline the development process and ensures that your code is always tested and deployed efficiently.

//How it works?
//1. Event Trigger: A workflow is triggered by an event, such as a push to the repository, a pull request, or a scheduled time.
//2. Workflow triggers: You define a workflow in a YAML file located in the .github/workflows directory of your repository. 
// This file specifies the steps to be executed when the workflow is triggered.
//3.Runner spins up : When the workflow is triggered, GitHub Actions spins up a runner,
//  which is a virtual machine or container that executes the defined steps.
//4.Job execution: The runner executes the steps defined in the workflow file,
//  which can include actions such as building the code, running tests, and deploying the application.
//5. Feedback and results: After the workflow execution is complete, you receive feedback on the status of the workflow,
//  including any errors or successes. You can also view logs and artifacts generated during the workflow execution.

