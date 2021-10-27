Запуск приложения:
1) Скачать\клонировать проект. 
2) Подключиться к Ethereum ноде:
    - Если вы имеете доступ к ноде - можете указать свой http путь к ней в cfg.ts и перейти ко второму блоку.
    - Чтобы развернуть локально ноду: 
        1) Скачайте и установите Geth для вашей ОС https://geth.ethereum.org/downloads/;
        2) Откройте консоль и пропишите "geth --mainnet --syncmode "light" --http",
            в консоле должно вывести "Starting Geth on Ethereum mainnet...".
3) Должен быть глобально установлен Node.js:
    - Если установлен - перейдите к третьему блоку.
    - Скачайте и установите Node.js с https://nodejs.org/uk/
4) Откройте консоль (вторую, если в первой запущен Geth) и перейдите в консоле в корневую папку проетка,
    и запустите проект прописав "ts-node index.ts", результат работы будет сохраняться в файле result.txt