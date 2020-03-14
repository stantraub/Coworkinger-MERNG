const Space = require('../../models/Space')

module.exports = {
  Query: {
    async getSpaces() {
      try {
        const spaces = await Space.find();
        return spaces;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getSpace(_, { spaceId }) {
      try {
        const space = await Space.findById(spaceId);
        if (space) {
          return space;
        } else {
          throw new Error("Space not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createSpace(_, { body }) {
        
    }
  }
};