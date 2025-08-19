/* 
    Criar um programa que monitore alterações em arquivos e
    informe detalhes do sistema e do arquivo usando os
    módulos fs, events, os, path e url. 
*/

const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const events = new EventEmitter()

fs.watch()