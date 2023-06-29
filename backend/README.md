
## Passo a passo

1. Clonando o repo:
```bash
git clone https://github.com/anderson-uchoa/api-rest-example.git
cd api-rest-example
```

2. Instalando as dependências:
```bash
npm install
```

3. Rodando o projeto localmente:
```bash
npm run dev
```

## Estrutura do Projeto

```
 prisma        # prisma models (camada de dados)
 src\
 |--config\         # Variáveis de ambiente e coisas relacionadas à configuração
 |--controllers\    # Route controllers Controladores de rota (camada do controlador)
 |--middlewares\    # Express middlewares customizados
 |--api\            # Routes
 |--doc\            # Documentação 
 |--services\       # Lógica de negócios (camada de serviço)
 |--utils\          # Classes e funções utilitárias
 |--validations\    # Solicitação de validação de dados
 |--server.js       # App entry point
```
