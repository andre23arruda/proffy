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
# ou ./venv/bin/activate

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

# Instalar os pacotes necessários
yarn install

# Rodar
yarn start
```

<div align="center">
    <img alt="Home Page" title="Home Page" src="images/web_1.png?raw=true" width="400px" />
</div>
<p align="center">Home Page</p>
<hr>

<div align="center">
    <img alt="Student Page" title="Student Page" src="images/web_2.png?raw=true" width="400px" />
</div>
<p align="center">Student Page</p>
<hr>

<div align="center">
    <img alt="Teacher Page" title="Teacher Page" src="images/web_3.png?raw=true" width="400px" />
</div>
<p align="center">Teacher Page</p>
<hr>

### Mobile
#### No terminal, rodar
```sh
# Entrar na pasta dos arquivos do projeto mobile
cd mobile

# Instalar os pacotes necessários
yarn install

# Rodar
expo start
```

#### Terceiro: rodar expo no celular
- Abrir expo no celular
- Ler QR code e executar o app

<div align="center">
    <img alt="Splash" title="Splash" src="images/mobile_1.jpg" width="200px" />
    <img alt="On Boarding 1" title="On Boarding 1" src="images/mobile_2.jpg" width="200px" />
    <img alt="On Boarding 2" title="On Boarding 2" src="images/mobile_3.jpg" width="200px" />
</div>
<p align="center">Splash Screen, On Boarding 1 and On Boarding 2</p>
<hr>

<div align="center">
    <img alt="Home" title="Home" src="images/mobile_4.jpg" width="200px" />
    <img alt="Be a Teacher" title="Be a Teacher" src="images/mobile_5.jpg" width="200px" />
    <img alt="List Proffys" title="List Proffys" src="images/mobile_6.jpg" width="200px" />
</div>
<p align="center">Home, Be a Teacher and List Proffys</p>
<hr>

<div align="center">
    <img alt="Favorites" title="Favorites" src="images/mobile_7.jpg" width="200px" />
</div>
<p align="center">Favorites</p>
<hr>