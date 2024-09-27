import { resolve } from 'path'

const pages = [
    {name: 'index', path: resolve(__dirname, '../index.html')},
    {name: 'about', path: resolve(__dirname, '../pages/about.html')},
    {name: 'contacts', path: resolve(__dirname, '../pages/contacts.html')},
    {name: 'masters', path: resolve(__dirname, '../pages/masters.html')},
    {name: 'offers', path: resolve(__dirname, '../pages/offers.html')},
    {name: 'rules', path: resolve(__dirname, '../pages/rules.html')},
    {name: 'sertificats', path: resolve(__dirname, '../pages/sertificats.html')},
    {name: 'service', path: resolve(__dirname, '../pages/service.html')},
    {name: 'vacancy', path: resolve(__dirname, '../pages/vacancy.html')},
];

export default pages