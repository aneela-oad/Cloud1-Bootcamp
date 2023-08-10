import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
export default class Internationalization extends LightningElement {

    number = 8360.87

     formatted = new Intl.NumberFormat(LOCALE, {
        style:'currency',
        currency:'PKR',
        currencyDisplay:'symbol'
    }).format(this.number)
}