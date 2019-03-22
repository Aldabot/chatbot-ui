# Test
Go to `./test` and run `yarn start`

To test in **IE11**:
Build test, publish in S3 and run in Virtual Machine IE11 browser:
- `cd ./test && yarn build`
- manually drag and drop `./test/dist/*` to s3 bucket
- open s3 bucket url in ie11 in virtual windows machine
the virtual machine is downloaded from [https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/]

# Production
Build in root-directory `./` and publish to gitlab repository of Zenersoft
- `yarn build`
