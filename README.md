# ☘️ Gardim Collector

This service subscribes to all topics in a given MQTT server, and stores all events and the topic it came from as Records in a MySql database.

## Requirements

- :whale: Docker

## Before Running

At the root directory, create a `.env` file with the following content:
```env
MQTT_URL=
MYSQL_URL=
MYSQL_USER=
MYSQL_PORT=
MYSQL_PASSWORD=
MYSQL_DATABASE=
```
## How to Run

First, run build:

```terminal
docker build -t "gardim-collector" -f Dockerfile .
```

then run:
```terminal
docker run gardim-collector
```

and this will create a container running the application.  

