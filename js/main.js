// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const { createApp } = Vue

createApp({
  data() {
    return {
        "n" : 10,
        "emailList" : []
    }
  },
  mounted () {
    for( let i = 0; i < this.n; i++ ) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( randomEmail => {
            this.emailList.push(randomEmail.data.response);}
        )
    }
}
}).mount('#app')