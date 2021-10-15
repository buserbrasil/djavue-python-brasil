# djavue-python-brasil
Repositório de código de curso de Djavue ministrado na Python Brasil 2021

Completamente baseado no curso [Djavue](https://evolutio.io/curso/djavue).
A diferença está em usar o template [djavue2](https://github.com/evolutio/djavue2)

Passos a seguir:
Para instalação no WSL2 com Ubuntu 20.04: [Script de setup](https://github.com/renzon/computer-init-setups/blob/main/wls2.sh)
Instalação do vue-cli: `npm install -g vue-cli`
Carregando comandos: `source dev.sh`
rodar comando `dkbuild`
Ao rodar esse comando, houve problemas porque o diretório /run/nginx já existia. Solução foi usar a opção `-p` no comando mkdir do Dockerfile
Rodar comando para instalar dependências de frontend: `dknpminstall`
Esse comando deu problemas por permissão. Entrei na pasta frontend e rodei o comando `nvm use 14` depois `npm ci` para instalar dependências do node.
Depois disso rodei `dkup` e funcionou a tela inicial do nuxt acessando localhost
Criei o virtualenv: `python -m venv .venv`
Ativei o virtualenv: `source .venv/bin/activate`
Instalei as dependências: `pip install -r requirements.txt`
Rodei as migraçoes: `python manage.py migrate`
Criei um superuser: `python manage.py createsuperuser`
Acessei localhost/admin e consegui logar com o usuário

