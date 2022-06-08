# НАСТРОЙКИ REACT

## ПРОВЕРКА СУЩЕСТВОВАНИЯ

```bash
    npx -v
```

## ЗАПУСК

```bash
    npm start
```

# ПОДДЕРЖКА EEL И СБОРКА В PYTHON .EXE

`public/index.html` ДОЛЖЕН СОДЕРЖАТЬ

```html
<!-- Load eel.js from the port specified in the eel.start options -->
<script type="text/javascript" src="http://localhost:8080/eel.js"></script>
```

в App.js должно быть
export const eel = window.eel
eel.set_host('ws://localhost:8080')

1. **Configure:** In the app's directory, run `npm install` and `pip install bottle bottle-websocket future whichcraft pyinstaller`
2. **Demo:** Build static files with `npm run build` then run the application with `python main.py`. A Chrome-app window should open running the built code from `build/`
3. **Distribute:** (Run `npm run build` first) Build a binary distribution with PyInstaller using `python -m eel main.py build --onefile` (See more detailed PyInstaller instructions at bottom of [the main README](https://github.com/ChrisKnott/Eel))
4. **Develop:** Open two prompts. In one, run `python main.py true` and the other, `npm start`. A browser window should open in your default web browser at: [http://localhost:3000/](http://localhost:3000/). As you make changes to the JavaScript in `src/` the browser will reload. Any changes to `main.py` will require a restart to take effect. You may need to refresh the browser window if it gets out of sync with eel.

# ДЕПЛОЙ

Запуск version.py деплоит проект в exe
