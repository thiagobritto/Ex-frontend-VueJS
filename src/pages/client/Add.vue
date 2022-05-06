<template>
  <div class="client-add">
    <h2>Cadastro de clientes</h2>
    <form action="">
      <div>
        <input type="text" placeholder="Name" required>
        <input type="text" placeholder="Sobrenome" required>
      </div>
      <div>
        <input type="email" placeholder="E-mail" required>
      </div>
      <div>
        <input type="text" placeholder="CPF" required>
        <input type="text" placeholder="Telefone" required>
      </div>
      <br>
      <div>
        <input type="text" placeholder="Logradouro" required>
      </div>
      <div>
        <input type="text" placeholder="Bairro" required>
        <input type="text" placeholder="CEP" v-mask="'#####-###'" required>
      </div>
      <div>
        <select @select="(res)=>(city=res)">
          <option value="2">Natal</option>
          <option value="3">Natal</option>
          <option value="4">Natal</option>
        </select>
      </div>
      <div>
        <button>Adicionar</button>
      </div>
    </form> 
    {{city}}
  </div>
</template>

<script>

export default {
  data: () => ({
    city: 'ff'
  })
}
</script>

<style scoped>

.client-add
{
  padding: 20px;
}

.client-add h2
{
  margin-bottom: 15px;
}

.client-add form
{
  width: 500px;
}

.client-add form div
{
  display: flex;
}
</style>