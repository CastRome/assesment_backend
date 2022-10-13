const { Schema, model, models } = require('mongoose');

const favsSchema = new Schema(
  {
    title: {
      type: string,
      required: [true, 'por favor ingrese un titulo'],
    },
    description: {
      type: string,
      required: [true, 'por favor ingrese una descripcion'],
    },
    link: {
      type: string,
      required: [true, 'por favor ingrese un enlace'],
    },
  },
  {
    timestamps: true,
  },
);

const Favs = model('Favs', favsSchema);

module.exports = Favs;
