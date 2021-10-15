# djavue-python-brasil
Repositório de código de curso de Djavue ministrado na Python Brasil 2021

Completamente baseado no curso [Djavue](https://evolutio.io/curso/djavue).
A diferença está em usar o template [djavue2](https://github.com/evolutio/djavue2)

Passos a seguir:
1. Para instalação no WSL2 com Ubuntu 20.04: [Script de setup](https://github.com/renzon/computer-init-setups/blob/main/wls2.sh)
1. Instalação do vue-cli: `npm install -g vue-cli`
1. Carregando comandos: `source dev.sh`
1. rodar comando `dkbuild`
1. Ao rodar esse comando, houve problemas porque o diretório /run/nginx já existia. Solução foi usar a opção `-p` no comando mkdir do Dockerfile
1. Rodar comando para instalar dependências de frontend: `dknpminstall`
1. Esse comando deu problemas por permissão. Entrei na pasta frontend e rodei o comando `nvm use 14` depois `npm ci` para instalar dependências do node.
1. Depois disso rodei `dkup` e funcionou a tela inicial do nuxt acessando localhost
1. Criei o virtualenv: `python -m venv .venv`
1. Ativei o virtualenv: `source .venv/bin/activate`
1. Instalei as dependências: `pip install -r requirements.txt`
1. Rodei as migraçoes: `python manage.py migrate`
1. Criei um superuser: `python manage.py createsuperuser`
1. Acessei localhost/admin e consegui logar com o usuário

