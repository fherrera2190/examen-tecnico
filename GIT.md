### GIT

Simulando que contamos con la branch Master y la branch DEV, donde la última está
adelantada dado que tiene nuevas funcionalidades.
¿Qué pasos seguiría para resolver los siguientes requerimientos? Las soluciones pueden ser en palabras o con comandos GIT.

a. Se quiere revertir la última funcionalidad pusheada en branch DEV

    1. Primero voy a la rama DEV con el comando "git checkout dev"
    2. Luego uso "git log" para buscar mi commit y ver su hash
    3. Entonces hago un "git revert mihash"
    4. Por ultimo subo los cambios al repo remoto "git push origin dev"

b. Se quiere hacer un deploy en producción de la versión que llamaremos v1.2.0

    1. Me ubico en la rama master con "git checkout master"
    2. Traigo los últimos cambios "git pull origin master"
    3. Combino el contenido de dev en master "git merge dev"
    4. Le asigno una etiqueta git tag "v1.2.0"
    5. Subo la etiqueta al repo remoto "git push origin v1.2.0"
    6. Y por ultimo los cambios a la rama master: git push origin master
