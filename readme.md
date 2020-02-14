# Simple docker helloworld

It will run:
- A nodejs container
- On port 8080
- And return "Hello world from server: ${hostname}"

To use:
- Build: `docker build -t gregbkr/hello`
- Run: `docker run --name hello -p 8080:8080 gregbkr/hello`
- Curl localhost:8080

Kubernetes:
- Deploy: IMAGE=282835178041.dkr.ecr.eu-west-3.amazonaws.com/hello IMAGE_TAG=prod kubectl apply -f hello.yml
- Test the app by curling the public DNS `EXTERNAL-IP` listed here: `kubectl get svc`
- Curl: `curl acc43f4be4e5311eab2ed0e7ccd0f45b-1073317507.eu-west-3.elb.amazonaws.com:8080`
- Delete deploy: `kubectl delete -f hello.yml`