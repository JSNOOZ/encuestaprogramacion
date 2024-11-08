const app = Vue.createApp({
    data() {
      return {
        teGustaProgramar: null,   
        aniosProgramando: 0,      
        lenguajesConocidos: '',   
        experiencias: '',         
        listaLenguajes: []        
      };
    },
    computed: {
      esFormularioValido() {
        return this.teGustaProgramar !== null;
      }
    },
    methods: {
      agregarLenguaje() {
        if (this.lenguajesConocidos.trim() !== '') {
          this.listaLenguajes.push(this.lenguajesConocidos.trim());
          this.lenguajesConocidos = ''; 
        }
      },
      manejarEnvio() {
        alert('Formulario enviado con éxito');
      }
    }
  });
   
  app.mount('#app');