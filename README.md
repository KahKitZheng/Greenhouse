# Greenhouse

For the course Visualization and Platform I needed to create a small web application that incorporates self generated data from a sensor. So I created a dashboard-like application. It displays the temperature, humidity, soil level of my plant. 

---

## Table of Contents

  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Hardware setup](#wiring)
    - [Sensor API](#sensor-api)
    - [Client](#client)
    - [Server](#server)
  - [Built With](#built-with)

---

## Prerequisites

| Parts needed                                        | Amount |
| :-------------------------------------------------- | -----: |
| Raspberry Pi 3B                                     |     1x |
| Seeed Grove - Base Hat for Raspberry Pi             |     1x |
| Seeed Grove - Temperature & Humidity Sensor (DHT11) |     1x |
| Seeed Grove - Moisture Sensor                       |     1x |
| Seeed Grove - Connectors                            |     2x |
| Micro USB                                           |     1x |
| Ethernet cable                                      |     1x |

---

## Getting Started

### Hardware setup
1. Connect the grove - base hat to the Raspberry Pi.
2. Connect the grove - temperature and humidity sensor to port **D5**.
3. Connect the grove - moisture sensor to port **A0**.
4. Use micro USB to connect Raspberry Pi with PC.


### Sensor API

**Step 1: Install the Raspberry Pi OS**
<br>
Install the Raspberry PI OS using the Raspberry PI Imager. This tool makes the process of creating images faster. Choose the right Raspberry PI imager tool depending on the operating system you currently are on. You can find the official download links ​[here​](https://www.raspberrypi.org/downloads/).

<br />

**Step 2: Activate headless mode**
<br>
In the ```/boot``` directory, create a file named ssh. This way we can access the Raspberry Pi on your own computer without having to use an extra mouse, keyboard and monitor.

<br />

**Step 3: Connect to the Raspberry Pi**
<br />
Turn the Pi on and open a new terminal. Connect using the following command:

```bash
ssh pi@your_pi_address
```

The default credentials for the Raspberry Pi is:
- username: ​ **pi**
- password: ​ **raspberry**

To find the address of the Raspberry Pi you can use following commands:
```bash
hostname -I
# or
ping raspberrypi.local
```

<br />

**Step 4: Change the Raspberry config**
<br />
After you successfully connect to the Pi, you need to modify the configurations of it.
1. Use the command: `sudo raspi-config`
1. Select #5 Interfacing options
2. Select P5 I2C
3. Select Yes
4. Select Ok
5. Select Finish

<br />

**Step 5: Clone the git repository**
```bash
git clone https://github.com/KahKitZheng/Greenhouse
```

<br />

**Step 6: Install the Seeed grove library**
```bash
cd Greenhouse/raspberry_pi/grove.py/src

curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s
```

<br />

**Step 7: Install the flask dependencies**
```bash
pip3 install flask-restful Flask-Cors
```

<br />

**Step 8: Run the API**
```bash
flask run --host=0.0.0.0
```

<br />
<br />


### Client

**Step 1: Clone the repository**
<br />
Open a new terminal and clone this time the repository on your PC.

```bash
git clone https://github.com/KahKitZheng/Greenhouse
```

<br />

**Step 2: Install the dependencies**
<br />
Go to the client folder and install the node modules
```bash
cd client

npm install
```

<br />

**Step 3: Run the client**
```bash
npm run start
```

<br />
<br />


### Server

**Step 1: Go to the server directory**
<br />
Open a new terminal and go to the server directory
```bash
cd server
```

<br />

**Step 2: Install the dependencies**
<br />
Just like the client, you need to install the node modules for the backend.
```bash
npm install
```

<br />

**Step 3: Run the server**
```bash
node server.js
```



---

## Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [Flask](https://flask.palletsprojects.com/en/1.1.x/)
