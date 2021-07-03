<h1 align="center">
    <img alt="Proffy" src="web/src/assets/logo.svg" width="200px" />
</h1>

<h4 align="center">
  🚀 Next Level Week 2
</h4>


<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Django](https://www.djangoproject.com/)
- [Django-Rest-Framework](https://www.django-rest-framework.org/)
- [Cloudinary](https://cloudinary.com/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto
**Proffy é uma plataforma de estudos online que deseja facilitar o contato entre professores disponíveis e alunos interessados.**

## Instalação
### Pré requisitos
Ter instalado:
- [Python](https://www.python.org/downloads/)
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

### Backend
#### Primeiro: renomear arquivo com variáveis de ambiente
-  **Renomear _backend/setup/env_example.py_ para _backend/setup/env.py_**

#### Segundo: no terminal, rodar
```sh
# Entrar na pasta dos arquivos do backend
cd backend

# Criar um ambiente virtual
python -m venv venv

# Ativar o ambiente virtual
. venv/Scripts/activate
# ou source ./venv/Scripts/activate

# Instalar os pacotes necessários
pip install -r requirements.txt

# Executar as migrações
python manage.py migrate

# Carregar fixtures
python manage.py loaddata school_subjects

# Rodar backend
python runserver.py
```
<p align="center">
    <img alt="API 1" src="./images/api_1.png" width="500px" />
</p>

### OBS:
Usei o *Cloudinary* para salvar as imagens dos professores, mas não é necessário.

### Frontend
#### No terminal, rodar
```sh
# Entrar na pasta dos arquivos do frontend
cd web

# Instalar os pacotes do projeto
yarn install

# Rodar
yarn start
```

<h1 align="center">
  <img alt="Web 1" src="./images/web_1.png" width="400px" />
  <img alt="Web 2" src="./images/web_2.png" width="400px" />
  <img alt="Web 3" src="./images/web_3.png" width="400px" />
</h1>

### Mobile
#### No terminal, rodar
```sh
# Entrar na pasta dos arquivos do frontend
cd mobile

# Instalar os pacotes do projeto
yarn install

# Rodar
expo start
```

#### Terceiro: rodar expo no celular
- Abrir expo no celular
- Ler QR code e executar o app

<h1 align="center">
    <img alt="Web 1" src="./images/mobile_1.png" width="800px" />
</h1>