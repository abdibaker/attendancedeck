k8s_yaml(['./k8s/auth.depl.yaml', './k8s/auth-mongo-depl.yaml', './k8s/ingress-srv.yaml'])

# Add a live_update rule to our docker_build
docker_build('abdibaker/auth', './auth',
    build_args={'node_env': 'development'},
    entrypoint='yarn run dev',
    live_update=[
        sync('./auth', '/app'),
        run('cd /app && yarn install', trigger=[ './yarn.lock']),
])
 