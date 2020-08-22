import { MongoClient } from "mongodb";
import { SpartanRepository } from "./repositories/SpartanRepository";
import { Spartan } from "./entities/Spartan";
import { HeroRepository } from "./repositories/HeroRepository";
import { Hero } from "./entities/Hero";

(async () => {
  const connection = await MongoClient.connect("mongodb://localhost");
  const db = connection.db("warriors");

  const spartan = new Spartan("Leonidas", 1020);
  const repository = new SpartanRepository(db, "spartans");
  const result = await repository.create(spartan);
  console.log(`spartan inserted with ${result ? "success" : "fail"}`);

  const count = await repository.countOfSpartans();
  console.log(`the count of spartans is ${count}`);

  const hero = new Hero("Spider man", 200);
  const repositoryHero = new HeroRepository(db, "heroes");
  const resultHero = await repositoryHero.create(hero);
  console.log(`hero inserted with ${resultHero ? "success" : "fail"}`);
})();
