Running Using minikube.
k8s setup is quite simple so far. Using LoadBalancer Service type for external access.
Need to run `minikube tunnel` and keep it running for the external access to be configured correctly.
Currently I haven't setup kustomize, so you need to run `kubectl apply -f k8s.yml` in each of the three subdirectories.

TODO: One click deployment (use kustomize).
TODO: k8s differing based on environment.
TODO: Local environment faster.

Cron jobs are achieved using Kubernetes CronJob batch type.
Settings in the cron job batch type allow us to skip subsequent invocations if the previous job is already running or if it only finished x amount of time ago.

Steps for Running Locally in minikube:

`minikube start`
`docker build backend -t playground/backend`
`docker build frontend -t playground/frontend`
`docker build jobs -t playground/job`

`minikube image load playground/backend`
`minikube image load playground/frontend`
`minikube image load playground/job`

`minikube tunnel` - Keep this running

`kubectl apply -f backend/k8s.yml`
`kubectl apply -f frontend/k8s.yml`
`kubectl apply -f jobs/k8s.yml`

`kubectl get services`

You should see two services with external IPs.
You can access the graphql playground from the backend - `http://backend-external-ip:3000/graphql`
You can access the frontend from - `http://frontend-external-ip`

The services use service names to communicate internally, so the python cronjob makes a get request to `http://playground-backend:3000/graphql` rather than needing a specific ip.