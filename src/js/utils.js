import LOCAL_CONFIG from '@/js/config';

var Web3 = require('web3');

import SkillsJSON from '@/assets/contracts/Skills.json';

export default {
    address0(address) {
        return address === '0x0000000000000000000000000000000000000000';
    },
    getWeb3() {
        return new Web3(window.ethereum);
    },
    SkillsContract() {
        let web3 = this.getWeb3();
        return new web3.eth.Contract(SkillsJSON, LOCAL_CONFIG.contract);
    },
}