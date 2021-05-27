set -x
npm run docs:dev &
sleep 1
echo $! > .pidfile
set +x