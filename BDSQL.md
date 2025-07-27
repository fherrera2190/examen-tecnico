## Base de datos - SQL

Se requiere resolver las siguientes consultas SQL

a. Productos que tengan nombre pero no descripción
   
    SELECT * FROM productos WHERE nombre IS NOT NULL AND descripcion IS NULL;

b. Productos vendidos en las últimas 24 horas

    SELECT DISTINCT P.nombre
    FROM productos P
    JOIN detalleventas DV ON P.id_producto = DV.id_producto
    JOIN ventas V ON DV.id_venta = V.id_venta
    WHERE V.fecha >= NOW() - INTERVAL '1 DAY';

c. Recuento de todos los estados de venta

    SELECT estado, COUNT(*) as Total  FROM ventas GROUP BY estado;

d. Ventas en las que el cliente con email X gastó una suma mayor a Y

    SELECT V.id_venta, V.monto_total, C.email
    FROM ventas V
    JOIN clientes C ON V.id_cliente = C.id_cliente
    WHERE C.email = 'X' AND V.monto_total > Y;

