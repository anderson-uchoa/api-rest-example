<template>
  <div class="hello">

    <form class="form">
      <p>
        <textarea
                  placeholder="Insira o seu conteudo"
                  v-model="artigo.content">
        </textarea>
      </p>
      <input type="hidden"
             v-model ="artigo.id">
      <p>
        <button
            v-if="editar"
            class="primary"
            v-on:click="cadastrarArtigo">Editar</button>
        <button
            v-else
            class="success"
            v-on:click="cadastrarArtigo">Cadastrar</button>

      </p>
    </form>

    <div class="card">
      <div class="post"
           v-for="artigo in artigos"
           v-bind:key="artigo.id">
        <h3> {{artigo.content}} </h3>
        <p>
          <button class="danger" @click="deletarArtigo(artigo.id)">Deletar</button> |
          <button class="info" @click="editarArtigo(artigo)"> Editar</button>

        </p>
      </div>
    </div>
 </div>
</template>

<script>
import api from "../services/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Artigos',
  data(){
    return{
      artigos: [],
      artigo: {
        id: '',
        content: '',
      },
      editar: false
      }
    },

  methods:{
    obterArtigos(){
        api.get("posts")
          .then(res => {
            this.artigos = res.data.data;
          })
          .catch(err => console.log(err))
    },

    cadastrarArtigo(){
      if (this.editar === false){
        if(this.artigo.content === ''){
          alert("Preencha o titulo")
          return
        }

        api.post(`post/user/${18}`,{
              content: this.artigo.content
            })
            .then(res => res.json())
        alert('Dados cadastrados com sucesso!')
        this.obterArtigos()
        this.artigo.id = ''
        this.artigo.content = ''
      }else{
        api.put(`post/${this.artigo.id}`,{
              content: this.artigo.content
            })
            .then(res => res.json())
        alert('Dados atualizados com sucesso!')
        this.obterArtigos()
        this.artigo.id = ''
        this.artigo.content = ''
      }
    },
    deletarArtigo(id){
      if(confirm('Deseja deletar o artigo de id' + id)){
        api.delete(`post/${id}`)
            .then(res => res.json())
            .catch(err => console.log(err))
            alert('Deletado com sucesso!')
        this.obterArtigos()
      }
    },

    editarArtigo(artigo){
      this.editar = true
      this.artigo.id = artigo.id
      this.artigo.content = artigo.content

    }
  },
  created() {
    this.obterArtigos()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .card{
   background-color: #fff;
   color: #333;
 }
.hello{
  color: #333;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}
 .post{
   border:1px solid silver;
   padding: 10px;
   margin-top: 10px;
   text-align: left;
 }

 .danger{
   color: #fff;
   background: red;
   padding: 5px;
   margin-top: 5px;
 }

.info{
  color: #fff;
  background: blue;
  padding: 5px;
  margin-top: 5px;
}
.success{
  color: #fff;
  background: green;
  padding: 15px;
  border: 1px solid #333;
}
.primary{
  color: #333;
  background: cyan;
  padding: 15px;
  border: 1px solid #333;
}


</style>
