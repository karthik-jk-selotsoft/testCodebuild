# Contributing to the project
Contributions to the project will be done using the "Fork/Pull" model. This process involves creating pull requests against the mainline in the code repository.

These pull requests will be verified and merged into the mainline. Merging of pull requests will involve a manual and an automated step. CI will inform if the build passes/fails and also about the code quality metrics etc.

Team leads will use this information and perform additional checks before merging the code to the main line.

## Monitoring code quality
Code quality can also be monitored on the local system by running ```yarn docs``` and then serving the ```dist/docs``` directory on a local server.

## Code quality standards
Code quality standards will be checked by ESLint against the [AirBnb Javascript code standards](https://github.com/airbnb/javascript). These code quality checks will run both on local machines during development and also on the CI server. If the CI detects that there are code quality errors, it will not deploy the code. The local copy of the ESLint is to help developers debug quality standards before pushing out code. CI server will run these checks independently to verify.

## Submitting a proposal prior to implementation
When building any non trivial feature, it is a good idea to create a implementation proposal on Gitlab and discuss with others. A implementation proposal can be created in Gitlab by adding a new ticket in the Issues Board with the title ```[Proposal]: Implementation of Foo feature```.

Once the feature is implementation is completed, it can be pushed out with a commit message which includes "Fixes #[Issue number]". This process will automatically close the ticket on the issue board.
