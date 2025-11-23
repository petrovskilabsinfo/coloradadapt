# ColorAdapt Landing Page

Современная посадочная страница для браузерного расширения ColorAdapt.

## Развертывание на Netlify

### Способ 1: Drag & Drop
1. Соберите проект: `npm run build`
2. Перейдите на [netlify.com](https://netlify.com)
3. Перетащите папку `dist` в область "Deploy manually"

### Способ 2: Git Integration
1. Загрузите код в GitHub репозиторий
2. Подключите репозиторий к Netlify
3. Настройки сборки:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Способ 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

## Локальная разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Собранные файлы будут в папке `dist/`.