const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'abm',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      concepto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.ENUM(
          'refrigerios',
          'transporte',
          'muebles y útiles',
          'bienes de uso',
          'ventas',
          'cuenta-corriente',
          'ingresos-varios',
          'egresos-varios'
        ),
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ingreso: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      engreso: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      balance: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
