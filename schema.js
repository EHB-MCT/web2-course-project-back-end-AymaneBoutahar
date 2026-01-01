// schema for back-end

const coachSchema = {
  name: "String",
  game: "String",
  price: "Number",
  intro: "String",
  facts: "Array<String>"
};

module.exports = coachSchema;