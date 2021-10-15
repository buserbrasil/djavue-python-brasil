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

