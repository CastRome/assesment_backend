const { Schema, model, models } = require('mongoose');
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
const passRegex = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$',
);
const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Debe ingresar un nombre.'],
      minlength: [4, 'El nombre es muy corto'],
      maxlength: [20, 'El nombre es muy largo'],
    },
    email: {
      type: String,
      required: [true, 'Debe ingresar un correo electronico.'],
      match: [emailRegex, 'Ingrese un correo electronico valido'],
      validate: [
        {
          async validator(value) {
            try {
              const user = await models.Users.findOne({ email: value });
              return !user;
            } catch {
              return false;
            }
          },
          message: 'Ya existe un usuario registrado con ese correo',
        },
      ],
    },
    password: {
      type: String,
      required: [true, 'Debe ingresar una contraseña.'],
      match: [passRegex, 'Ingresar una clave segura'],
    },
  },
  {
    timestamps: true,
  },
);
const Users = model('Users', UsersSchema);

module.exports = Users;
