// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const { createApp } = Vue

createApp({
  data() {
    return {
    //   "elEmail": "",
      "emailList" : []
    }
  },
  mounted () {
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( randomEmail => {
            // this.elEmail = randomEmail.data.response;
            // console.log(this.elEmail);
            this.emailList.push(randomEmail.data.response);
        }),
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( randomEmail => {
            
            this.emailList.push(randomEmail.data.response);
        }),
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( randomEmail => {
        
            this.emailList.push(randomEmail.data.response);
        }),
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( randomEmail => {
        
            this.emailList.push(randomEmail.data.response);
        }),
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( randomEmail => {
        
            this.emailList.push(randomEmail.data.response);
        }),
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( randomEmail => {
            
            this.emailList.push(randomEmail.data.response);
        }),
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( randomEmail => {
    
            
                this.emailList.push(randomEmail.data.response);
            }),
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( randomEmail => {
        
            this.emailList.push(randomEmail.data.response);
        }),
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( randomEmail => {
        
            this.emailList.push(randomEmail.data.response);
        }),
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( randomEmail => {
        
            this.emailList.push(randomEmail.data.response);
        }),
    console.log(this.emailList);
  }
}).mount('#app')