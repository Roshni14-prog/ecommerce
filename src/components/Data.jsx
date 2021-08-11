/* eslint-disable react-hooks/rules-of-hooks */
import  { useState } from 'react';
import apple from './apple.jpg';
import hp from './hp.jpg';
import lenovo from './lenovo.jpg';
import dell from './dell.jpg';
import asus from './asus.jpg';
import accer from './accer.jpg';


const Data= useState([
    {
        imgsrc: apple,
        title: "Apple Microsoft Surphase Pro"
    },
    {
        imgsrc: hp,
        title: "HP Pavilion"
    },
    {
        imgsrc: lenovo,
        title: "Lenovo Legion Y540"
    },
    {
        imgsrc: dell,
        title: "Dell G3 3500"
    },
    {
        imgsrc: accer,
        title: "Accer Aspire 5"
    },
    {
        imgsrc: asus,
        title: "Asus S433FL-EB197TS"
    },
   

]);

 
export default Data;