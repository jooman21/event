import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database"; // Sequelize configuration
import User from "./user"; // Import the User model for the relationship

class Event extends Model {
  public id!: number;
  public title!: string;
  public date!: Date;
  public location!: string;
  public description!: string;
  public userId!: number; // Foreign key to user

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, // referring to the User model
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "events",
  }
);

// Establishing the one-to-many relationship
User.hasMany(Event, { foreignKey: "userId" });
Event.belongsTo(User, { foreignKey: "userId" });

export default Event;
