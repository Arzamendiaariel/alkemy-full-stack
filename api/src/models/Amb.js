const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Amb',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      category: {
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      operation: {
        type: DataTypes.ENUM('ingreso', 'egreso'),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
