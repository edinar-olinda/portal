# Portal Fisioterapia

## Configuração do Ambiente

1. Clone o repositório
2. Copie o arquivo `.env.example` para `.env`
```bash
cp .env.example .env
```
3. Preencha as variáveis de ambiente no arquivo `.env`
4. Instale as dependências
```bash
npm install
```
5. Execute o projeto
```bash
npm run dev
```

## Segurança
- Nunca commite o arquivo `.env`
- Mantenha as credenciais seguras
- Use apenas HTTPS em produção

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/708c230f-0ebc-485e-8355-975630ecc508

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/708c230f-0ebc-485e-8355-975630ecc508) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/708c230f-0ebc-485e-8355-975630ecc508) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Deploy

### Configurar Secrets no GitHub

1. Acesse as configurações do repositório no GitHub
2. Vá para Settings > Secrets and variables > Actions
3. Adicione os seguintes secrets:
   - `VITE_SUPABASE_URL`: URL do seu projeto Supabase
   - `VITE_SUPABASE_KEY`: Chave anônima do Supabase
   - `VITE_ADMIN_EMAIL`: Email do administrador
   - `VITE_ADMIN_PASSWORD`: Senha do administrador

O deploy será feito automaticamente para GitHub Pages quando houver push na branch main.
