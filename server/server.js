/**
 * Created by xianm on 2018-02-22.
 */
const express = require('express'),
    mongoose = require('mongoose'),
    DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',()=>console.log('it has been connected'));