function localtunnel {
  lt --port 5000 -s segunorinayooyelade
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done