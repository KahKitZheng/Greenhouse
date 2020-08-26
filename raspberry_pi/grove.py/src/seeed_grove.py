#!/usr/bin/env python3

import time

from mraa import getGpioLookup
from seeed_dht import DHT
from grove.grove_moisture_sensor import GroveMoistureSensor
from grove.display.jhd1802 import JHD1802
 
def main():
    # Grove - 16x2 LCD(White on Blue) connected to I2C port
    lcd = JHD1802()

    # Grove - Temperature&Humidity Sensor connected to port D5
    tempHumidSensor = DHT('11', 5)
 
    # Grove - Moisture Sensor connected to port A0
    moistSensor = GroveMoistureSensor(0)
 
    while True:
        humid, temp = tempHumidSensor.read()

        # Sensor output value of dry, moist and wet soil
        mois = moistSensor.moisture
        if 0 <= mois and mois < 300:
            level = 'dry'
        elif 300 <= mois and mois < 600:
            level = 'moist'
        else:
            level = 'wet'

        print('Temperature {}°C, Humidity {}%'.format(temp, humid))
        print('Moisture: {}, {}'.format(mois, level))

        lcd.setCursor(0, 0)
        lcd.write('Temperature: {0:2}C'.format(temp))

        lcd.setCursor(1, 0)
        lcd.write('Humidity:    {0:2}%'.format(humid))
 
        time.sleep(10)

        lcd.setCursor(0, 0)
        lcd.write('Moisture: {0:>6}'.format(mois))
 
        lcd.setCursor(1, 0)
        lcd.write('Descript: {0:>6}'.format(level))
 
        time.sleep(10)
 
if __name__ == '__main__':
    main()