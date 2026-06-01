TODO:
- Add styles to all views
- Add loading components for every view and part of screen
- Add Data like date, lesson and group for each class
- CRUD GRUPOS
- NAVBAR
- Almacenar datos en local antes de irse a el backend, se hace la priera vez que se carga la web, luego por botón o ondemand(websocket o similares)
Linea de pensamiento registro de clases, feature 1 base

Click a botón crear nueva clase
crear la clase, que debe contener la info de la siguiente clase correspondiente a el grupo siguiente al último al que se le dió clase normal

la clase siguiente se determina teniendo en cuenta la clase correspondiente siguiente al grupo siguiente en el orden del calendario, ese orden de calendario se debe tener en cuenta basado en un orden de día y de hora para cada clase

es necesario tener una lista de grupos en la que se guarde en qué lección van, qué día se dá la clase y a qué hora se da la clase, con esto en mende se podrá luego consultar al dar click en crear clase la lista de grupos para el día presente posterior a la hora de la ultima clase creada y con ello generar de forma semiautomática la nueva clase


Modelo sugerido de datos para el grupo (BETA)

día de la clase: 0-6
hora de la clase: 0-23
Ultima lección dada: 1-40


modelo sugerido para clase

lección: 1-40
nombre lección: "M1l1" - "M10l4"
fecha: TIMESTAMP fecha de la lección para luego filtrar por mes y sacar ganancia mensual
tipo: regular extra perdida
grupoid: uuid