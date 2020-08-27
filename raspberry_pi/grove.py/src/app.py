#!/usr/bin/env python3

import time

from datetime import datetime

from mraa import getGpioLookup
from seeed_dht import DHT
from grove.grove_moisture_sensor import GroveMoistureSensor
 
from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

class TempHumid(Resource):
    def get(self):
        # Grove - Temperature&Humidity Sensor connected to port D5
        sensor = DHT('11', 5)

        humidity, temperature = sensor.read()
        
        now = datetime.now()
        dt_string = now.strftime("%B %d, %Y %H:%M")
        
        data = {
            "humidity": {
                "value": humidity,
                "units": "%"
            },
            "temperature": {
                "value": temperature,
                "units": "celcius"
            },
            "issued_at": dt_string
        }

        return data

class Moisture(Resource):
    def getMoistLevel():
        # Grove - Moisture Sensor connected to port A0
        sensor = GroveMoistureSensor(0)

        # Sensor output value of dry, moist and wet soil
        moisture = sensor.moisture
        if 0 <= moisture and moisture < 300:
            return {
                "moisture": moisture,
                "description": 'dry'
            }
        elif 300 <= moisture and moisture < 600:
            return {
                "moisture": moisture,
                "description": 'moist'
            }
        else:
            return {
                "moisture": moisture,
                "description": 'wet'
            }
    
    def get(self):
        moisture = Moisture.getMoistLevel()
        
        now = datetime.now()
        dt_string = now.strftime("%B %d, %Y %H:%M")

        data = {
            "moisture": moisture,
            "issued_at": dt_string
        }

        return data

 
api.add_resource(TempHumid, "/api/temp_and_humid")
api.add_resource(Moisture, "/api/moisture")

app.run(debug=True)
 
if __name__ == '__main__':
    app.run(host='0.0.0.0')