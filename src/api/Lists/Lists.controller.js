const Lists = require('./Lists.model');

module.exports = {
  //get all
  async list(req, res) {
    try {
      const lists = await Lists.find();
      res.status(201).json({ message: 'lists found', data: lists });
    } catch (err) {
      res.status(400).json(err);
    }
  },
  //getID
  async show(req, res) {
    try {
      const { listsId } = req.params;
      const lists = await Lists.findById(listsId);

      res.status(201).json({ message: 'lists found', data: lists });
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // post

  async create(req, res) {
    try {
      const { favsId } = req.params;
      const favList = [];
      favList.push(favsId);
      const user = req.userId;

      if (!user) {
        throw new Error('Favs invalido');
      }

      const newlists = {
        UserId: user,
        FavsId: favList,
      };
      console.log(newlists);

      const lists = await Lists.create(newlists);
      res.status(201).json({ message: 'Lists Created', data: lists });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Lists could not be created', data: error });
    }
  },
  //update
  async update(req, res) {
    try {
      const { favsId, listsId } = req.params;
      const lists = await Lists.findById(listsId);
      //console.log('lists', lists);
      const favList = lists.FavsId;
      favList.push(favsId);
      //console.log('favList', favList);
      const user = req.userId;

      if (!user) {
        throw new Error('Favs invalido');
      }

      const data = {
        UserId: user,
        FavsId: favList,
      };
      console.log(data);
      const listsUpdate = await Lists.findByIdAndUpdate(listsId, data, {
        new: true,
      });
      res.status(200).json({ message: 'Lists Updated', data: listsUpdate });
    } catch (error) {
      res
        .status(400)
        .json({ message: 'Lists could not be Updated', data: error });
    }
  },
  //delete
  async destroy(req, res) {
    try {
      /*
      const user = req.userId;
      const { favId } = req.params;
      let { userId } = await Lists.findById(favId);

      
      if (userId._id.valueOf() !== user) {
        throw new Error('Usuario invalido');
      }
      */
      const fav = await Lists.findByIdAndDelete(favId);
      res.status(200).json({ message: 'Comment Deleted', data: fav });
    } catch (error) {
      res
        .status(400)
        .json({ Message: 'Comment could not be Deleted', data: error });
    }
  },
};
