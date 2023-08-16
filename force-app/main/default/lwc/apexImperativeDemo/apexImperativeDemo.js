import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class ApexImperativeDemo extends LightningElement {
    accountList
    keyword = ''
    handleClick(){
        getAccountList({searchKey: this.keyword}).then(response => {
            this.accountList = response
            console.log('RESPONSE ' +JSON.stringify(response));
        }).catch(err => {
            console.err(err);
        })
    }

    closeList(){
       this.accountList = ''
    }

    handleSearch(e){
        window.clearTimeout(this.timer)
        this.keyword = e.target.value
        this.handleClick()

        timer = setTimeout(()=>{
            this.handleClick()
        }, 2000)
    }

  
}